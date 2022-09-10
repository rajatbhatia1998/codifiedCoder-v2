import React from 'react'
import {Parallax,useParallax,ParallaxBanner} from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade';
import { DiReact } from "react-icons/di";

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


const getExperience = ()=>{
    let startData = ""
    return 3
  }
export default function Skills() {
  return (
    
    
      <div className='bg-blue-700 mt-10' style={{width:'100%',height:'500px'}}  >
        
               

                <div id="skils-info" className='py-1 px-1 pt-5 flex flex-col justify-between item-middle    sm:items-start  sm:justify-around  sm:flex-row'>
      
                  <Fade left>
                <div id="left-info" className="flex flex-col justify-center px-5" easing={'easeInOut'} speed={5}>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Skills &</span>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Experience</span>
                 
                  <div id="experience-info" className='pt-5'>
                    <span className='text-white  text-lg sm:text-sm'>Full Stack MERN Developer with experience of {getExperience()}+ years</span>
                  </div>
        
        
                  
                  </div>
                  </Fade>
                
                 
             
         


                  <Fade right>
                        <div id="right-info" className="flex flex-col justify-center px-5 ">
                   
                        <span className='text-gray-100 font-bold text-2xl sm:text-3xl sm:block hidden'>Experience</span>
                   
                        <div id='exp-list' className='mt-10'>
                            {dummyData.map(exp=>{

                                return <div>
                                
                                <hr className='py-3'></hr>
                                <div className='flex flex-row py-2 sm:py-2'>
                                        
                                        <span  className='text-white text-lg sm:text-l'>{exp.from} - {exp.when}</span>
                                        <span className='flex flex-col px-5'>
                                            <span  className='text-white font-bold text-lg sm:text-2xl'>{exp.role}</span>
                                            <span className='text-gray-300 font-bold pt-2 text-lg sm:text-xl' >{exp.client}</span>
                                        </span>
                                  </div>

                                        </div>
                            })}
                            <hr className='py-3'></hr>
                        </div>
                    
                        </div>
              </Fade>
               
              </div>

      </div>

     
 
    
   
  )
}
