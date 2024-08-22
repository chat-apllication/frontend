import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from  './shared/services/config/config.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export function loadConfig(configService:ConfigService){
  return () => configService.loadConfig()
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER ,
      useFactory : loadConfig ,
      deps: [ConfigService] ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
