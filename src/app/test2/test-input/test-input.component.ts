import {Component, OnInit} from '@angular/core';
import {AbstractValueAccessor, MakeProvider} from '../../abstract-value-accessor.component';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styles: [],
  providers: [MakeProvider(TestInputComponent)]
})
export class TestInputComponent extends AbstractValueAccessor implements OnInit {

  ngOnInit(): void {
  }

}
