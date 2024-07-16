import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ISubcategory } from 'src/app/Models/isubcategory';
import { AuthService } from 'src/app/Services/auth.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { SubcategoryService } from 'src/app/Services/subcategory.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  listOfSubcategories: ISubcategory[] = [];
  listOfCategories: ICategory[] = [];
  searchResults: IProduct[] = [];
  searchTerm: any = '';

  constructor(
    private SubcategoryService: SubcategoryService,
    private CategoryService: CategoryService,
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe((data) => {
      this.listOfCategories = data.data;
    });
  }

  onSearch(): void {
    if (this.searchTerm.trim() != '') {
      this.productService
        .searchProducts({ title: this.searchTerm })
        .subscribe((data: any) => {
          console.log(data);

          this.searchResults = data.data;
        });
    } else {
      this.searchResults = [];
    }
  }

  reloadPage() {
    if (this.searchTerm != '') {
      this.router
        .navigate(['/products'], { queryParams: { title: this.searchTerm } })
        .then(() => {
          window.location.reload();
        });
    }
  }

  get isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  get isLogged(): boolean {
    return this.authService.isUserLogged;
  }

  logout() {
    this.authService.logout();
  }

  getSubcategories(category: string) {
    this.SubcategoryService.getSubcategories(category).subscribe((data) => {
      this.listOfSubcategories = data.data;
    });
  }

  getProductByCategory(item: ICategory) {
    this.router.navigate(['/products'], {
      queryParams: { category: item._id },
    });
  }

  getProductBySubCategory(item: ISubcategory) {
    this.router.navigate(['/products'], {
      queryParams: { subcategory: item._id },
    });
  }
}
