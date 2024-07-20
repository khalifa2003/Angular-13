import { Component, Input, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  constructor(private AuthService: AuthService) {}
  @Input() productId: any;
  reviewsList: any;
  user: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.getReviews();
  }

  newReview: any = { rating: 0, comment: '' };

  addReview() {
    console.log(this.newReview.comment);
    console.log(this.newReview.rating);

    this.AuthService.addReview(
      this.newReview.comment,
      this.newReview.rating,
      this.productId
    ).subscribe((res) => {
      this.newReview = { rating: 0, comment: '' };
      this.getReviews();
    });
  }

  getReviews() {
    this.AuthService.getReviews(this.productId).subscribe((res) => {
      this.reviewsList = res.data;
    });
    this.AuthService.getMe().subscribe((res) => {
      this.user = res.data;
    });
  }

  deleteReview(id: string) {
    this.AuthService.deleteReview(id).subscribe((res) => {
      this.getReviews();
    });
  }
}
