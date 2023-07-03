import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";
import { readFileSync } from "fs";

const client = new DynamoDBClient({ region: "eu-west-1" });

const buildId = readFileSync(".next/BUILD_ID", "utf8");
const file = readFileSync(
  `.open-next/cache/__fetch/${buildId}/dynamodb-cache.json`,
  "utf8"
);

const data = JSON.parse(file);

// Chunk array into batches of 25
const chunked = data.reduce((acc, curr, i) => {
  const index = Math.floor(i / 25);
  acc[index] = [...(acc[index] || []), curr];
  return acc;
}, []);

const promises = chunked.map((chunk) => {
  const params = {
    RequestItems: {
      "prod-next-app-dir-testCacheTable2": chunk.map((item) => ({
        PutRequest: {
          Item: item,
        },
      })),
    },
  };
  return client.send(new BatchWriteItemCommand(params));
});

await Promise.all(promises);
