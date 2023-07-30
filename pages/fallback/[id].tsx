import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticProps: GetStaticProps<{ date: string }> = async (
  context
) => {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 20 }, (_, i) => ({ params: { id: `${i}` } })),
    fallback: true,
  };
};

const FallbackTrueDynamicRoutes = ({
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const path = useRouter();
  return (
    <Flex direction={"column"}>
      <Heading>{`SSR Dynamic Routes : ${path}`}</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default FallbackTrueDynamicRoutes;
