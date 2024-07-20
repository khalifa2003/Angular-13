import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-admin-add-brand',
  templateUrl: './admin-add-brand.component.html',
  styleUrls: ['./admin-add-brand.component.css'],
})
export class AdminAddBrandComponent {
  brandForm: FormGroup;
  showModal: boolean = false;

  constructor(private brandService: BrandService, fb: FormBuilder) {
    this.brandForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.brandForm.valid) {
      this.brandService.createBrand(this.brandForm.value).subscribe((res) => {
        this.openModal();
        setTimeout(() => {
          this.closeModal();
        }, 3000);
        this.brandForm.reset();
      });
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  get f() {
    return this.brandForm.controls;
  }
}
