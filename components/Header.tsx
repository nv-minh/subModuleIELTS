import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Logo from '../public/assets/logo.png'
export default function Header() {
  return (
    <header className="my-5 flex justify-between items-center">
      <Link className="flex items-center" href="/">
        <Image
          src={Logo}
          alt="IELTS Writing Buddy"
          width={100}
          height={100}
        />
        <h1 className="font-bold text-3xl bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
          IELTS Buddy
        </h1>
      </Link>
    </header>
  );
}
