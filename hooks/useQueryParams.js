'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import queryString from 'query-string';

const useQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get all current query params as an object
  const getQueryParams = () => {
    const paramsString = searchParams.toString();
    return queryString.parse(paramsString);
  };

  // Update query params
  const setQueryParams = (params) => {
    const currentParams = getQueryParams();
    const updatedParams = { ...currentParams, ...params };

    // Remove undefined or empty values
    const cleanedParams = Object.keys(updatedParams).reduce((acc, key) => {
      if (updatedParams[key] !== undefined && updatedParams[key] !== '') {
        acc[key] = updatedParams[key];
      }
      return acc;
    }, {});

    const queryStr = queryString.stringify(cleanedParams);

    router.replace(`?${queryStr}`);
  };

  return { getQueryParams, setQueryParams };
};

export default useQueryParams;
