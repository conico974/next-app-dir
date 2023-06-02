import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import React from "react";

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const slug = context.params?.slug as string[];
  return {
    props: {
      date: new Date().toISOString(),
      slug: slug.join("/"),
    },
  };
};

const SSRDynamicCatchAll = ({
  date,
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>{`SSR Catch all routes ${slug}`}</Heading>
      <Text>{`Last generated at : ${date}`}</Text>
    </Flex>
  );
};

export default SSRDynamicCatchAll;
