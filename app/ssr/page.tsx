import React, { Suspense } from 'react';
import { headers } from 'next/headers';
import MotionLayout from './component';
import { Dynamic } from './dynamic';

export const runtime = 'edge'


async function getTime() {
  const res = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, 1500);
  });
  return res;
}

const SSRPage = async () => {
  const headersList = headers();
  const referer = headersList.get('referer');
  const time = await getTime();
  // const response = await fetch(
  //   "https://d2uze3ojgmz8re.cloudfront.net/api/test",
  //   {
  //     next: {
  //       revalidate: 3600,
  //     }
  //   }
  // );
  // const json = await response.json();
  return (
    <MotionLayout>
      <hgroup>
        <h1>SSR Page</h1>
        <h3>{`Last generated at : ${time}`}</h3>
        {/* <h4>{JSON.stringify(json)}</h4> */}
      </hgroup>
      <article>
        <h2>Referer</h2>
        <p>{referer}</p>
      </article>
      {/* <Suspense fallback={<div>Suspense Loading</div>}>
        <Dynamic pathname="/ssr" />
      </Suspense> */}
    </MotionLayout>
  );
};

export default SSRPage;
