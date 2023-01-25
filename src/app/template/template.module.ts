import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchesComponent } from './switches/switches.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'basicos', component: BasicosComponent }, { path: 'dinamicos', component: DinamicosComponent },
 { path: 'directives', component: DirectivesComponent }, { path: 'switches', component: SwitchesComponent }];

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports:[
    BasicosComponent,
    DinamicosComponent,
    DirectivesComponent,
    SwitchesComponent,
    RouterModule
  ]
})
export class TemplateModule { }
