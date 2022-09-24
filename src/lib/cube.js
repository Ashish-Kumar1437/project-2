import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1920/1080, 0.1, 1000);
const geometry = new THREE.BoxGeometry(5,5,5,5);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.set(0,0,10);
let renderer;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
};

const resize = () => {
  // renderer.setSize(window.innerWidth, window.innerHeight)
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();
};

export const rotatingCube = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias:true,alpha:true, canvas: el });
  resize();
  animate();
}

// Window.addEventListener('resize', resize);