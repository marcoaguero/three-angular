import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { EngineComponent } from './engine/engine.component';

const routes: Routes = [
  // {
  //   path: 'model',
  //   component: ModelComponent,
  // },
  // {
  //   path: 'engine',
  //   component: EngineComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
