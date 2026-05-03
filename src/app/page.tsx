import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Nav from '@/components/Nav';
import Problem from '@/components/Problem';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Struggle from '@/components/Struggle';
import Transformation from '@/components/Transformation';
import Trust from '@/components/Trust';


const page = () => {
  return (
  
   <div className="relative">
      <Nav />

      <main>
        <Hero />
        <Trust />
        <Problem />
        <Struggle />
        <Solution />
        <Services />
        <Transformation />
        <Process />
        <FinalCTA />
      </main>

      <Footer />
    </div>
                   
  
  )
}

export default page