import React from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export const revalidate = 30;

function getProductData(id: number) {
  faker.seed(id);
  return {
    id,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(640, 480, "fashion", true),
    lastUpdate: new Date(),
  };
}

const Product = async () => {
  return (
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((id) => {
        const { image, name, price } = getProductData(id);
        return (
          <Link key={id} href={`/product/${id}`}>
            <article>
              <Image src={image} alt={name} width={640} height={480} />
              <hgroup>
                <h3>{name}</h3>
                <h4>{`${price} €`}</h4>
              </hgroup>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
