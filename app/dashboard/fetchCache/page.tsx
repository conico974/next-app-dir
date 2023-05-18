import { headers } from "next/headers";
import React from "react";
const getRealtimeData = async () => {
  const h = headers();
  return { date: new Date().toISOString() };
};

async function getData() {
  try {
    const response = await fetch(
      "https://d2jjvnhym149vv.cloudfront.net/api/test",
      {
        next: { revalidate: 30 },
      }
    );
    const data = await response.json();
    console.log("Revalidate 30s", data);
    return data as { date: string };
  } catch (error) {
    console.error(error);
    return { date: new Date().toISOString() };
  }
}

async function getData2() {
  try {
    const response = await fetch(
      "https://d2jjvnhym149vv.cloudfront.net/api/test?q=1",
      {
        next: { revalidate: 120 },
      }
    );
    const data = await response.json();
    console.log("Revalidate 120s", data);
    return data as { date: string };
  } catch (error) {
    console.error(error);
    return { date: new Date().toISOString() };
  }
}

const FetchCachePage = async () => {
  const { date } = await getData();
  const { date: date2 } = await getData2();
  const { date: realtimeDate } = await getRealtimeData();

  return (
    <article>
      <h3>Fetch Cache</h3>
      <form>
        <input type="submit" />
      </form>
      <p>Fetch data from the server and cache it.</p>
      <p>{`Real time : ${realtimeDate}`}</p>
      <p>{`Revalidate 30 seconds: ${date}`}</p>
      <p>{`Revalidate 120 seconds: ${date2}`}</p>
    </article>
  );
};

export default FetchCachePage;
