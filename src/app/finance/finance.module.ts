import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { DealerComponent } from './dealer/dealer.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FinanceFormComponent } from './finance-form/finance-form.component';
import { FinanceParameterComponent } from './finance-parameter/finance-parameter.component';


@NgModule({
  declarations: [
    FinanceComponent,
    DealerComponent,
    VehicleComponent,
    FinanceFormComponent,
    FinanceParameterComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
