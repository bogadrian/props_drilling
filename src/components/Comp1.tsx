'use client';

import { Comp2 } from './Comp2';

export const Comp1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '900px',
        height: '60vh',
        border: '3px solid #4338a2'
      }}
    >
      <h1>Client Component 1</h1>
      <Comp2>{children}</Comp2>
    </div>
  );
};
