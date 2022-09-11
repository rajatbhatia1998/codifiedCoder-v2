import React,{useState,useEffect} from 'react'
import About from './About'
import Navbar from './Navbar'
import Skills from './Skills'
import {getSiteData} from '../firebase'
import './custom/loader.css'

export default function Main() {

  const [totalExp,setTotalExp] = useState(0)
  const [isLoading , setLoading] = useState(true)
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
    setLoading(false)
    }
  return (
    <>
    {isLoading ?

      <div className='container flex justify-center items-center' style={{height:'500px'}}>
      
      <div class="lds-circle"><div></div></div>
      
      </div>
   
   :
    <div>
   
        <Navbar/>
        <About totalExp={totalExp}/>
        <Skills totalExp={totalExp}/>
    </div>
    }
    </>
  )
}
