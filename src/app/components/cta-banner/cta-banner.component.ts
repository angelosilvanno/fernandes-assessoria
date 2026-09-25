import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  template: `
    <section class="py-16 bg-navy text-white text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Vamos conversar sobre sua gestão?
        </h2>
        <p class="text-slate-300 text-base max-w-xl mx-auto mb-8 font-light">
          Converse com nossos especialistas e garanta conformidade contábil, segurança orçamentária e tranquilidade para a gestão do seu município.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#contato" class="px-8 py-3.5 rounded-lg bg-gold text-navy font-bold hover:bg-gold-light transition-all shadow-lg">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  `
})
export class CtaBannerComponent {}