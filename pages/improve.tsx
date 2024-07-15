
import Improve from '@/modules/improve/components/Improve';
import RootLayout from '@/components/Layout';
// import '../styles/globals.css'


// @ts-ignore
export default function ImprovementPage({ searchParams }: PageProps) {
  const task =  'task1';

  return (
    <RootLayout>
      <Improve task={task} />
    </RootLayout>
  );
}

