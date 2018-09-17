import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { BreadcrumbsComponent } from 'app/core/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
