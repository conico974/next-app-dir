"use client";
import Link from "next/link";
import React from "react";
import Logo from "../logo";
import styles from "./navbar.module.scss";

const Links = () => (
  <>
    <li>
      <Link href="/isr">ISR</Link>
    </li>
    <li>
      <Link href="/ssr">SSR</Link>
    </li>
    <li>
      <Link href="/pageIsr" prefetch={false}>
        ISR Page
      </Link>
    </li>
    <li>
      <Link href="/pageSsr" prefetch={false}>
        SSR Page
      </Link>
    </li>
    <li>
      <Link href="/product">Products</Link>
    </li>
  </>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.hamburger} onClick={toggle}>
        <strong>=</strong>
      </ul>
      <ul className={styles.links}>
        <Links />
      </ul>
      <ul>
        <li>
          <Link href="/dashboard" prefetch={false}>
            Login
          </Link>
        </li>
      </ul>
      <div className={`${styles.drawer} ${isOpen ? styles.open : styles.closed}`}>
        <Links />
        <li onClick={toggle}>Close</li>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  );
};
