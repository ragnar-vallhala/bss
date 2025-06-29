// components/Hero.js
import { colors } from '../constants/colors';
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  return (
    <section style={{
      backgroundColor: `${colors.light}`,
      color: colors.dark,
      textAlign: 'center'
    }}>
      <HeroCarousel/>
    </section>
  );
}