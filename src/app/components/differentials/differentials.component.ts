import { Component } from '@angular/core';

@Component({
  selector: 'app-differentials',
  standalone: true,
  template: `
    <section id="diferenciais" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-navy">Por que escolher a Fernandes?</h2>
          <p class="text-slate-500 text-sm mt-3">Cuidamos da burocracia para você focar em fazer o seu negócio vender e crescer.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Atendimento Próximo </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Contato direto pelo WhatsApp e facilidade para tirar dúvidas. Cuidamos das suas rotinas com agilidade e atenção de verdade.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Conhecimento da Região</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Entendemos a realidade do comércio de Upanema e do Rio Grande do Norte para manter sua empresa em dia com as regras locais.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Pague Imposto Justo</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Avaliamos o melhor enquadramento tributário para a sua empresa, reduzindo custos de forma legal e sem pagar nada a mais.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-xl border border-slate-200 bg-white hover:border-gold transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <svg class="w-6 h-6 stroke-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="font-bold text-navy text-lg mb-2">Segurança e Tranquilidade</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Prazos rigorosamente cumpridos e sigilo total dos seus números, mantendo seu negócio livre de multas e pendências fiscais.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class DifferentialsComponent {}