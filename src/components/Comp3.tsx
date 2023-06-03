'use client';

export const Comp3 = ({ data }: { data: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '40vh',
        border: '3px solid #133ea4'
      }}
    >
      <h1>Client Component 3</h1>
      <h2>{data}</h2>
    </div>
  );
};
