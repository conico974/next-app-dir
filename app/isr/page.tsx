import React from "react";

export const revalidate = 30;

async function getTime() {
  const res = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, 150);
  });
  return res;
}

const ISRPage = async () => {
  const time = await getTime();
  return (
    <hgroup>
      <h1>ISR Page</h1>
      <h3>{`Last generated at : ${time}`}</h3>
    </hgroup>
  );
};

export default ISRPage;
