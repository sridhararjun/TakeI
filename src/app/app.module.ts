import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { JuniorArtistBillComponent } from './junior-artist-bill/junior-artist-bill.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JuniorArtistBillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'junior',
        component:JuniorArtistBillComponent
      }
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
