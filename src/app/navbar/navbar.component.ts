import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine/engine.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //creo las variables con las URL de los distintos modelos
  public car = 'assets/car1.gltf';
  public sedan = 'assets/sedan.gltf';
  public taxi = 'assets/sedantaxi.gltf';
  constructor(public engine: EngineService) {}
  //a continuacion envio a loadModel del engine.service la constante indicada por cada uno de los botones
  ngOnInit(): void {}
  public loadModel(object: string) {
    this.engine.loadModel(object);
  }
}
