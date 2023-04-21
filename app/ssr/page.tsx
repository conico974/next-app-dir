import React from "react";
import { headers } from "next/headers";

async function getTime() {
  const res = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, 150);
  });
  return res;
}

const SSRPage = async () => {
  const headersList = headers();
  const referer = headersList.get("referer");
  const time = await getTime();
  return (
    <>
      <hgroup>
        <h1>SSR Page</h1>
        <h3>{`Last generated at : ${time}`}</h3>
      </hgroup>
      <article>
        <h2>Referer</h2>
        <p>{referer}</p>
      </article>
    </>
  );
};

export default SSRPage;
