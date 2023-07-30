import { headers } from 'next/headers';
import React from 'react';

const LoginPage = () => {
  const a = headers();
  return (
    <section>
      <article>
        <h3>Not a modal</h3>
        <p>If you see this without a hard refresh something went wrong</p>
      </article>
    </section>
  );
};

export default LoginPage;
