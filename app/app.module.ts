import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TableComponent } from './table/table.component';
import { TaxComponent } from './tax/tax.component';
import { DataService } from './rest.service';

import {ButtonModule} from 'primeng/button';
import { ValidationsComponent } from './validations/validations.component';
import { ValidationService } from './validation.service';
import { ErrorsAllComponent } from './validations/errors-all/errors-all.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, HttpClientModule, ButtonModule ],
  declarations: [ AppComponent, HelloComponent, TableComponent, TaxComponent, ValidationsComponent, ErrorsAllComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, ValidationService]
})
export class AppModule { }
