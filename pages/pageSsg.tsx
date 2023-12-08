import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const date = new Date().toISOString();
  return {
    props: {
      date,
    },
  };
};

const SSG = ({ date }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>ISR</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
      <Link href={"/catchAllSSG/param1-0/param2-0"}>
        Catch all to param1-0/param2-0
      </Link>
    </Flex>
  );
};

export default SSG;
