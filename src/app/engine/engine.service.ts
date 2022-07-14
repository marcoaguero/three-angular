import * as THREE from 'three';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
//para poder cargar archivos GLTF importo el GLTFLoader
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
//para agregar el control de la camara con el raton o controles touch, importo OrbitControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Scene } from 'three';
import { R3BoundTarget } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  //agrego distintos tipos de luces
  private ambientLight: THREE.AmbientLight;
  private light1: THREE.PointLight;
  private light2: THREE.PointLight;
  private controls: OrbitControls;
  private model: any;
  private loaderGLTF = new GLTFLoader();
  private frameId: any = null;
  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }
  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // referenciar el elemento canvas de HTML
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // empiezo creando la escena
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.camera.position.x = 5;
    this.scene.add(this.camera);
    //le paso los parametros indicados en la documentacion para OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    //agrego distintos tipos de luces
    this.ambientLight = new THREE.AmbientLight(0x404040);
    this.ambientLight.position.z = 10;
    this.scene.add(this.ambientLight);
    this.light1 = new THREE.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);

    // this.loadModel('assets/car1.gltf');
  }
  //saco el metodo loadModel fuera y lo parametrizo de forma que reciba el string con la URL del navbar.component
  public loadModel(ruta: string): void {
    //si dentro de la posicion 4 del array hay algo (en este caso seria solo un modelo) borramos con remove
    //lo que haya y pasamos al paso siguiente
    if (this.scene.children[4]) {
      this.scene.remove(this.scene.children[4]);
    }
    //aqui es donde cargaremos la ruta, que sera la URL de navbar.component
    this.loaderGLTF.load(ruta, (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      this.scene.add(this.model);
    });
  }
  //creo un segundo metodo para cargar archivos desde navbar.component.ts
  public loadModelUrl(file: any): void {
    if (this.scene.children[4]) {
      this.scene.remove(this.scene.children[4]);
    }
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      function (event) {
        const contents = event.target.result;

        const loader = new GLTFLoader();
        loader.parse(contents, '', function (gltf) {
          this.model = gltf.scene.children[0];
          console.log(this.model);
          this.scene.add(this.model);
        });
      },
      false
    );
    reader.readAsArrayBuffer(file);
  }
  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
    this.controls.update();
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    // this.model.rotation.x += 0.01;
    // this.model.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
function loadGLTF(
  url: string,
  arg1: (gltf: any) => void,
  arg2: () => void,
  arg3: () => void
) {
  throw new Error('Function not implemented.');
}
