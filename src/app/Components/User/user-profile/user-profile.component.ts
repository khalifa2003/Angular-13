import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  address: any;
  constructor(private AuthService: AuthService, private Router: Router) {}

  ngOnInit(): void {
    this.onInit();
  }

  onInit() {
    this.AuthService.getMe().subscribe((res) => {
      this.user = res.data;
    });
    this.AuthService.getAddresses().subscribe((res) => {
      this.address = res.data[0];
    });
  }

  // ----------------------------------------- upload image
  changeImage: boolean = false;
  openImg() {
    this.changeImage = true;
  }
  closeImg() {
    this.changeImage = false;
  }
  @ViewChild('phoneInput') fileInput!: ElementRef;
  selectedFile: File | null = null;
  onImageClick(): void {
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  onSubmit(): void {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('profileImage', this.selectedFile);
    }

    this.AuthService.updateMe(formData).subscribe((response) => {
      console.log('Form submission successful', response);
      this.changeImage = false;
      window.location.reload();
    });
  }

  // ----------------------------------------- change email
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  changePhone: boolean = false;
  onSubmitPhone(): void {
    const formData = new FormData();
    formData.append('phone', this.phoneInput.nativeElement.value);

    this.AuthService.updateMe(formData).subscribe((response) => {
      this.changePhone = false;
      this.onInit();
    });
  }
  onSubmitEmail(): void {
    const formData = new FormData();
    formData.append('email', this.emailInput.nativeElement.value);

    this.AuthService.updateMe(formData).subscribe((response) => {
      console.log('Form submission successful', response);
      this.changeEmail = false;
      window.location.reload();
    });
  }
  changeEmail: boolean = false;
  openEmail() {
    this.changeEmail = true;
  }
  closeEmail() {
    this.changeEmail = false;
  }
  openPhone() {
    this.changePhone = true;
  }
  closePhone() {
    this.changePhone = false;
  }
}
