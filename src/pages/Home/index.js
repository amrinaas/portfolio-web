import React, { useEffect } from 'react';
import { Layout, Title } from '../../components';

const Home = () => {
  useEffect(() => {
    document.title = "about me - Amrina's Web Portfolio";
  }, []);

  return (
    <div>
      <Layout>
        <Title title={'About Me'} />
        <h5 className='text-2xl'>Hi, nice to meet you!:) My name is</h5>
        <h1 className='text-5xl'>Amrina Aulia Siregar</h1>
        <p className='text-lg'>
          I am a dedicated web developer with a passion for creating innovatiove
          and user-friendly websites that leave a lasting impression.
        </p>
      </Layout>
    </div>
  );
};

export default Home;
