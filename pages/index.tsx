import type { NextPage, GetStaticProps } from 'next';
import { createClient } from '../prismicio';
import Home from '../components/Home';

const HomePage: NextPage = ({ home }) => {
  return <Home data={home?.data} />;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const home = await client.getSingle('home');

  return {
    props: { home },
  };
};
