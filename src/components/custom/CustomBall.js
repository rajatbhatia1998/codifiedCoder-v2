import { PerspectiveCamera,OrbitControls, Environment,ScrollControls,useScroll } from '@react-three/drei'
import { useFrame ,useLoader} from '@react-three/fiber'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { DoubleSide } from 'three'
import {TextureLoader} from 'three/src/loaders/TextureLoader'

import {angleToRadian} from '../utils/utils'
import gsap from 'gsap/all'



import myImage from '../assets/mineImage.PNG'
export default function CustomBall(){

    const orbitRef = useRef(null)
    const ballRef = useRef(null)
    const ref = useRef()
    const tl = useRef()
    const ballTexture = useLoader(TextureLoader,myImage)
    const scroll = useScroll()
    useLayoutEffect(()=>{
        tl.current = gsap.timeline();

        //VERTICAL ANIMATION OF BALL GROUP
        // tl.current.to(ref.current.position,{
        //     duration:2,
        //     y:1
        // },0)
    },[])

    //droping animation
    // useEffect(()=>{
    //     if(ballRef.current){
    //         console.log("ref",ballRef.current)
    //         const timeline = gsap.timeline()
    //         timeline.to(ballRef.current.rotation,{
    //             z:90,
    //             transformOrigin:"center",
    //             duration:1.3,
    //             delay:0.3,
                
    //            })

    //             timeline.to(ballRef.current.position,{
    //             x:-2,
    //             duration:2,
    //             ease:'power2.out'
    //             },"<")

    //        timeline.to(ballRef.current.position,{
    //         y:0.5,
    //         duration:1,
    //         ease:'bounce.out'
    //        },"<")
         
    //     }
    // },[])
    useEffect(()=>{
        if(ballRef.current){
            console.log("ref",ballRef.current)
            const timeline = gsap.timeline({repeat:-1})
            // timeline.to(ballRef.current.rotation,{
            //     z:10,
            //     transformOrigin:"center",
            //     duration:1.3,
            //     delay:0.3,
                
            //    })

                // timeline.to(ballRef.current.position,{
                // x:-2,
                // duration:2,
                // ease:'power2.out'
                // },"<")

                timeline.to(ballRef.current.position,{
                    y:0.3,
                    duration:1,
                    ease:'linear'
                })
                timeline.to(ballRef.current.position,{
                    y:5,
                    duration:1,
                    ease:'linear'
                   })
         
        }
    },[])


  

    return(
        <>
        <OrbitControls 
            enableZoom={false} 
        
            enableRotate={false}
            ref={orbitRef} 
        
        />
      
        <spotLight args={['#ffffff',1.5,7,angleToRadian(45),0.5]} position={[-4,3,0]} castShadow/>
        <ambientLight args={['#ffffff',0.25]}/>
        <PerspectiveCamera makeDefault position={[10,2,1]}/>
      
        <group ref={ref}>
        <mesh ref={ballRef} rotateX={5} position={[0,5,0]} castShadow >
            <sphereGeometry  args={[0.5,50,50]} />
            <meshStandardMaterial   
            color={'#1ea3d8'} 
            metalness={0.8} 
            roughness={0.3}
            // map={ballTexture}
            />
        </mesh>

       
        <mesh rotation={[-(angleToRadian(90)),0,0]}  receiveShadow>
            <planeGeometry args={[20,20]} />
            <meshStandardMaterial color={'#1ea3d8'} side={THREE.DoubleSide}/>
        </mesh>
        </group>
   


        <Environment background>
            <mesh scale={100}>
                <sphereGeometry args={[1,100,100]}/>
                <meshBasicMaterial color={'#2266cc'} side={DoubleSide}/>
            </mesh>
         
        </Environment>

        </>
        
    )
}