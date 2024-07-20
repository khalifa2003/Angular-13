import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { Address } from 'src/app/Models/address';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User = {} as User;
  address: Address = {} as Address;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  @ViewChild('imgInput') imgInput!: ElementRef;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.AuthService.getMe().subscribe((res) => {
      this.user = res.data;
    });
    this.AuthService.getAddresses().subscribe((res) => {
      this.address = res.data[0];
    });
  }

  onSubmit(data: any) {
    this.AuthService.updateMe(data).subscribe((response) => {
      this.changePhone = false;
      this.getData();
    });
  }

  changePhone: boolean = false;
  changeImg: boolean = false;
  changeEmail: boolean = false;
  openEmail() {
    this.changeEmail = true;
  }
  openImg() {
    this.changeImg = true;
  }
  openPhone() {
    this.changePhone = true;
  }
  closeEmail() {
    this.changeEmail = false;
  }
  closeImg() {
    this.changeImg = false;
  }
  closePhone() {
    this.changePhone = false;
  }
}
