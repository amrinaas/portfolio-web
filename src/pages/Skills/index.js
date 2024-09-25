import React from 'react';
import { Layout, Title, Box } from '../../components';
import { Icon } from '@iconify/react';

const SkillsLayout = ({ title, boxes }) => {
  return (
    <div className='text-center mb-8'>
      <h1 className='text-3xl mb-3 underline'>{title}</h1>
      <div className='text-3xl flex flex-wrap justify-center'>
        {boxes.map((box, i) => (
          <Box key={i} logo={<Icon icon={box.logo} />} title={box.title} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <Title title={'Skills'} />

      <SkillsLayout
        title={'Programming Language'}
        boxes={[
          {
            title: 'javascript',
            logo: 'akar-icons:javascript-fill',
          },
          { title: 'PHP', logo: 'akar-icons:php-fill' },
        ]}
      />

      <SkillsLayout
        title={'Tools and Framework'}
        boxes={[
          {
            title: 'react js',
            logo: 'teenyicons:react-outline',
          },
          { title: 'laravel', logo: 'file-icons:laravel' },
          { title: 'lumen', logo: 'simple-icons:lumen' },
          { title: 'tailwind CSS', logo: 'simple-icons:tailwindcss' },
          { title: 'redux', logo: 'akar-icons:redux-fill' },
          { title: 'node js', logo: 'fa-brands:node' },
          { title: 'git', logo: 'pajamas:git' },
        ]}
      />
    </Layout>
  );
};

export default Skills;
