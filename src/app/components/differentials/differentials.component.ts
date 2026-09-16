import { Component } from '@angular/core';

@Component({
  selector: 'app-differentials',
  standalone: true,
  template: `
    <section id="diferenciais" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-navy">Por que escolher a Fernandes?</h2>
          <p class="text-slate-500 text-sm mt-3">Excelência prática para salvaguardar a saúde da sua empresa</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of differentials; track item.title) {
            <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-md bg-navy text-gold flex items-center justify-center mb-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="item.icon"></svg>
                </div>
                <h3 class="font-bold text-navy text-lg mb-2">{{ item.title }}</h3>
                <p class="text-slate-600 text-sm leading-relaxed">{{ item.text }}</p>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class DifferentialsComponent {
  differentials = [
    {
      title: 'Atendimento Humanizado',
      text: 'Sem robôs impessoais: contato direto com especialistas dedicados à sua rotina empresarial.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>'
    },
    {
      title: 'Expertise Regional',
      text: 'Conhecimento aprofundado sobre legislações fiscais do Rio Grande do Norte e especificidades municipais.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>'
    },
    {
      title: 'Redução de Custos',
      text: 'Análise detalhada de enquadramentos fiscais com objetivo de elisão fiscal legal e economia sustentável.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>'
    },
    {
      title: 'Segurança & Sigilo',
      text: 'Tratamento de dados em conformidade com a LGPD e sigilo absoluto sobre informações financeiras.',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
    }
  ];
}