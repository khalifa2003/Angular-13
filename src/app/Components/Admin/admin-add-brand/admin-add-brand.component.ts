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
      image: [null, Validators.required],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.brandForm.patchValue({ image: file });
  }

  onSubmit() {
    if (this.brandForm.valid) {
      const formdata = new FormData();
      formdata.append('name', this.brandForm.get('name')?.value);
      formdata.append('description', this.brandForm.get('description')?.value);
      formdata.append('image', this.brandForm.get('image')?.value);

      this.brandService.createBrand(formdata).subscribe((e: any) => {
        this.openModal();
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

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  handleYes() {
    this.closeModal();
    console.log('Confirmed');
  }

  get f() {
    return this.brandForm.controls;
  }
}
