import React from 'react';
import { faker } from '@faker-js/faker';
import Image from 'next/image';

export const revalidate = 300; // 5 minutes

export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: `${i + 1}` }));
}

async function getProductData(id: number) {
  faker.seed(id);
  const response = await fetch(
    'https://d2uze3ojgmz8re.cloudfront.net/api/test',
    {
      next: { tags: ['test'] },
    }
  );
  // const data = (await response.json()) as { date: string };
  return Promise.resolve({
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(640, 480, 'fashion', true),
    lastUpdate: new Date(),
  });
}

const Product = async ({ params: { id } }: { params: { id: string } }) => {
  const { image, name, price, description, lastUpdate } = await getProductData(
    parseInt(id)
  );
  return (
    <div>
      <div className="grid">
        <Image src={image} alt={name} width={640} height={480} />
        <div>
          <hgroup>
            <h1>{name}</h1>
            <h2>{`Last update : ${lastUpdate.toISOString()}`}</h2>
          </hgroup>
          <p>{description}</p>
          <p>{`${price} €`}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
