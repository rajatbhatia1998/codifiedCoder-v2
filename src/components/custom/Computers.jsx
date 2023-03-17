import React,{Suspense,useEffect,useState} from 'react'
import { Canvas,useThree } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const {viewport} = useThree();
  
  useEffect(()=>{
    console.log("viewport changing",viewport)
  },[viewport])
  const getModelSize = ()=>{
    if(viewport.width<6){

    }else{

    }
  }
  return (
      <mesh>
          <hemisphereLight intensity={0.15} groundColor={'black'}/>
          <pointLight intensity={1}/>
          <spotLight 
          angle={0.8}
          penumbra={1}
          intensity={1} 
          position={[-20,50,10]}/>

          <primitive object={computer.scene}
          scale={1}
          position={[0,-1.5,-1]}
          rotation={[-0.001,-0.2,-0.1]}
          />
      </mesh>
  )
}


const ComputersCanvas = ()=>{
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20,3,5],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false}
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
          />
          <Computers/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas