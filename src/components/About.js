import React, { useState, useEffect,Suspense } from 'react'
import {Parallax,useParallax,ParallaxBanner} from 'react-scroll-parallax'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import {Canvas} from '@react-three/fiber'

import CustomBall from './custom/CustomBall'
import { AnimatedSphere } from './custom/AnimatedSphere';
import { OrbitControls } from '@react-three/drei';


export default function About(props) {

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  useEffect(()=>{
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  },[])
 
  

  return (
    <div className='container py-1 pb-20'>

    

      <div id="profile-info" className='mt-5 py-1 px-1 flex-1 flex align-middle justify-between sm:justify-around sm:align-middle flex-col sm:flex-row'>
      
    
        <Parallax id="left-info" className="flex flex-col justify-center sm:mt-0 mt-10 sm:ml-0 ml-10" easing={'easeInOut'} speed={1}>
        <LightSpeed left>
          <span className='text-black-700 font-bold text-2xl sm:text-6xl'>I am 
          <span> </span>
          
          <span
            class="txt-rotate"
            data-period="4000"
            data-rotate='[ "Frontend", "Javascript", "Full Stack" ]'></span>
        </span>
          <span className='text-black-700 font-bold text-2xl text-blue-700 sm:text-6xl'>Developer</span>
          <span className='text-gray-700 font-bold text-sm pt-5 sm:text-l'>Hi, I am Rajat . I have Experience of {props.totalExp}+ years</span>


          <div className='pt-5 flex flex-row'>
          <button className="text-white px-2 py-2 text-sm font-bold bg-blue-700 rounded-lg  sm:px-4 sm:py-3 hover:text-white hover:bg-black">Let's Talk</button>
          <button className="ml-2 text-black border-solid border-blue-700 border-2 px-2 py-2 text-sm font-bold bg-white rounded-lg sm:px-4 sm:py-3 hover:text-white hover:bg-blue-700">Get Resume</button>
        </div>
        </LightSpeed>
          </Parallax>
        
         
     
        
          <Parallax easing={'easeInOut'}  speed={6}>
          <div id="right-info flex flex-row  sm:mt-20 ml-16">
    
      <div className='ml-20 mt-20 w-60 h-60 sm:mt-20 sm:w-60 sm:h-60' 
      
      // style={{ width: "50vw", height: "50vh" }}
      
      >
            <Canvas shadows >
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={1}/>
              <directionalLight intensity={1} position={[-2,5,2]}/>
             <AnimatedSphere/>
            </Canvas>
   </div>
          {/* <Flip right>
            <img loading='lazy' src="images/about_banner.PNG"  className=' drop-shadow-2xl flex-2 object-contain' width={500} height={500}/>
           </Flip> */}
            
            
        </div>
        </Parallax>
       
      </div>
    

    </div>
  )
}
