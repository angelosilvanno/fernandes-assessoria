import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  desc: string;
  iconPath: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="servicos" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-gold">O QUE OFERECEMOS</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-navy mt-2">Nossos Serviços</h2>
          <div class="w-12 h-1 bg-gold mx-auto mt-4 rounded"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (service of services; track service.title) {
            <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold/50 transition-all hover:shadow-lg flex gap-5">
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="service.iconPath"></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-navy mb-2">{{ service.title }}</h3>
                <p class="text-slate-600 leading-relaxed text-sm">{{ service.desc }}</p>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      title: 'Gestão Contábil e Tributária',
      desc: 'Planejamento fiscal rigoroso, escrituração contábil e apuração de impostos com foco em conformidade e economia tributária legal.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>'
    },
    {
      title: 'Consultoria e Apoio Administrativo',
      desc: 'Otimização de processos operacionais, rotinas de departamento pessoal e relatórios gerenciais para tomada de decisão assertiva.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>'
    },
    {
      title: 'Treinamento e Desenvolvimento Profissional',
      desc: 'Capacitações in-company em rotinas administrativas, controle financeiro e boas práticas contábeis voltadas para a equipe do seu negócio.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>'
    },
    {
      title: 'Organização de Eventos e Locação de Equipamentos',
      desc: 'Suporte logístico, estrutura de suporte e locação de equipamentos especializados para eventos corporativos e assembleias institucionais.',
      iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
    }
  ];
}