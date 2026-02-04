// utils/authCookies.js
import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";
const OBFUSCATION_KEY = process.env.NEXT_PUBLIC_OBFUSCATION_KEY || "default_key";



if (!OBFUSCATION_KEY) {
  throw new Error("NEXT_PUBLIC_OBFUSCATION_KEY is not defined");
}
const obfuscateToken = (token) => {
  let result = '';
  for (let i = 0; i < token.length; i++) {
    const charCode = token.charCodeAt(i) ^ OBFUSCATION_KEY.charCodeAt(i % OBFUSCATION_KEY.length);
    result += String.fromCharCode(charCode);
  }
  return btoa(result);
};

const deobfuscateToken = (obfuscated) => {
  try {
    const decoded = atob(obfuscated);
    let result = '';
    for (let i = 0; i < decoded.length; i++) {
      const charCode = decoded.charCodeAt(i) ^ OBFUSCATION_KEY.charCodeAt(i % OBFUSCATION_KEY.length);
      result += String.fromCharCode(charCode);
    }
    return result;
  } catch (error) {
    console.error("Deobfuscation failed:", error);
    return null;
  }
};

export const setTokenCookie = (token) => {
  const obfuscatedToken = obfuscateToken(token);
  Cookies.set(TOKEN_KEY, obfuscatedToken, {
    expires: 7,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const getTokenCookie = () => {
  const obfuscatedToken = Cookies.get(TOKEN_KEY);
  if (!obfuscatedToken) return null;
  
  return deobfuscateToken(obfuscatedToken);
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_KEY);
};