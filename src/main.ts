import * as THREE from 'three'
import { renderer, scene } from './core/renderer'
import camera from './core/camera'
import { controls } from './core/orbit-control'

import { debug_ui } from './core/gui'
import { ambientLight, directionalLight, plane, sphere, sphereMaterial } from './core/factories'


scene.add(ambientLight)
scene.add(directionalLight)
scene.add(sphere)

scene.add(plane)

const clock = new THREE.Clock()

debug_ui.addLightControls();

const loop = () => {
  const elapsedTime = clock.getElapsedTime()

  sphereMaterial.uniforms.uTime.value = elapsedTime

  debug_ui.fps.begin()

  controls.update()
  renderer.render(scene, camera)

  debug_ui.fps.end()
  requestAnimationFrame(loop)
}

loop()
