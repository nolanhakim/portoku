"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Outline Helper Function
    const createOutlinedMesh = (
      geometry: THREE.BufferGeometry,
      color: number,
      outlineScale = 1.05
    ) => {
      const group = new THREE.Group();

      // Main Mesh
      const mainMat = new THREE.MeshToonMaterial({
        color,
      });
      const mainMesh = new THREE.Mesh(geometry, mainMat);
      group.add(mainMesh);

      // Outline Mesh (Double-sided, Back-side rendering for outline effect)
      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0x0a0a0a,
        side: THREE.BackSide,
      });
      const outlineMesh = new THREE.Mesh(geometry, outlineMat);
      outlineMesh.scale.multiplyScalar(outlineScale);
      group.add(outlineMesh);

      return { group, mainMesh };
    };

    // Create Shapes
    // 1. Torus Knot (Pink)
    const torusKnotGeom = new THREE.TorusKnotGeometry(1.1, 0.38, 120, 16);
    const torusKnot = createOutlinedMesh(torusKnotGeom, 0xff6b9d, 1.05);
    torusKnot.group.position.set(0, 0, 0);
    scene.add(torusKnot.group);

    // 2. Cube (Yellow)
    const cubeGeom = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cube = createOutlinedMesh(cubeGeom, 0xf5e642, 1.08);
    cube.group.position.set(2.4, 1.5, -1);
    scene.add(cube.group);

    // 3. Icosahedron (Teal)
    const icoGeom = new THREE.IcosahedronGeometry(0.65, 0);
    const ico = createOutlinedMesh(icoGeom, 0x4ecdc4, 1.08);
    ico.group.position.set(-2.4, -1.5, -1);
    scene.add(ico.group);

    // Mouse movement state
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions between -1 and 1
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow idle rotations and slight floating
      torusKnot.group.rotation.x = elapsedTime * 0.15;
      torusKnot.group.rotation.y = elapsedTime * 0.2;
      torusKnot.group.position.y = Math.sin(elapsedTime * 0.8) * 0.1;

      cube.group.rotation.x = -elapsedTime * 0.3;
      cube.group.rotation.y = elapsedTime * 0.25;
      cube.group.position.y = 1.5 + Math.sin(elapsedTime * 1.2) * 0.12;

      ico.group.rotation.x = elapsedTime * 0.25;
      ico.group.rotation.z = -elapsedTime * 0.18;
      ico.group.position.y = -1.5 + Math.cos(elapsedTime * 1.0) * 0.1;

      // Smooth mouse follow (lerping)
      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;

      // Tilt scene based on mouse
      scene.rotation.y = target.x * 0.25;
      scene.rotation.x = -target.y * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose resources
      torusKnotGeom.dispose();
      cubeGeom.dispose();
      icoGeom.dispose();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else if (object.material) {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
