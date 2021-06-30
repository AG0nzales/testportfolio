import { motion } from 'framer-motion';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'


const index= ({endpoint}) => {

  console.log(endpoint);

  return (
    <motion.div 
    className="flex flex-col flex-grow px-6 pt-1"
    variants={routeAnimation}
    initial='initial'
    animate='animate'
    exit='exit'
    >
      <h6 className="my-3 font-medium">
        This is a test portfolio anyways, Hi this is Andre, 
        I am currenlty studying Computer Science in 
        University of the Immaculate Conception, yes this section is kinda cringe I say
        but whatever. Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </h6>

      <div 
      className="p-4 mt-5 bg-gray-400 flex-gorw dark:bg-dark-100" 
      style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}
      >
        <h4 className='my-3 text-xl font-bold tracking-wide'>
          What I do(Maybe)
          </h4>


        <motion.div 
        className='grid gap-6 lg:grid-cols-2 filter drop-shadow-2xl md:drop-shadow-2xl' 
        variants={stagger} 
        initial='initial' 
        animate='animate'> 

      {/* //This is a comment */}
          {services.map(service => (
              <motion.div 
              variants={fadeInUp}
              className='bg-pink-100 rounded-lg lg:col-span-1 dark:bg-dark-200' 
              key={service.title}
              >
                  <ServiceCard service={service} />
              </motion.div>
          
            ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

export const getServerSideProps = async (
  context:GetServerSidePropsContext
  ) => {
    // console.log(process.env.VERCEL_URL);


  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  // console.log('SERVER', services )

  return{ props:{ endpoint:process.env.VERCEL_URL } };
}


// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   //calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()


//   console.log('SERVER', services )
//   return{
//     props:{
//       services:data.services,
//     },
//   }
// }
