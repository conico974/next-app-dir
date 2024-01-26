import { headers } from 'next/headers';
import { ImageResponse } from 'next/og'
// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export const runtime = "nodejs";
 
// Image generation
export default async function Image() {

  const _headers = headers();
  // You don't even have to print anything below, you just need the above line so that this route is SSR
  console.log(_headers);
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About Acme
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      headers: {
        // Set the cache control header you want here
        "cache-control": "public, max-age=31536000, immutable"
      }
    }
  )
}