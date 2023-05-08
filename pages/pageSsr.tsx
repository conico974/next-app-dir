import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import React from "react";

export const getServerSideProps = () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};

const SSR = ({ date }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>SSR</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default SSR;
