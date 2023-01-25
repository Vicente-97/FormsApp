import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template/template.module';
import { TemplateRoutingModule } from './template/template-routing/template-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    TemplateRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
