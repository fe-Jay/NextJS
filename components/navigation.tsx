'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/styles/navigation.module.css';

const Navigation = () => {
  const path = usePathname();
  console.log(path);

  return (
    <nav className={styles.nav}>
      <h1>Navigation</h1>
      <ul className={styles.list}>
        <li>
          <Link href='/'>Home</Link> {path === '/' && '⚡️'}
        </li>
        <li>
          <Link href='/about'>About</Link> {path === '/about' && '🔥'}
        </li>
        <li>
          <Link href='/about/company'>Company</Link> {path === '/about/company' && '🐻'}
        </li>
        <li>
          <Link href='/about/company/sales'>Sales</Link> {path === '/about/company/sales' && '👩🏻‍💻'}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
