import { Component, OnInit, OnChanges } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { DataService } from '../rest.service';
import { Data } from '../data.ts';

@Component({
  selector: "app-tax",
  templateUrl: "./tax.component.html",
  styleUrls: ["./tax.component.css"]
})
export class TaxComponent implements OnInit, OnChanges {
  formResult: any;
  data: any;
  form: FormGroup;
  isFormSubmitted: boolean;
  value1 = 10;
  f1: FormGroup;

  constructor(private restService: DataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getJSONData();
  }

  getJSONData() {
    
      this.data = Data;
      console.log(this.data);
      if (this.data) {
        this.createForm();
      }
  }

  createForm() {
    this.form = this.fb.group({
      // f1:  new FormControl(this.value1, [Validators.required, Validators.minLength(4)])
      fit: this.fb.group({
        A_RADIO: new FormControl(
          this.data.estimatedIncomeTaxWthlSection.fedralIncomeTaxWthlTable
            .selectedRadioAddress,
          Validators.required
        ),
        A_withold_this_amount: new FormControl('avfc', [Validators.required, Validators.minLength(3)]),
        A_withold_this_percent: new FormControl('', [Validators.required, Validators.minLength(3)]),
        A_additional_amount: new FormControl('', [Validators.required, Validators.minLength(3)]),
        A_marital_status: new FormControl('', [Validators.required, Validators.minLength(3)]),
        A_number_of_allowances: new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      sit: this.fb.group({
        B_RADIO: new FormControl(
          this.data.estimatedIncomeTaxWthlSection.stateIncomeTaxWthlTable
            .selectedRadioAddress,
          Validators.required
        ),
        B_withhold_this_amount: new FormControl(null, [Validators.required, Validators.email]),
        B_number_of_allowances: new FormControl('', Validators.required),
        B_additional_percent: new FormControl('', Validators.required),
        B_6: new FormControl('', Validators.required),
        B_7: new FormControl('', Validators.required),
        B_additional_amount: new FormControl('', Validators.required),
        B_marital_status: new FormControl('', Validators.required),
        B_state: new FormControl('', Validators.required),
        B_percentage_of_your_taxable_benefit_amount: new FormControl('', Validators.required),
      })
    });
  }
  
  ngOnChanges(){
    console.log(this.form);
  }
}
