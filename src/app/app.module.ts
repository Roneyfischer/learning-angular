import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { DoRoneyComponent } from './components/do-roney/do-roney.component';
import {HttpClientModule} from '@angular/common/http'
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ButtonComponent } from './components/button/button.component';
import { EventsComponent } from './components/events/events.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PassagemDadosComponent } from './components/passagem-dados/passagem-dados.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,

    DoRoneyComponent,
    
     ParentDataComponent,
          DirectivesComponent,
          IfRenderComponent,
          ButtonComponent,
          EventsComponent,
          LoginFormComponent,
          ListRenderComponent,
          PassagemDadosComponent,
          PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
