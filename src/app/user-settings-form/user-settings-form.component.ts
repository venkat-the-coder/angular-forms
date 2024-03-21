import { Component } from '@angular/core';
import { UserSettings } from '../data/interface/userSettings.model';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  bsValue = new Date();
  subscriptionTypes!:Observable<string[]>;
  singleModel:boolean =false;

  constructor(private dataService: DataService) {
  }

  originaluserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };

  userSettings: UserSettings = { ...this.originaluserSettings };

  onSubmit(form: NgForm) {
    this.dataService.postUserForm(this.userSettings).subscribe(
      data => { console.log(data) },
      error => { console.log(error) }
    )
  }

  ngOnInit() {
      this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

}
