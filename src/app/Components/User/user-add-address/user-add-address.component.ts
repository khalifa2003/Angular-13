import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-user-add-address',
  templateUrl: './user-add-address.component.html',
  styleUrls: ['./user-add-address.component.css'],
})
export class UserAddAddressComponent implements OnInit {
  cities: string[] = ['Alexandria', 'Cairo', 'Giza'];
  userForm: FormGroup = new FormGroup({});
  showModal: boolean = false;
  user: User = {} as User;

  constructor(private fb: FormBuilder, private AuthService: AuthService) {}

  ngOnInit(): void {
    this.user = this.AuthService.currentUserValue.data;
    this.userForm = this.fb.group({
      fname: [this.user.fname, Validators.required],
      lname: [this.user.lname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      phone: [this.user.phone, Validators.required],
      address: [, Validators.required],
      city: [, Validators.required],
      country: [, Validators.required],
      state: ['Alexandria', Validators.required],
      postalCode: [],
    });
  }

  get f() {
    return this.userForm.controls;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.AuthService.addAddress(this.userForm.value).subscribe((res) => {
      this.openModal();
      this.userForm.reset();
    });
  }
}
