import type { NextPage } from 'next';
import { createClient } from '../prismicio';
import Home from '../components/Home';

const HomePage: NextPage = ({ home }) => {
  return <Home data={home?.data} />;
};

export default HomePage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  console.log(params?.uid);

  const home = await client.getSingle('home');
  console.log(home);

  return {
    props: { home },
  };
}
