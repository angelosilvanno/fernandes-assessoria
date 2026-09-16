import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="servicos" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-gold">SOLUÇÕES COMPLETAS</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-navy mt-2">Nossos Serviços Especializados</h2>
          <div class="w-12 h-1 bg-gold mx-auto mt-4 rounded"></div>
          <p class="text-slate-500 text-sm mt-4">
            Atuação integrada para atender as demandas administrativas, fiscais e operacionais da sua organização.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- 1. Contábil e Tributário -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Assessoria Contábil e Tributária</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Escrituração contábil, auditoria, apuração fiscal e conformidade tributária para maximizar os resultados do seu negócio.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 69.20-6</span>
          </div>

          <!-- 2. BPO e Consultoria Administrativa -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Gestão e Apoio Administrativo</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Serviços combinados de escritório, consultoria empresarial estratégica e preparação especializada de documentos.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 82.11-3 / 70.20-4</span>
          </div>

          <!-- 3. Treinamento e Educação -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Treinamento & Desenvolvimento</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Capacitação profissional, desenvolvimento gerencial in-company e serviços de suporte à educação corporativa.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 85.99-6 / 85.50-3</span>
          </div>

          <!-- 4. Eventos e Estruturas -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Organização de Eventos e Feiras</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Planejamento de congressos, exposições, confraternizações e locação de palcos e coberturas temporárias.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 82.30-0 / 77.39-0</span>
          </div>

          <!-- 5. Locação de Equipamentos -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Locação de Máquinas e Equipamentos</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Aluguel de computadores, impressoras e maquinários comerciais e industriais sob medida para sua operação.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 77.33-1 / 77.39-0</span>
          </div>

          <!-- 6. Mão de Obra e Transporte -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Mão de Obra & Transporte de Apoio</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Locação de mão de obra temporária e transporte de passageiros com veículos e motoristas especializados.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-slate-400 mt-4 uppercase tracking-wider">CNAE 78.20-5 / 49.23-0</span>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}