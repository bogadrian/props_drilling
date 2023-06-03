'use client';

export const Comp2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '700px',
        height: '50vh',
        border: '3px solid #9d1b3c'
      }}
    >
      <h1> Client Component 2</h1>
      {children}
    </div>
  );
};
