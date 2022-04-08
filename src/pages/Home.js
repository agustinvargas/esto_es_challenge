import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Loader from '../components/Loader/Loader';
import ProjectContainer from '../components/Projects/ProjectContainer';
import ProjectListTable from '../components/Projects/ProjectListTable';
import { getProjects } from '../utils/mockData';
const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const projects = await getProjects(); //Mock data
        setProjects(projects);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProjectListTable projects={projects} loading={loading} />
          <ProjectContainer projects={projects} loading={loading} />
        </>
      )}
    </Box>
  );
};

export default Home;
