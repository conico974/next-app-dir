import { headers } from "next/headers";

export default function Contact() {
  const headersList = headers();
  return (
    <article>
      <h1>Contact</h1>
      <h2>Headers</h2>
      <pre>{JSON.stringify(headersList)}</pre>
    </article>
  );
}
