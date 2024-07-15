'use client';

import { cn } from '@/utils/helpers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { icon: '🪄', path: '/improve', name: 'Improve Writing' },
  { icon: '📝', path: '/write', name: 'Write' },
  { icon: '📝', path: '/prompt', name: 'Prompt' },
  { icon: '🗣️', path: '/speaking-room', name: 'Speaking with AI' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="p-3 w-[400px]">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.path}
            className={cn('nav__item', {
              'nav__item--active': pathname === item.path,
            })}
          >
            <Link href={item.path}>
              <i className="mr-2">{item.icon}</i>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
