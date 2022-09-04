import React from 'react'
import {Parallax,useParallax,ParallaxBanner} from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade';


const dummyData = [
    {
        client:"TCS",
        role:"Full Stack Developer",
        from:"21/7/2019",
        when:"Present",

    },
    {
        client:"TCS",
        role:"React Native Developer",
        from:"1/3/2020",
        when:"Present",

    }
]
export default function Skills() {
  return (
    
    
      <div className='bg-blue-700 mt-10 ' style={{width:'100%',height:'500px'}}  >
        
               

                <div id="skils-info" className='py-1 px-1 flex-1 flex align-middle justify-between sm:justify-around sm:align-middle flex-col sm:flex-row'>
      
                <Fade left>
                <div id="left-info" className="flex flex-col justify-center sm:ml-0 ml-10" easing={'easeInOut'} speed={5}>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Skills &</span>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Experience</span>
                 
        
        
                  
                  </div>
                  </Fade>
                
                 
             
         


                 
                        <div id="right-info flex flex-row  sm:mt-0 ml-20">
                   
                        <span className='text-white font-bold text-2xl sm:text-6xl'>Experience</span>
                   
                    
                    
                        </div>
              
               
              </div>

      </div>

     
 
    
   
  )
}
