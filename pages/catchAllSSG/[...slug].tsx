import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";

export const getStaticProps: GetStaticProps<{ date: string, slug: string[] }> = async (
  context
) => {
  const slug = context.params?.slug as string[];
  return {
    props: {
      date: new Date().toISOString(),
      slug: slug,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: Array.from({ length: 5 }, (_, i) => ({ params: { slug: [`param1-${i}`, `param2-${i}`] } })),
    fallback: false,
  };
};

const SSRDynamicRoutes = ({
  date,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const path = useRouter();
  return (
    <Flex direction={"column"}>
      <Heading>{`SSR Dynamic Routes : ${path}`}</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
      <Text>{`Params : ${slug.join(" ; ")}`}</Text>
    </Flex>
  );
};

export default SSRDynamicRoutes;
