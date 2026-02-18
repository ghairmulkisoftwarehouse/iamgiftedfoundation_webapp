'use client' // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-black">Something went wrong!</h2>
          <button
            className="btn-primary px-3 py-2"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}