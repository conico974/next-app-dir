import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import React from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      date: new Date().toISOString(),
      locale: context.params?.id as string,
    },
  };
};

const SSRDynamicRoutes = ({
  date,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>{`SSR Dynamic Routes : ${locale}`}</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default SSRDynamicRoutes;
