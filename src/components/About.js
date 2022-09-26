import React, { useState, useEffect } from 'react'
import {Parallax,useParallax,ParallaxBanner} from 'react-scroll-parallax'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';



export default function About(props) {

 
  

  return (
    <div className='container py-1 pb-20'>

    

      <div id="profile-info" className='py-1 px-1 flex-1 flex align-middle justify-between sm:justify-around sm:align-middle flex-col sm:flex-row'>
      
    
        <Parallax id="left-info" className="flex flex-col justify-center sm:mt-0 mt-10 sm:ml-0 ml-10" easing={'easeInOut'} speed={1}>
        <LightSpeed left>
          <span className='text-black-700 font-bold text-2xl sm:text-6xl'>I am Full Stack</span>
          <span className='text-black-700 font-bold text-2xl text-blue-700 sm:text-6xl'>Developer</span>
          <span className='text-gray-700 font-bold text-sm pt-5 sm:text-l'>Hi, I am Rajat Bhatia . I have Experience of {props.totalExp}+ years</span>


          <div className='pt-5 flex flex-row'>
          <button className="text-white px-2 py-2 text-sm font-bold bg-blue-700 rounded-lg  sm:px-4 sm:py-3 hover:text-white hover:bg-black">Let's Talk</button>
          <button className="ml-2 text-black border-solid border-blue-700 border-2 px-2 py-2 text-sm font-bold bg-white rounded-lg sm:px-4 sm:py-3 hover:text-white hover:bg-blue-700">Get Resume</button>
        </div>
        </LightSpeed>
          </Parallax>
        
         
     
 
          <Parallax easing={'easeInOut'}  speed={6}>
          <div id="right-info flex flex-row  sm:mt-0 ml-20">
          <Flip right>
            <img loading='lazy' src="images/about_banner.PNG"  className=' drop-shadow-2xl flex-2 object-contain' width={500} height={500}/>
           </Flip>
            
            
        </div>
        </Parallax>
       
      </div>
      

    </div>
  )
}
