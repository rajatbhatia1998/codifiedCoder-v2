import React,{useEffect,useState} from 'react'
import Fade from 'react-reveal/Fade';
import './custom/carousel.scss'
import {getProjects} from '../firebase'






export default function Project() {
    const [projects,setProjects] = useState([])
        useEffect(()=>{
            const projectsList = getProjects()
            projectsList.then(pr=>{
                console.log(pr)
                setProjects(pr)
        })
    },[])





  return (
    <div className='flex  flex-col justify-between item-middle    sm:items-middle  sm:justify-around  sm:flex-col' style={{width:'100%',height:'auto',paddingBottom:'50px'}}  >

<span className='mb-5 text-center mt-5 text-black-700 ml-5 font-bold text-3xl text-blue-700 sm:text-6xl'>Projects</span>
{/* 
     <Fade left>   
    <section>
    <div class="container">
    
        <div class="carousel">
            
            {projects.map(project=>{
                    return <input type="radio" name="slides" id={project.type}/>
                })}
            <ul class="carousel__slides">
                {projects.map(project=>{
                    return <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={project.data.imageUrl} 
                            loading='lazy'
                             style={{cursor: "pointer"}}
                            onClick={()=>{window.open(project.data.link,"_blank")}}
                            />
                        </div>
                        <figcaption>
                            {project.data.description}
                            <span class="credit">Name:  {project.data.projectName}</span>
                        </figcaption>
                    </figure>
                </li>
                })}
                
               
            </ul>    
            <ul class="carousel__thumbnails">
            {projects.map(project=>{
                    return <li>
                    <label for={project.type}><img src={project.data.imageUrl} alt=""/></label>
                </li>
                })}
                
               
            </ul>
        </div>
    </div>
</section></Fade> */}

{  projects.map(project=>{
   

        return  <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            marginBottom:20,
            flexWrap:"wrap",
            padding:10,
        
        }}>
                <img src={project.data.imageUrl} 
                            loading='lazy'
                             style={{cursor: "pointer",width:"500px",height:"300px"}}
                           
                            />
                            <div style={{
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                            justifyContent:"space-evenly",
                            flexWrap:"wrap",
                            textAlign:"center"
                            }}>
                                  <span className='font-bold mt-3' >{project.data.projectName}</span>
                                <span style={{width:"90%"}} >Description: {project.data.description}</span>
                                <button
                                 onClick={()=>{window.open(project.data.link,"_blank")}}
                                style={{width:"100px"}} className="ml-2 mt-2  text-black border-solid border-blue-700 border-2 px-2 py-2 text-sm font-bold bg-white rounded-lg sm:px-4 sm:py-3 hover:text-white hover:bg-blue-700">VISIT</button>
                              
                            </div>
        </div>


})}

    </div>
  )
}
