import React,{useEffect,useState} from 'react'
import {Parallax,useParallax,ParallaxBanner} from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade';
import { DiReact,DiMongodb,DiAndroid,DiNodejs,DiApple } from "react-icons/di";
import {getExperienceList} from '../firebase'










export default function Skills(props) {

  const [expList,setExpList] = useState([])

  useEffect(()=>{
    const expList = getExperienceList()
    expList.then(list=>{
      
      setExpList(list)
    })
  },[])
  return (
    
    
      <div className='bg-blue-700 mt-10' style={{width:'100%',height:'auto',paddingBottom:'50px'}}  >
        
               

                <div id="skils-info" className='py-1 px-1 pt-5 flex flex-col justify-between item-middle    sm:items-start  sm:justify-around  sm:flex-row'>
      
                  <Fade left>
                <div id="left-info" className="flex flex-col justify-center px-5" easing={'easeInOut'} speed={5}>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Skills &</span>
                  <span className='text-white font-bold text-2xl sm:text-6xl'>Experience</span>
                 
                  <div id="experience-info" className='pt-5'>
                    <span className='text-white  text-lg sm:text-sm'>Full Stack MERN Developer with experience of {props.totalExp}+ years</span>
                  </div>
        
                  <div id="skills" className='mt-10 flex flex-row justify-around sm:justify-between'>

                  <div>
                  <span className='flex flex-col justify-center items-center'>
                  <DiMongodb color='white' size={30}/>
                  <span className='text-white text-lg sm:text-2xl'>Mongo</span>
                  </span>

                  <span className='flex flex-col justify-center items-center mt-5'>
                  <DiReact color='white' size={30}/>
                  <span className='text-white text-lg sm:text-2xl'>React</span>
                  </span>
                  </div>     


                  <div>
                  <span className='flex flex-col justify-center items-center'>
                  <DiNodejs color='white' size={30}/>
                  <span className='text-white text-lg sm:text-2xl'>Node</span>
                  </span>

                  <span className='flex flex-col justify-center items-center mt-5'>
                  <span className='flex flex-row'><DiAndroid color='white' size={30}/><DiApple color='white' size={30}/></span>
                  <span className='text-white text-lg sm:text-2xl'>React native</span>
                  </span>
                  </div>  
                  </div>
                  
                  </div>
                  </Fade>
                
                 
             
         


                  <Fade right>
                        <div id="right-info" className="flex flex-col justify-center  px-5 ">
                   
                        <span className='text-gray-100 font-bold text-2xl sm:text-3xl sm:block hidden'>Experience</span>
                   
                        <div id='exp-list' className='mt-10'>
                            {expList.length > 0 && expList.map(exp=>{

                                return <div>
                                
                                <hr className='py-3'></hr>
                                <div className='flex flex-row py-2 sm:py-2 sm:ml-0 px-2' style={{marginLeft:40}}>
                                        
                                        <span  className='text-white text-l sm:text-l'>{exp.from} - {exp.when}</span>
                                        <span className='flex flex-col px-5'>
                                            <span  className='text-white font-bold text-l sm:text-2xl'>{exp.role}</span>
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
