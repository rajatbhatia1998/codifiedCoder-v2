import React,{useState,useEffect} from 'react'
import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'
import {getSiteData} from '../firebase'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './ChatBot/ActionProvider.js';
import MessageParser from './ChatBot/MessageParser.js';
import config from './ChatBot/config.js';
import './custom/loader.css'
import { SiChatbot } from "react-icons/si";
import { Canvas } from '@react-three/fiber'
import CustomBall from './custom/CustomBall'




export default function Main() {

  const [totalExp,setTotalExp] = useState(0)
  const [isLoading , setLoading] = useState(true)
  const [showChatbot,setShowChatBot]  = useState(false)
  useEffect(()=>{
   
    getSiteData().then(data=>{
      console.log("FIREBASE SITEDATA",data)
      const exp = data.find(d=>d.type ==='experience-start')
      
      calculateExp(exp.data.year,exp.data.month,exp.data.date)
    })
  },[])


  const calculateExp = (y,m,d)=>{
    var startDate = new Date(y,m,d);
    var nowDate = new Date();
    var diff = nowDate.getTime() - startDate.getTime(); 
    const exp =  (diff / 31536000000).toFixed(1); 
    setTotalExp(exp)
    setTimeout(()=>{
      setLoading(false)
    },2000)
    
    }
  return (
    <>
    {isLoading ?

      // <div className='container flex justify-center items-center' style={{height:'500px'}}>
      
      // <div class="lds-circle"><div></div></div>
      
      // </div>
      <Canvas shadows id="loader-canvas" >
              <CustomBall/>
      </Canvas>
   
   :
    <div>
   
        <Navbar/>
        <About totalExp={totalExp}/>
        <Skills totalExp={totalExp}/>
        <Project totalExp={totalExp}/>
        <Footer/>
        {
        showChatbot  && <div  id="chatbotWrapper">
            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
        </div>
}
        <span onClick={()=>{setShowChatBot(!showChatbot)}}
        className='cursor-pointer'
          id="chatbotIcon">
            <SiChatbot/>
            </span>
    </div>
    }
    </>
  )
}
