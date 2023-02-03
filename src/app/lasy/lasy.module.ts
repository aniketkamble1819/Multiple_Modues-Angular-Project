import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LasyRoutingModule } from './lasy-routing.module';
import { LandingComponent } from './landing/landing.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    LandingComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    LasyRoutingModule
  ]
})
export class LasyModule { }
