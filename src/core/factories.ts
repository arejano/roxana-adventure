import * as THREE from 'three'

// Lights ---------------------------------------------------------
export const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

// Directional light
export const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 2, 2.25)


// Sphere  --------------------------------------------------------
// Shaders
import vertexShader from '/@/shaders/vertex.glsl'
import fragmentShader from '/@/shaders/fragment.glsl'

export const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uFrequency: { value: new THREE.Vector2(20, 15) },
  },
  vertexShader,
  fragmentShader,
})

export const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  sphereMaterial,
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

// Plane --------------------------------------------------
export const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshToonMaterial({ color: '#444' }),
)

plane.rotation.set(-Math.PI / 2, 0, 0)
plane.receiveShadow = true

