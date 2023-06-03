import { HomePageCard } from '../../components/HomePageCard';
import { Comp4SS } from '@/components/Comp4SS';

const Page = async () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1300px',
        height: '80vh',
        border: '3px solid #dfbfbf'
      }}
    >
      <h1>Server Component Page</h1>
      <HomePageCard>
        {/* @ts-expect-error Async Server Component */}
        <Comp4SS />
      </HomePageCard>
    </div>
  );
};

export default Page;
