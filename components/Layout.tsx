import Fallback from '@/components/Fallback';
import { Suspense } from 'react';
import Header from '@/components/Header';
import TaskNav from '@/components/TaskNav';
import SideNav from '@/components/SideNav';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <Suspense fallback={Fallback()}>
      <div className="flex flex-col w-screen min-h-screen bg-gray-100" >
        <Header />
        <main className="flex-grow">
          {/*{pathname === 'improve' || pathname === 'write' && <TaskNav />}*/}
          <div className="flex w-full">
            <SideNav />
            <div className="flex-grow p-3">{children}</div>
          </div>
        </main>
        <Footer/>
      </div>
    </Suspense>
  );
}