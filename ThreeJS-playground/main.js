import * as THREE from 'three';


//create Scene
const scene = new THREE.Scene()

//Create a sphere

const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  roughness: ,
})
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial)

scene.add(sphereMesh);


//Camera

const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera);

//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(800, 600)