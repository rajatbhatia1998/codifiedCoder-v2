import React from "react";
import { useFrame ,useLoader} from '@react-three/fiber'
import {Sphere,MeshDistortMaterial} from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import myImage from '../assets/mineImage.PNG'



export function AnimatedSphere(){
    const imageTexture = useLoader(TextureLoader,myImage)
    return (
        <Sphere visible args={[1,100,200]} scale={2.5}>
            <MeshDistortMaterial 
                 color={"#1d4ed8"}
                attach={"material"}
                //map={imageTexture}
                roughness={0}
                speed={2}
                distort={0.5}
            />
            </Sphere>

    )
}