// import * as THREE from 'three'
// import { renderer } from './core/renderer'
// import camera from './core/camera'
// import { controls } from './core/orbit-control'
// import { debug_ui } from './core/gui'

import World from "./core/world";

// import './style.css'
// import { playground_scene } from './scenes/playground_scene'
// import { sphereMaterial } from './core/factories'


// const clock = new THREE.Clock()

// debug_ui.addLightControls();

// const loop = () => {
//   const elapsedTime = clock.getElapsedTime()

//   sphereMaterial.uniforms.uTime.value = elapsedTime

//   debug_ui.fps.begin()

//   controls.update()
//   renderer.render(playground_scene, camera)

//   debug_ui.fps.end()
//   requestAnimationFrame(loop)
// }

// loop()

const world = new World();
