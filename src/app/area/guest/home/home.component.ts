import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestHomeDataService, GuestHomeInfoService } from '@core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [
    GuestHomeDataService,
    GuestHomeInfoService
  ]
})
export class HomeComponent {
  constructor(
    public info: GuestHomeInfoService,
    public data: GuestHomeDataService
  ) { }

  html = "<div>test</div>";
  searchform = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });
  get id() { return this.searchform.get('id'); }
  get isValid() { return this.searchform.valid };

  submit() {
    const fakeid: any = this.id?.value;
    this.info.query(fakeid);
  }
}
