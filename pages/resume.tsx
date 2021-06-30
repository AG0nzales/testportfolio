import React from 'react'
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations';

function resume() {


  return (
    <motion.div 
    className="px-6 py-2 "
    variants={routeAnimation}
    initial='initial'
    animate='animate'
    exit='exit'
    >
{/* //something */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">What's here?</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Computer Science</h5>
            <p className='font-semibold'>University of the Immaculate Conception</p>
            <p className='my-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Idk What's here?</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Boring</h5>
            <p className='font-semibold'>Nothing here yet</p>
            <p className='my-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua.
            </p>
          </div>
        </motion.div>
      </div>

    </motion.div>
  )
}

export default resume
