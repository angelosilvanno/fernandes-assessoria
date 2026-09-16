import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="sobre" class="py-24 bg-slate-light border-y border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Imagem da Equipe -->
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
              alt="Equipe Fernandes Assessoria" 
              class="rounded-2xl shadow-xl object-cover w-full h-115"
            />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
          </div>

          <!-- Conteúdo -->
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-gold">NOSSA TRAJETÓRIA</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-navy mt-2 mb-6">Sobre a Fernandes Assessoria</h2>
            
            <p class="text-slate-600 mb-6 leading-relaxed">
              Atuamos como parceiros estratégicos de micro, pequenas e médias empresas, desmistificando a complexidade contábil e fiscal do Brasil. Nosso propósito é simplificar a gestão corporativa para que o gestor foque exclusivamente em faturar e expandir.
            </p>

            <!-- Pilares 2x2 -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span class="block font-bold text-navy">Ética</span>
                <span class="text-xs text-slate-500">Rigor e conformidade legal total.</span>
              </div>
              <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span class="block font-bold text-navy">Transparência</span>
                <span class="text-xs text-slate-500">Comunicação clara e acessível.</span>
              </div>
              <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span class="block font-bold text-navy">Agilidade</span>
                <span class="text-xs text-slate-500">Respostas rápidas às suas demandas.</span>
              </div>
              <div class="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                <span class="block font-bold text-navy">Comprometimento</span>
                <span class="text-xs text-slate-500">Foco no resultado do seu negócio.</span>
              </div>
            </div>

            <a href="#contato" class="inline-flex items-center text-sm font-bold text-navy hover:text-gold transition-colors">
              Conheça nossa empresa 
              <span class="ml-2">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}