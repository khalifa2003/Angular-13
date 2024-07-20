import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Address } from 'src/app/Models/address';


@Component({
  selector: 'app-user-all-address',
  templateUrl: './user-all-address.component.html',
  styleUrls: ['./user-all-address.component.css'],
})
export class UserAllAddressComponent implements OnInit {
  showModal: boolean = false;
  selectedAddress: string = '';
  addresses: Address[] = [];

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    this.getAddresses();
  }
  getAddresses() {
    this.AuthService.getAddresses().subscribe((res) => {
      this.addresses = res.data;
    });
  }

  openModal(id: string) {
    this.selectedAddress = id;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  delete() {
    this.AuthService.deleteAddress(this.selectedAddress).subscribe((res) => {
      this.closeModal();
      this.getAddresses();
    });
  }
}
