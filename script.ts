import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";
import { readFileSync } from "fs";

type DataType = {
  tag: {
    S: string;
  }
  path: {
    S: string;
  }
  revalidatedAt: {
    N: string;
  }
}

export const handler = async () => {
  const client = new DynamoDBClient({});

  const file = readFileSync(
    `dynamodb-cache.json`,
    "utf8"
  );

  const data : DataType[] = JSON.parse(file);

  // Chunk array into batches of 25
  const chunked = data.reduce((acc, curr, i) => {
    const index = Math.floor(i / 25);
    acc[index] = [...(acc[index] || []), curr];
    return acc;
  }, [] as DataType[][]);

  const TableName = process.env.TABLE_NAME!;

  const promises = chunked.map((chunk) => {
    const params = {
      RequestItems: {
        [TableName]: chunk.map((item) => ({
          PutRequest: {
            Item: item,
          },
        })),
      },
    };
    return client.send(new BatchWriteItemCommand(params));
  });

  await Promise.all(promises);

}