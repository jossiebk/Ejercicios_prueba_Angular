import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPipePipe } from './pipes/mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[MiPipePipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
