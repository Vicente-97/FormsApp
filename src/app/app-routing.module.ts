import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { DirectivesComponent } from './template/directives/directives.component';
import { SwitchesComponent } from './template/switches/switches.component';


const routes: Routes = [ { path: 'template', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }, { path: 'blog', loadChildren: () => import('./template/blog/blog.module').then(m => m.BlogModule) }];


const routes: Routes = [
  {
    path: '', 
     component: BasicosComponent,
     pathMatch: 'full'
  },

  {
    path: 'template/dinamicos', canActivate: [],
     component: DinamicosComponent,
     pathMatch: 'full'
     
  },
  
  {
    path: 'template/directives',  canActivate: [],
    component: DirectivesComponent,
    pathMatch: 'full'
    
  },
  {
    path: 'template/switches',  canActivate: [],
    component: SwitchesComponent,
    pathMatch: 'full'
    
  },
  {
    path: 'reactive/basicos',  canActivate: [],
    component: BasicosComponent,
    pathMatch: 'full'
    
  },
  
  {
    path: '**',
    // component: 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }