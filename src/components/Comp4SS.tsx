import { Comp3 } from './Comp3';

const getData = async () => {
  const response = await fetch('http://localhost:3000/api/source');
  const data = await response.json();

  return data;
};

export const Comp4SS = async () => {
  const data = await getData();
  return (
    <>
      <Comp3 data={data} />
    </>
  );
};
