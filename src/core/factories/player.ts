import * as THREE from 'three'

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
export const player_pill = new THREE.Mesh( geometry, material ); 
player_pill.castShadow = true;
player_pill.position.set(0, 1.5, 2)


