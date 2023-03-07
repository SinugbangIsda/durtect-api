import React from 'react';
import Layout from '../../components/Layout';
import HomeHeader from '../../components/Home/HomeHeader';
import NavMenu from '../../components/Home/NavMenu';
import RecentHistory from '../../components/Home/RecentHistory';
import Discover from '../../components/Home/Discover';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
  const { fetchDetections } = useFirebase();
  fetchDetections();
  return (
    <Layout twStyles = "flex-1 defaultBg">
      <HomeHeader />
      <NavMenu />
      <RecentHistory />
      <Discover />
    </Layout>
  );
}

export default Home;