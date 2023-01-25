import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'basicos', component: BasicosComponent }, { path: 'dinamicos', component: DinamicosComponent },
  { path: 'switches', component: SwitchesComponent }];

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports:[
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    RouterModule
  ]
})
export class ReactiveModule { }
