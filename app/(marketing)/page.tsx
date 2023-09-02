import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  return (
    <>
      <hgroup>
        <h1>Index Page</h1>
        <h2>Index</h2>
        <p>{JSON.stringify(headersList)}</p>
      </hgroup>
    </>
  );
}
