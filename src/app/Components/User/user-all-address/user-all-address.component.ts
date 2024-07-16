import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-user-all-address',
  templateUrl: './user-all-address.component.html',
  styleUrls: ['./user-all-address.component.css'],
})
export class UserAllAddressComponent implements OnInit {
  showModal: boolean = false;
  selectedAddress: string = '';
  addresses: any;

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
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

  handleNo() {
    this.closeModal();
    console.log('Not Confirmed');
  }

  delete() {
    this.AuthService.deleteAddress(this.selectedAddress).subscribe((res) => {
      this.closeModal();
      window.location.reload();
    });
  }
}
