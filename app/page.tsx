// pages/index.js
import Layout from './components/Layout';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
// import Projects from './components/Projects';
import EducationProgramCard from './components/EducationProgramCard';

import Vani from './components/Vani';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Welcome/>
      <EducationProgramCard/>
      {/* <Activities/> */}
      <Vani/>
    </Layout>
  );
}