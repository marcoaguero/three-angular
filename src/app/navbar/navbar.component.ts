import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine/engine.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogUploadModelComponent } from '../dialog-upload-model/dialog-upload-model.component';

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

  constructor(public engine: EngineService, private dialog: MatDialog) {}

  //a continuacion envio a loadModel del engine.service la constante indicada por cada uno de los botones
  ngOnInit(): void {}

  public loadModel(object: string) {
    this.engine.loadModel(object);
  }
  //aqui abro el dialogo para subir el archivo con MatDialog
  public openDialogUploadModel() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    //le doy unas dimensiones
    dialogConfig.width = '15em';
    dialogConfig.height = '10em';

    this.dialog
      .open(DialogUploadModelComponent, dialogConfig)
      .afterClosed()
      .subscribe(({ action, object }) => {
        switch (action) {
          case 'SAVE':
            this.engine.loadModelUrl(object.file);
            this.dialog.closeAll();
            break;
          case 'CLOSE':
            this.dialog.closeAll();
            break;
        }
      });
  }
}
