import { Component } from '@angular/core';

@Component({
  selector: 'app-differentials',
  standalone: true,
  template: `
    <section id="diferenciais" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-navy">Por que escolher a Fernandes?</h2>
          <p class="text-slate-500 text-sm mt-3">
            Cuidamos da gestão administrativa e orçamentária do seu município.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Diferencial 1 -->
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Suporte</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Contato direto pelo WhatsApp para tirar dúvidas e acompanhar demandas diárias de secretarias e gestores.
              </p>
            </div>
          </div>

          <!-- Diferencial 2 -->
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Região</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Experiência nos municípios potiguares e total conformidade com o TCE-RN.
              </p>
            </div>
          </div>

          <!-- Diferencial 3 -->
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Eficiência</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Aplicação correta dos recursos da Educação e Saúde, prevenindo glosas e bloqueios de repasses.
              </p>
            </div>
          </div>

          <!-- Diferencial 4 -->
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Segurança</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Envios do SIOPE, SIOPS e eSocial no prazo, mantendo o município livre de pendências.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class DifferentialsComponent {}