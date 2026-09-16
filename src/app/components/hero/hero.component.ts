import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6">
            <span class="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-gold border border-gold/40 rounded-full uppercase bg-gold/10">
              Upanema / RN e Região
            </span>
            
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight max-w-xl">
              Soluções Contábeis e Administrativas para o <span class="text-gold">Crescimento</span> do Seu Negócio.
            </h1>

            <p class="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Aliamos segurança fiscal, planejamento estratégico e gestão eficiente para impulsionar empresas no ecossistema de negócios do Rio Grande do Norte.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contato" 
                 class="px-7 py-3.5 rounded-lg bg-gold text-navy font-bold hover:bg-gold-light transition-colors text-center shadow-lg">
                Solicitar Orçamento
              </a>
              <a href="#servicos" 
                 class="px-7 py-3.5 rounded-lg border border-slate-400/40 text-white hover:bg-white/10 transition-colors text-center font-medium">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                alt="Ambiente de Consultoria Contábil" 
                class="rounded-2xl shadow-2xl object-cover w-full h-105 border border-white/10"
              />

              <div class="absolute -bottom-6 -left-6 bg-white text-navy p-5 rounded-xl shadow-2xl border-l-4 border-gold">
                <span class="block text-2xl sm:text-3xl font-black text-navy">+{{ yearsOfExperience }} Anos</span>
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wide">De Experiência Sólida</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  yearsOfExperience = new Date().getFullYear() - 2017;
}