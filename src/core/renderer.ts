import {
  WebGLRenderer,
  AxesHelper,
  sRGBEncoding,
  PCFShadowMap,
  ACESFilmicToneMapping,
} from 'three'
import { playground_scene } from '../scenes/playground_scene'
import { debug_ui } from './gui'

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Scene
// export const scene = new Scene()
// scene.background = new Color('#333')

const canvas: HTMLElement = document.querySelector('#webgl') as HTMLElement

// Renderer
export const renderer = new WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
})

// More realistic shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFShadowMap
renderer.physicallyCorrectLights = true
renderer.outputEncoding = sRGBEncoding
renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = 1

// Axes Helper
const axesHelper = new AxesHelper()
playground_scene.add(axesHelper)

debug_ui.gui.addInput(axesHelper, 'visible', {
  label: 'AxesHelper',
})

function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // To avoid performance problems on devices with higher pixel ratio
}

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  updateRenderer()
})

updateRenderer()

export default {
  renderer,
  debug_ui,
}
