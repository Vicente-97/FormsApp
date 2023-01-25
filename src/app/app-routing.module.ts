import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { DirectivesComponent } from './template/directives/directives.component';
import { SwitchesComponent } from './template/switches/switches.component';
import { NonFoundComponent } from './shared/non-found/non-found.component';



const routes: Routes =
[{path: '',
component: BasicosComponent},{ path: 'template', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },

{path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)},
{path: '**',
component: NonFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

