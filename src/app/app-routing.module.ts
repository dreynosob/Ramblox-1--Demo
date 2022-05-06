import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { HomepageTwoComponent } from './components/pages/homepage-two/homepage-two.component';
import { HomepageThreeComponent } from './components/pages/homepage-three/homepage-three.component';
import { HomepageFourComponent } from './components/pages/homepage-four/homepage-four.component';
import { HomepageFiveComponent } from './components/pages/homepage-five/homepage-five.component';
import { HomepageSixComponent } from './components/pages/homepage-six/homepage-six.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { TeampageOneComponent } from './components/pages/teampage-one/teampage-one.component';
import { TeampageTwoComponent } from './components/pages/teampage-two/teampage-two.component';
import { ServicespageOneComponent } from './components/pages/servicespage-one/servicespage-one.component';
import { ServicespageTwoComponent } from './components/pages/servicespage-two/servicespage-two.component';
import { ServicespageThreeComponent } from './components/pages/servicespage-three/servicespage-three.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { ProductsListPageComponent } from './components/pages/products-list-page/products-list-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsOfServicePageComponent } from './components/pages/terms-of-service-page/terms-of-service-page.component';
import { PortfolioNoSpacePageComponent } from './components/pages/portfolio-no-space-page/portfolio-no-space-page.component';
import { PortfolioThreeColumnsPageComponent } from './components/pages/portfolio-three-columns-page/portfolio-three-columns-page.component';
import { PortfolioTwoColumnsPageComponent } from './components/pages/portfolio-two-columns-page/portfolio-two-columns-page.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { BlogGridTwoInRowPageComponent } from './components/pages/blog-grid-two-in-row-page/blog-grid-two-in-row-page.component';
import { BlogGridThreeInRowPageComponent } from './components/pages/blog-grid-three-in-row-page/blog-grid-three-in-row-page.component';
import { BlogGridFullWidthPageComponent } from './components/pages/blog-grid-full-width-page/blog-grid-full-width-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomepageSevenComponent } from './components/pages/homepage-seven/homepage-seven.component';
import { HomepageEightComponent } from './components/pages/homepage-eight/homepage-eight.component';
import { HomepageNineComponent } from './components/pages/homepage-nine/homepage-nine.component';
import { HomepageTenComponent } from './components/pages/homepage-ten/homepage-ten.component';

const routes: Routes = [
   // {path: '', component: HomepageOneComponent},
    { path: '', redirectTo: 'home-two', pathMatch: 'full' },
    {path: 'home-two', component: HomepageTwoComponent},
    {path: 'home-three', component: HomepageThreeComponent},
    {path: 'home-four', component: HomepageFourComponent},
    {path: 'home-five', component: HomepageFiveComponent},
    {path: 'home-six', component: HomepageSixComponent},
    {path: 'home-seven', component: HomepageSevenComponent},
    {path: 'home-eight', component: HomepageEightComponent},
    {path: 'home-nine', component: HomepageNineComponent},
    {path: 'home-ten', component: HomepageTenComponent},
    {path: 'about-us-1', component: AboutPageOneComponent},
    {path: 'about-us-2', component: AboutPageTwoComponent},
    {path: 'team-1', component: TeampageOneComponent},
    {path: 'team-2', component: TeampageTwoComponent},
    {path: 'services-1', component: ServicespageOneComponent},
    {path: 'services-2', component: ServicespageTwoComponent},
    {path: 'services-3', component: ServicespageThreeComponent},
    {path: 'single-services', component: ServicesDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'products-list', component: ProductsListPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'single-products', component: ProductsDetailsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-of-service', component: TermsOfServicePageComponent},
    {path: 'portfolio-1', component: PortfolioTwoColumnsPageComponent},
    {path: 'portfolio-2', component: PortfolioThreeColumnsPageComponent},
    {path: 'portfolio-3', component: PortfolioNoSpacePageComponent},
    {path: 'single-portfolio', component: PortfolioDetailsPageComponent},
    {path: 'blog-1', component: BlogGridTwoInRowPageComponent},
    {path: 'blog-2', component: BlogGridThreeInRowPageComponent},
    {path: 'blog-3', component: BlogGridFullWidthPageComponent},
    {path: 'blog-4', component: BlogRightSidebarPageComponent},
    {path: 'blog-5', component: BlogLeftSidebarPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }