import HomePage from '@components/Home/HomePage';

const MainPage = () => {
  return <HomePage />;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default MainPage;
