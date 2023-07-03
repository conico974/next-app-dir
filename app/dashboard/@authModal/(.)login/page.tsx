import { Modal } from "@/component/app/modal";
import { headers } from "next/headers";

async function getTime() {
  const headersList = headers();
  const referer = headersList.get("referer");
  const res = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, 150);
  });
  return res;
}

export default async function Login() {
  const time = await getTime();
  return (
    <Modal isOpen>
      <hgroup>
        <h1>Login</h1>
        <h3>{`Last generated at : ${time}`}</h3>
      </hgroup>
    </Modal>
  );
}
