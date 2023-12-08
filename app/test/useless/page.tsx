import Link from 'next/link';

// export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <ul>
      <li>
        <Link href="/test/authorA/titleA">A</Link>
      </li>

      <li>
        <Link href="/test/authorB/titleB">B</Link>
      </li>
      <li>
        <Link href="/test/authorC/titleC">C</Link>
      </li>
    </ul>
  );
}
