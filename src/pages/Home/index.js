import React from 'react';
import { Layout, Title } from '../../components';

const Home = () => {
  return (
    <div>
      <Layout>
        <Title title={'About Me'} />
        <h5 className='lg:text-2xl text-lg'>
          Hi, nice to meet you!:) My name is
        </h5>
        <h1 className='lg:text-5xl text-3xl'>Amrina Aulia Siregar</h1>
        <p className='lg:text-2xl text-lg'>
          I am a dedicated web developer with a passion for creating innovatiove
          and user-friendly websites that leave a lasting impression.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
