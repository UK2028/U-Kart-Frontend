
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Testimonial } from './components/Testimonial';
import { Faq } from './components/Faq';

import { useTitle } from '../../hooks/useTitle';


export const HomePage = () => {

  useTitle("Home/U-Kart");

  return (
    <main className="bg-white dark:bg-gray-800 px-10">
      <Hero/>
      <FeaturedProducts />
      <Testimonial/>
      <Faq/>
    </main>
  )
}
