import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
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
    </Flex>
  );
};

export default SSG;
