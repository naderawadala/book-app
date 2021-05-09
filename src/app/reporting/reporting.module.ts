import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule {
}
