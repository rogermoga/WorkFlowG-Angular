import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';
import { FakeBackendProvider } from './shared/interceptors/fakeBackendInterceptor';
import { JwtInterceptor } from './shared/interceptors/jwtIterceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TareaService } from './tarea/shared/tarea.service';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TareaService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },

    // provider used to create fake backend
    FakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
