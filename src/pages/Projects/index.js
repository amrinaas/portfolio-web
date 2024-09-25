import React, { useEffect } from 'react';
import { Layout, Title, Badge } from '../../components';
import { listOfProjects, listOfWorks } from '../../utils/data';

const Work = () => {
  return (
    <div className=''>
      {listOfWorks.map((work, i) => {
        const { duration, job, website, company, jobdesks, stacks } = work;
        return (
          <div className='hover:bg-white hover:text-black py-5 rounded-md flex'>
            <div className='w-1/5 text-xl px-5'>{duration}</div>
            <div className='w-4/5 text-justify px-5'>
              <p className='text-xl'>
                {job}
                {company ? (
                  <>
                    <span className='text-cyan-600'>
                      {' '}
                      @{' '}
                      <a
                        href={website}
                        target='_blank'
                        className='hover:underline'
                        rel='noopener noreferrer'
                      >
                        {company}
                      </a>{' '}
                    </span>
                  </>
                ) : (
                  ''
                )}
              </p>
              <ul className='list-disc'>
                {jobdesks.map((jobdesk, i) => (
                  <li key={i}>{jobdesk}</li>
                ))}
              </ul>
              <div className='mt-3'>
                {stacks.map((stack, i) => (
                  <Badge key={i} text={stack} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Project = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      {listOfProjects.map((project, i) => (
        <div
          key={i}
          className='hover:bg-white hover:text-black  p-5 rounded-md flex'
        >
          <div className='w-2/5'>
            <img
              src={project.image}
              alt='project'
              className='border-2 me-5 rounded-md border-slate-200/20 bg-cover'
            />
          </div>
          <div className='w-3/5 text-justify px-5'>
            <p className='text-xl'>
              <span className='text-cyan-600'>
                <a
                  href={project.link}
                  target='_blank'
                  className='hover:underline'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </a>{' '}
                <span>
                  {project.livePreview ? (
                    <span className='text-green-500 text-xs'>
                      (Live preview available)
                    </span>
                  ) : (
                    <span className='text-red-500 text-xs'>
                      (Live preview Unavailable)
                    </span>
                  )}
                </span>
              </span>
            </p>
            <p>{project.description}</p>
            <div className='flex flex-wrap'>
              {project.badge.map((badge, i) => (
                <Badge key={i} text={badge} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    document.title = "projects - Amrina's Web Portfolio";
  }, []);

  return (
    <Layout>
      <Title title={'Experiences & Projects'} />

      <div className='my-5'>
        <h1 className='text-2xl underline'>Work Experiences</h1>
        <Work />
      </div>

      <div className='my-5'>
        <h1 className='text-2xl underline'>Projects</h1>
        <Project />
      </div>
    </Layout>
  );
};

export default Projects;
