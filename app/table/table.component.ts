import { Component, OnInit, Input, Optional } from "@angular/core";
import { ControlContainer, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() isResponsive: boolean;
  @Input() tableRows: any;
  @Input() selectedAddress: any;
  @Input() tableHeader: any;
  @Input() labelBottomSpace: boolean;
  @Input() colsWidth: boolean;
  @Input() sectionHeader: boolean;
  @Input() value1;
  fg: FormGroup;
  fc: FormControl;
  isRequired;
  isMinLength;
  fcName;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() { 
    this.fg = <FormGroup>this.controlContainer.control;
    this.fc = <FormControl>this.fg.get('fit');
  }

  get fname() { 
    return this.controlContainer.control.get('A_withold_this_amount');
  }

  catchErrors(event, controlName) {

    this.fcName = controlName;
    // console.log(this.fg.get('f1').errors);
    // console.log(event, ' ', controlName);

    if (this.fg.get(controlName).errors != null) {
      if (this.fg.get(controlName).errors.required) {
        this.isRequired = true;
      }

      if (this.fg.get(controlName).errors.minLength != null) {
        this.isMinLength = true;
      }        
      console.log(this.fg.get(controlName));
    }

  }


}
