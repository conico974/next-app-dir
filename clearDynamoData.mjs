import {
  DynamoDBClient,
  BatchWriteItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "eu-west-1" });

const items = await client.send(
  new ScanCommand({
    TableName: "prod-next-app-dir-testCacheTable2",
  })
);

const chunked = items.Items.reduce((acc, curr, i) => {
  const index = Math.floor(i / 25);
  acc[index] = [...(acc[index] || []), curr];
  return acc;
}, []);

const promises = chunked.map((chunk) => {
  const params = {
    RequestItems: {
      "prod-next-app-dir-testCacheTable2": chunk.map((item) => ({
        DeleteRequest: {
          Key: {
            path: item.path,
            tag: item.tag,
          },
        },
      })),
    },
  };
  return client.send(new BatchWriteItemCommand(params));
});

await Promise.all(promises);
