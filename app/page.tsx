// pages/index.js
import Layout from './components/Layout';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import TrainOnWheels from './components/TrainOnWheels';
import Stories from './components/Stories';
import FAQ from './components/FAQ';
import CSRSupport from './components/CSRSupport';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Vani from './components/Vani';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Welcome/>
      <Projects/>
      <Activities/>
      <Vani/>
    </Layout>
  );
}