import * as THREE from 'three';
import './style.css';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//create Scene
const scene = new THREE.Scene()

//Create a sphere
const sphereGeometry = new THREE.SphereGeometry(3, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: '#00ff83',
  roughness: .35,
});
// const sphereMaterial = new THREE.MeshBasicMaterial({
//   color: '#00ff83',
// });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphereMesh);

//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}


//Light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.intensity = 25; // Increase intensity
light.position.set(0, 10, 10); // Move closer to the sphere

// light.position.set(0, 10, 10)
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add(camera);


//resize
window.addEventListener('resize', () => {
  //update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height)
})

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 3;

//resizing loop
const loop = () => {
  // sphereMesh.position.x += .1
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop();