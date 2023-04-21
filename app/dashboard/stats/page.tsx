import React from "react";

interface StatsPageProps {}

const StatsPage = ({}: StatsPageProps) => {
  return (
    <section>
      <article>
        <h3>Visiteurs</h3>
        <p>Nombre de visiteurs</p>
        <span>497000</span>
      </article>
      <article>
        <h3>BVues</h3>
        <p>Nombre de vues</p>
        <span>49754674</span>
      </article>
    </section>
  );
};

export default StatsPage;
