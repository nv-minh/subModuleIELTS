import Write from '@/modules/write/components/Write';
import RootLayout from '@/components/Layout';
// import '../styles/globals.css'

export default function ImprovementPage({ searchParams }: any) {
  const task =  'task1';

  return (
    <RootLayout>
      <Write task={task}></Write>
    </RootLayout>
  );
}