import React, { useEffect } from 'react';
import { Layout, Title, BoxLayout } from '../../components';
import { language, skills } from '../../utils/data';

const Skills = () => {
  useEffect(() => {
    document.title = "skills - Amrina's Web Portfolio";
  }, []);

  return (
    <Layout>
      <Title title={'Skills'} />

      <BoxLayout title={'Programming Language'} boxes={language} />

      <BoxLayout title={'Tools and Framework'} boxes={skills} />
    </Layout>
  );
};

export default Skills;
