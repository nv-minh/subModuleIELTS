import React from 'react';
import Write from './components/Write';


export default function ImprovementPage({ searchParams }: any) {
  const task = searchParams['task'] ?? 'task1';

  return (
    <div>
      <Write task={task} />
    </div>
  );
}
