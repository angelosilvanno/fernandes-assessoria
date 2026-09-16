import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { DifferentialsComponent } from './components/differentials/differentials.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappWidgetComponent } from './components/whatsapp-widget/whatsapp-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    DifferentialsComponent,
    CtaBannerComponent,
    ContactComponent,
    FooterComponent,
    WhatsappWidgetComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}