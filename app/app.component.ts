import { Component } from '@angular/core'
import {FormBuilder, ControlContainer} from '@angular/forms'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  form = this.fb.group({
    abc: this.fb.group({
      foo: 'foo',
      bar: 'bar',
    }),
    baz: 'baz',
  })

  constructor(private fb: FormBuilder) {}
}
