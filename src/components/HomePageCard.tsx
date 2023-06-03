'use client';

import { Comp1 } from './Comp1';

export const HomePageCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1100px',
        height: '70vh',
        border: '3px solid #7f4848'
      }}
    >
      <h1>Client Component Home Page</h1>
      <Comp1>{children}</Comp1>
    </div>
  );
};
