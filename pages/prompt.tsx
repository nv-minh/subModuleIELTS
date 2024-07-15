
import Improve from '@/modules/improve/components/Improve';
import RootLayout from '@/components/Layout';
import Writing from '@/components/Writing';
// import '../styles/globals.css'


// @ts-ignore
export default function PromptPage({ searchParams }: PageProps) {
  const task =  'task1';

  return (
    <RootLayout>
      <Writing />
    </RootLayout>
  );
}

