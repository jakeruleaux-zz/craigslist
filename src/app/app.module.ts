import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { FreeComponent } from './free/free.component';
import { JobsComponent } from './jobs/jobs.component';
import { AptsComponent } from './apts/apts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FreeComponent,
    JobsComponent,
    AptsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
