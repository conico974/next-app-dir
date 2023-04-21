import Link from "next/link";
import React from "react";
import styles from "./layout.module.scss";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className={styles.container}>
      <aside>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/stats">Stats</Link>
          </li>
          <li>
            <Link href="/dashboard/fetchCache">Fetch Cache</Link>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
