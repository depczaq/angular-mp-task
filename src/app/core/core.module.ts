import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from 'app/core/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { HeaderComponent } from 'app/core/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ]
})
export class CoreModule { }
