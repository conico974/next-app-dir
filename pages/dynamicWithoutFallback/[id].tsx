import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticProps: GetStaticProps<{ date: string }> = async (
  context
) => {
  const id = context.params?.id as string;
  
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 20 }, (_, i) => ({ params: { id: `${i}` } })),
    fallback: false
  };
};

const SSRDynamicRoutes = ({
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const path = useRouter();
  return (
    <Flex direction={"column"}>
      <Heading>{`SSG Dynamic Routes : ${path}`}</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default SSRDynamicRoutes;
