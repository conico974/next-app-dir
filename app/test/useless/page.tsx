import Link from 'next/link';

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
