


import { Inter } from '@next/font/google';
import { Suspense } from 'react';
import Fallback from '@/components/Fallback';
import Header from '@/components/Header';
import TaskNav from '@/components/TaskNav';
import SideNav from '@/components/SideNav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';


// @ts-ignore
export default function Page({children}) {
  return (
    <>
      <div className="container mx-auto bg-white px-10 py-4 h-screen flex flex-col">
        <Header />

        <main className="flex-grow gap-24">
          <Hero />
          <Features />
        </main>

        <Footer />
      </div>
    </>
  );
}
