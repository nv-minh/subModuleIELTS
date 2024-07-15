import React from 'react';
import Improve from './components/Improve';


export default function ImprovementPage({ searchParams }: any) {
  const task = searchParams['task'] ?? 'task1';

  return (
    <div>
      <Improve task={task} />
    </div>
  );
}
