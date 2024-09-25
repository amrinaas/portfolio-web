import React from 'react';
import { Layout, Title } from '../../components';
import { Link } from 'react-router-dom';

const ButtonMailTo = ({ mailto, label }) => {
  return (
    <Link
      to='#'
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <h3 className='px-4 py-1 border-2 border-white border-solid text-2xl hover:bg-white hover:text-black'>
        {label}
      </h3>
    </Link>
  );
};

const Contact = () => {
  return (
    <Layout>
      <Title title={'Contact'} />
      <p className='text-lg md:text-xl lg:text-2xl'>
        Ready to take your project to the next level? Let's collaborate and
        bring your vision to life!
      </p>
      <div className='flex mt-5'>
        <ButtonMailTo label='Say hello' mailto='mailto:amrinaas96@gmail.com' />
      </div>
    </Layout>
  );
};

export default Contact;
