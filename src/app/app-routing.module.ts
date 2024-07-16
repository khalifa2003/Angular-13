import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { AllProductPageComponent } from './Pages/Product/all-product-page/all-product-page.component';
import { ProductPageComponent } from './Pages/Product/product-page/product-page.component';
import { BrandPageComponent } from './Pages/Brand/brand-page/brand-page.component';
import { CategoryPageComponent } from './Pages/Category/category-page/category-page.component';

import { AdminAddBrandPageComponent } from './Pages/Admin/admin-add-brand-page/admin-add-brand-page.component';
import { AdminAllOrderPageComponent } from './Pages/Admin/admin-all-order-page/admin-all-order-page.component';
import { AdminAllProductsPageComponent } from './Pages/Admin/admin-all-products-page/admin-all-products-page.component';
import { AdminAddCategoryPageComponent } from './Pages/Admin/admin-add-category-page/admin-add-category-page.component';
import { AdminAddSubcategoryPageComponent } from './Pages/Admin/admin-add-subcategory-page/admin-add-subcategory-page.component';
import { AdminAddProductPageComponent } from './Pages/Admin/admin-add-product-page/admin-add-product-page.component';
import { AdminEditProductPageComponent } from './Pages/Admin/admin-edit-product-page/admin-edit-product-page.component';

import { RegisterPageComponent } from './Pages/Auth/register-page/register-page.component';
import { LoginPageComponent } from './Pages/Auth/login-page/login-page.component';
import { ForgetPasswordComponent } from './Pages/Auth/forget-password/forget-password.component';

import { CartPageComponent } from './Pages/Cart/cart-page/cart-page.component';
import { UserAddAddressPageComponent } from './Pages/User/user-add-address-page/user-add-address-page.component';
import { UserAllAddresPageComponent } from './Pages/User/user-all-addres-page/user-all-addres-page.component';
import { UserAllOrdersPageComponent } from './Pages/User/user-all-orders-page/user-all-orders-page.component';
import { UserEditAddressPageComponent } from './Pages/User/user-edit-address-page/user-edit-address-page.component';
import { UserFavoriteProductsPageComponent } from './Pages/User/user-favorite-products-page/user-favorite-products-page.component';
import { UserProfilePageComponent } from './Pages/User/user-profile-page/user-profile-page.component';

import { NotFoundComponent } from './Components/utility/not-found/not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { UserDashboardPageComponent } from './Pages/User/user-dashboard-page/user-dashboard-page.component';
import { AdminAllCategoriesPageComponent } from './Pages/Admin/admin-all-categories-page/admin-all-categories-page.component';
import { AdminAllBrandsPageComponent } from './Pages/Admin/admin-all-brands-page/admin-all-brands-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default path
    ],
  }, // Default path
  {
    path: 'admin/id/addsubcategory',
    component: AdminAddSubcategoryPageComponent,
  },
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: AllProductPageComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'brands', component: BrandPageComponent },
  { path: 'categories', component: CategoryPageComponent },

  { path: 'login', component: LoginPageComponent },
  { path: 'login/verify', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'logout', component: LoginPageComponent },

  {
    path: 'admin/id/allorders',
    component: AdminAllOrderPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/allproducts',
    component: AdminAllProductsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/allproducts/:id',
    component: AdminEditProductPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/addbrand',
    component: AdminAddBrandPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/addcategory',
    component: AdminAddCategoryPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/allcategories',
    component: AdminAllCategoriesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/allbrands',
    component: AdminAllBrandsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/id/addproduct',
    component: AdminAddProductPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'user/id/cart',
    component: CartPageComponent,
  },
  { path: 'user/id/dashboard', component: UserDashboardPageComponent },
  { path: 'user/id/addaddress', component: UserAddAddressPageComponent },
  { path: 'user/id/addresses', component: UserAllAddresPageComponent },
  { path: 'user/id/allorders', component: UserAllOrdersPageComponent },
  { path: 'user/id/addresses/id', component: UserEditAddressPageComponent },
  { path: 'user/id/profile', component: UserProfilePageComponent },
  {
    path: 'user/id/favoriteproducts',
    component: UserFavoriteProductsPageComponent,
  },
  { path: '**', component: NotFoundComponent }, // wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
