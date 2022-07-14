import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { EngineComponent } from './engine/engine.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogUploadModelComponent } from './dialog-upload-model/dialog-upload-model.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    EngineComponent,
    ShowroomComponent,
    NavbarComponent,
    DialogUploadModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: [DialogUploadModelComponent, NavbarComponent],
})
export class AppModule {}
