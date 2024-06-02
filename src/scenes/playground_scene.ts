import { AxesHelper, Color, Scene } from 'three'
import { ambientLight, directionalLight, plane, sphere } from '../core/factories';
import { player_pill } from '../core/factories/player';


export const playground_scene = new Scene();
playground_scene.background =  new Color('#333')

//Axes Helper
export const axesHelper = new AxesHelper();
playground_scene.add(axesHelper)

playground_scene.add(ambientLight)
playground_scene.add(directionalLight)
playground_scene.add(sphere)
playground_scene.add( player_pill );
playground_scene.add(plane)
