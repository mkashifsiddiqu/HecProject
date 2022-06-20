import React from 'react';
import Dashboard from './Dashboard';
import type { NextPage } from 'next';
import Loading from '@/Components/Student/Layout/Loading';
const Home: NextPage = (props) => {
  return (
    <>
      <Dashboard/>
      {/* <Loading/> */}
    </>
  );
};
export default Home;
