import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './pages/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomComponent } from './custom/custom.component';
import { CapitalizePipe } from './capitalize.pipe';
import { ColorchangeDirective } from './colorchange.directive';
import { ModalComponent } from './modal/modal.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InactivePostsComponent,
    ActivePostsComponent,
    NavComponent,
    Page404Component,
    CustomComponent,
    CapitalizePipe,
    ColorchangeDirective,
    ModalComponent,
    ModalButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
