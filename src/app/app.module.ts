import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ComplainsComponent } from './complains/complains.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserDetailsService } from './shared/user-details.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent,
    ComplainsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"notifications",component:NotificationsComponent},
      {path:"userdetails",component:UserDetailsComponent},
      {path:"complains",component:ComplainsComponent}
    ])
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
