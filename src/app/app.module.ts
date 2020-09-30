import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PreloaderComponent } from './front/preloader/preloader.component';
import { NavComponent } from './front/nav/nav.component';
import { HeaderComponent } from './front/header/header.component';
import { AboutUsComponent } from './front/about-us/about-us.component';
import { OurProgressComponent } from './front/our-progress/our-progress.component';
import { VideoAreaComponent } from './front/video-area/video-area.component';
import { FeatureAreaComponent } from './front/feature-area/feature-area.component';
import { TestimonialAreaComponent } from './front/testimonial-area/testimonial-area.component';
import { GalleryAreaComponent } from './front/gallery-area/gallery-area.component';
import { HowToUseComponent } from './front/how-to-use/how-to-use.component';
import { DownloadAreaComponent } from './front/download-area/download-area.component';
import { PricingAreaComponent } from './front/pricing-area/pricing-area.component';
import { QuestionsAreaComponent } from './front/questions-area/questions-area.component';
import { FormLpComponent } from './front/form-lp/form-lp.component';
import { FooterComponent } from './front/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PreloaderComponent,
    NavComponent,
    HeaderComponent,
    AboutUsComponent,
    OurProgressComponent,
    VideoAreaComponent,
    FeatureAreaComponent,
    TestimonialAreaComponent,
    GalleryAreaComponent,
    HowToUseComponent,
    DownloadAreaComponent,
    PricingAreaComponent,
    QuestionsAreaComponent,
    FormLpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
