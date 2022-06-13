import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { CubeComponent } from './cube/cube.component';

const routes: Routes = [
  {
    path: 'model',
    component: ModelComponent,
  },
  {
    path: 'cube',
    component: CubeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
