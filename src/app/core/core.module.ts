import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from 'app/core/authentication.service';
import { BreadcrumbsComponent } from 'app/core/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { UserService } from 'app/core/user-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  providers: [AuthenticationService, UserService],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ]
})
export class CoreModule { }
