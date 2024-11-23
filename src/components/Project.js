

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./custom/Card"

import React,{useState,useEffect} from "react";
import {getProjects} from '../firebase'


export default function Component() {

    const [projects,setProjects] = useState([])
        useEffect(()=>{
            const projectsList = getProjects()
            projectsList.then(pr=>{
                console.log(pr)
                setProjects(pr)
        })
    },[])


  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects .map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.data.imageUrl}
                    alt={project.data.projectName}
                     loading='lazy'
                    // objectFit="cover"
                    // className="transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-bold mb-2">{project.data.projectName}</CardTitle>
                <p className="text-muted-foreground">{project.data.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-center">
              <button
                                 onClick={()=>{window.open(project.data.link,"_blank")}}
                                style={{width:"100px"}} className="ml-2 mt-2  text-black border-solid border-blue-700 border-2 px-2 py-2 text-sm font-bold bg-white rounded-lg sm:px-4 sm:py-3 hover:text-white hover:bg-blue-700">VISIT</button>
        
                  
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}