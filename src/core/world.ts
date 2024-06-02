import * as THREE from 'three'
import { Scene, WebGLRenderer, PCFShadowMap, ACESFilmicToneMapping, sRGBEncoding, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity, EntityStorage } from "./entity";
import { SceneList, WindowSizes, WorldStatus } from "./models";

export default class World {
  world_status: WorldStatus = WorldStatus.Loading;
  clock = new THREE.Clock();

  // 3D Engine 
  scenes: Map<SceneList, Scene>
  active_scene: Scene;

  renderer: WebGLRenderer;
  canvas: HTMLElement = document.querySelector("#webgl") as HTMLElement;

  camera: PerspectiveCamera;
  controls: OrbitControls;

  // Assemble
  sizes: WindowSizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  vertical_field_of_view: number = 45 // degrees 45 is the normal
  // Limite para a camera nao ultrapassar o chao
  maxPolarAngle: number = Math.PI * 0.45;
  enableDamping: boolean = true;


  // ECS
  ecs_store: EntityStorage = new EntityStorage();


  constructor() {
    this.start()
  }

  async start() {

    await this.setupScene();
    await this.setupRenderer();
    await this.setupCamera();

    // const playerEntity = new Entity();
    // console.log(playerEntity)

    this.world_status = WorldStatus.Running;
  }

  async setupScene(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.active_scene = new Scene();
      // this.scenes.set(SceneList.FirstStage, this.active_scene);
      resolve(true);

    })
  }

  //Renderer
  async setupRenderer(): Promise<boolean> {
    return new Promise<boolean>((res, rej) => {
      this.renderer = new WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: true
      })

      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = PCFShadowMap
      this.renderer.physicallyCorrectLights = true
      this.renderer.outputEncoding = sRGBEncoding
      this.renderer.toneMapping = ACESFilmicToneMapping
      this.renderer.toneMappingExposure = 1

      window.addEventListener('resize', () => {
        this.sizes.width = window.innerWidth
        this.sizes.height = window.innerHeight
        this.updateRenderer()
      })

      res(true);

    })
  }

  updateRenderer() {
    this.renderer.setSize(this.sizes.width, this.sizes.height)

    // To avoid performance problems on devices with higher pixel ratio
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  async setupCamera(): Promise<boolean> {
    return new Promise<boolean>((res, rej) => {
      this.camera = new PerspectiveCamera(
        this.vertical_field_of_view,
        this.sizes.width / this.sizes.height,
      )
      this.camera.position.set(9, 4, 9)
      this.active_scene.add(this.camera);

    })
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = this.enableDamping;
    this.controls.maxPolarAngle = this.maxPolarAngle;
  }

  tick() {
    console.log(`running`)
    if (this.world_status == WorldStatus.Running) {
      requestAnimationFrame(this.tick());
    }
  }
}


