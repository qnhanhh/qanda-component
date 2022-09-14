// import { ContactShadows, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import {Model} from './Marble_bust_01_4k'
import {ContactShadows, OrbitControls, Float} from '@react-three/drei'

export const Book3d = () => {
    return (
        <Canvas shadows camera={{position:[0,0,4],fov:50}}>
            <ambientLight intensity={0.3}/>
            <spotLight intensity={0.7} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />
            <Suspense fallback={null}>
                <Float rotation={[0,0.6,0]} >
                <Model position={[0,-1,0]}/>
                </Float>
                <ContactShadows position={[0,-0.8,0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
            </Suspense>
            <OrbitControls minPolarAngle={-Math.PI/2} maxPolarAngle={Math.PI} enableZoom={true} enablePan={false} />
        </Canvas>
    )
}