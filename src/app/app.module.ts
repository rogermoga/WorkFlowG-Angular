import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';
import { FakeBackendProvider } from './shared/interceptors/fakeBackendInterceptor';
import { JwtInterceptor } from './shared/interceptors/jwtIterceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TareaService } from './tarea/shared/tarea.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxDatatableModule

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
