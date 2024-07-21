import { Component, Input, SimpleChanges } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { User } from 'src/app/Models/user';
import { Review } from 'src/app/Models/review';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  @Input() productId: string = 'a';
  reviewsList: Review[] = [];
  user: User = {} as User;
  reviewForm: FormGroup;

  constructor(private AuthService: AuthService, private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      score: [0, Validators.required],
      title: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getReviews();
  }

  addReview() {
    this.AuthService.addReview(
      this.reviewForm.value.title,
      this.reviewForm.value.score,
      this.productId
    ).subscribe((res) => {
      this.reviewForm.reset();
      this.getReviews();
    });
  }

  getReviews() {
    this.AuthService.getReviews(this.productId).subscribe((res) => {
      this.reviewsList = res.data;
    })
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
