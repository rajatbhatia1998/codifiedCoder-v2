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
    <div className='mt-1' style={{width:'100%',height:'auto',paddingBottom:'50px'}}  >



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
</section></Fade>
    </div>
  )
}
