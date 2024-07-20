import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/utility/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './Components/Home/slider/slider.component';
import { HomePageComponent } from './Pages/Home/home-page/home-page.component';
import { HomeCategoryComponent } from './Components/Home/home-category/home-category.component';
import { DiscountComponent } from './Components/Home/discount/discount.component';
import { ProductPageComponent } from './Pages/Product/product-page/product-page.component';
import { BrandPageComponent } from './Pages/Brand/brand-page/brand-page.component';
import { LoginPageComponent } from './Pages/Auth/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/Auth/register-page/register-page.component';
import { CategoryPageComponent } from './Pages/Category/category-page/category-page.component';
import { NotFoundComponent } from './Components/utility/not-found/not-found.component';
import { AllProductPageComponent } from './Pages/Product/all-product-page/all-product-page.component';
import { SideFilterComponent } from './Components/utility/side-filter/side-filter.component';
import { ProductCardComponent } from './Components/Products/product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageGalleryComponent } from './Components/Products/image-gallery/image-gallery.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ProductsComponent } from './Components/Home/products/products.component';
import { BrandsComponent } from './Components/Home/brands/brands.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductService } from './Services/product.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartPageComponent } from './Pages/Cart/cart-page/cart-page.component';
import { AdminAddBrandComponent } from './Components/Admin/admin-add-brand/admin-add-brand.component';
import { AdminAddCategoryComponent } from './Components/Admin/admin-add-category/admin-add-category.component';
import { AdminAddProductComponent } from './Components/Admin/admin-add-product/admin-add-product.component';
import { AdminAddSubcategoryComponent } from './Components/Admin/admin-add-subcategory/admin-add-subcategory.component';
import { AdminAllOrdersComponent } from './Components/Admin/admin-all-orders/admin-all-orders.component';
import { AdminOrdersItemComponent } from './Components/Admin/admin-orders-item/admin-orders-item.component';
import { AdminAllProductsComponent } from './Components/Admin/admin-all-products/admin-all-products.component';
import { AdminAllProductsCardComponent } from './Components/Admin/admin-all-products-card/admin-all-products-card.component';
import { AdminEditProductComponent } from './Components/Admin/admin-edit-product/admin-edit-product.component';
import { AdminOrderDeatailsComponent } from './Components/Admin/admin-order-deatails/admin-order-deatails.component';
import { AdminSidebarComponent } from './Components/Admin/admin-sidebar/admin-sidebar.component';
import { AdminAddBrandPageComponent } from './Pages/Admin/admin-add-brand-page/admin-add-brand-page.component';
import { AdminAddCategoryPageComponent } from './Pages/Admin/admin-add-category-page/admin-add-category-page.component';
import { AdminAddProductPageComponent } from './Pages/Admin/admin-add-product-page/admin-add-product-page.component';
import { AdminAddSubcategoryPageComponent } from './Pages/Admin/admin-add-subcategory-page/admin-add-subcategory-page.component';
import { AdminAllOrderPageComponent } from './Pages/Admin/admin-all-order-page/admin-all-order-page.component';
import { AdminEditProductPageComponent } from './Pages/Admin/admin-edit-product-page/admin-edit-product-page.component';
import { AdminOrderDetailsPageComponent } from './Pages/Admin/admin-order-details-page/admin-order-details-page.component';
import { AdminAllProductsPageComponent } from './Pages/Admin/admin-all-products-page/admin-all-products-page.component';
import { AdminAllOrderItemComponent } from './Components/Admin/admin-all-order-item/admin-all-order-item.component';
import { ForgetPasswordComponent } from './Pages/Auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/Auth/reset-password/reset-password.component';
import { VerifyPasswordComponent } from './Pages/Auth/verify-password/verify-password.component';
import { BrandContainerComponent } from './Components/Brand/brand-container/brand-container.component';
import { BrandCardComponent } from './Components/Brand/brand-card/brand-card.component';
import { CategoryCardComponent } from './Components/Category/category-card/category-card.component';
import { UserAddAddressPageComponent } from './Pages/User/user-add-address-page/user-add-address-page.component';
import { UserAllAddresPageComponent } from './Pages/User/user-all-addres-page/user-all-addres-page.component';
import { UserAllOrdersPageComponent } from './Pages/User/user-all-orders-page/user-all-orders-page.component';
import { UserEditAddressPageComponent } from './Pages/User/user-edit-address-page/user-edit-address-page.component';
import { UserFavoriteProductsPageComponent } from './Pages/User/user-favorite-products-page/user-favorite-products-page.component';
import { UserProfilePageComponent } from './Pages/User/user-profile-page/user-profile-page.component';
import { UserAddAddressComponent } from './Components/User/user-add-address/user-add-address.component';
import { UserAllAddressComponent } from './Components/User/user-all-address/user-all-address.component';
import { UserAllOrderComponent } from './Components/User/user-all-order/user-all-order.component';
import { UserEditAddressComponent } from './Components/User/user-edit-address/user-edit-address.component';
import { UserFavoriteProductComponent } from './Components/User/user-favorite-product/user-favorite-product.component';
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { UserSideBarComponent } from './Components/User/user-side-bar/user-side-bar.component';
import { BrandService } from './Services/brand.service';
import { CategoryService } from './Services/category.service';
import { SubcategoryService } from './Services/subcategory.service';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './Guards/auth.guard';
import { JwtInterceptor } from '../app/Interceptors/jwt.interceptor';
import { UserDashboardPageComponent } from './Pages/User/user-dashboard-page/user-dashboard-page.component';
import { UserDashboardComponent } from './Components/User/user-dashboard/user-dashboard.component';
import { AdminAllCategoriesComponent } from './Components/Admin/admin-all-categories/admin-all-categories.component';
import { AdminAllBrandsComponent } from './Components/Admin/admin-all-brands/admin-all-brands.component';
import { AdminAllBrandsPageComponent } from './Pages/Admin/admin-all-brands-page/admin-all-brands-page.component';
import { AdminAllCategoriesPageComponent } from './Pages/Admin/admin-all-categories-page/admin-all-categories-page.component';
import { LoadingComponent } from './Components/utility/loading/loading.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChooseMethodComponent } from './Pages/Checkout/choose-method/choose-method.component';
import { ReviewComponent } from './Components/Products/review/review.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddBrandPageComponent,
    AdminAddCategoryPageComponent,
    AdminAddProductPageComponent,
    AdminAddSubcategoryPageComponent,
    AdminAllOrderPageComponent,
    AdminEditProductPageComponent,
    AdminOrderDetailsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CategoryPageComponent,
    ProductDetailsComponent,
    HomePageComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    HomeCategoryComponent,
    DiscountComponent,
    ProductPageComponent,
    BrandPageComponent,
    AllProductPageComponent,
    SideFilterComponent,
    ProductCardComponent,
    ImageGalleryComponent,
    ProductsComponent,
    BrandsComponent,
    CartPageComponent,
    AdminAddBrandComponent,
    AdminAddCategoryComponent,
    AdminAddProductComponent,
    AdminAddSubcategoryComponent,
    AdminAllOrdersComponent,
    AdminOrdersItemComponent,
    AdminAllProductsComponent,
    AdminAllProductsCardComponent,
    AdminEditProductComponent,
    AdminOrderDeatailsComponent,
    AdminSidebarComponent,
    AdminAllProductsPageComponent,
    AdminAllOrderItemComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    VerifyPasswordComponent,
    BrandContainerComponent,
    BrandCardComponent,
    CategoryCardComponent,
    UserAddAddressPageComponent,
    UserAllAddresPageComponent,
    UserAllOrdersPageComponent,
    UserEditAddressPageComponent,
    UserFavoriteProductsPageComponent,
    UserProfilePageComponent,
    UserAddAddressComponent,
    UserAllAddressComponent,
    UserAllOrderComponent,
    UserEditAddressComponent,
    UserFavoriteProductComponent,
    UserProfileComponent,
    UserSideBarComponent,
    UserDashboardPageComponent,
    UserDashboardComponent,
    AdminAllCategoriesComponent,
    AdminAllBrandsComponent,
    AdminAllBrandsPageComponent,
    AdminAllCategoriesPageComponent,
    LoadingComponent,
    ChooseMethodComponent,
    ReviewComponent,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    RatingModule,
    GalleriaModule,
  ],
  providers: [
    ProductService,
    BrandService,
    CategoryService,
    SubcategoryService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
