import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import React from "react";

interface ISRProps {}

export const getStaticProps = async () => {
  const date = new Date().toISOString();
  return {
    props: {
      date,
    },
    revalidate: 30,
  };
};

const ISR = ({ date }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>ISR</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default ISR;
