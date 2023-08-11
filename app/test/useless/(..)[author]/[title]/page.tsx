import React from 'react';

export const revalidate = 0; // 5 minutes

const Product = async ({
  params: { author, title },
}: {
  params: { author: string; title: string };
}) => {
  return (
    <div>
      <div className="grid">
        <p>{author}</p>
        <p>{title}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
