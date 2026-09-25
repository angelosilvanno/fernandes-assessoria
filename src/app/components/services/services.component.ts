import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="servicos" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-gold">GESTÃO PÚBLICA E MUNICIPAL</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-navy mt-2">Nossas Especialidades</h2>
          <div class="w-12 h-1 bg-gold mx-auto mt-4 rounded"></div>
          <p class="text-slate-500 text-sm mt-4">
            Assessoria técnica contábil, orçamentária e de recursos humanos para prefeituras, câmaras e secretarias municipais.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- 1. Prestações de Contas (SIOPE e SIOPS) -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Prestações de Contas (SIOPE e SIOPS)</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Alimentação, acompanhamento e transmissão rigorosa dos dados da Educação (SIOPE) e Saúde (SIOPS), evitando bloqueios de receitas municipais.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">Conformidade Legal FNDE / SUS</span>
          </div>

          <!-- 2. RH e Folha de Pagamento do Setor Público -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Folha de Pagamento do Setor Público</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Gestão de pessoal, processamento de folha de pagamento de servidores públicos, rotinas previdenciárias (RPPS/RGPS) e eSocial governamental.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">Gestão de Pessoal e eSocial</span>
          </div>

          <!-- 3. Contabilidade e Planejamento Orçamentário -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Contábil e Orçamentário Municipal</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Planejamento orçamentário dos municípios: elaboração e execução de PPA, LDO e LOA, demonstrativos fiscais e apoio à prestação de contas no TCE.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">PPA • LDO • LOA • TCE</span>
          </div>

          <!-- 4. Planos de Trabalho: Saúde, Educação e Assistência -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Programas e Planos de Trabalho</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Assessoria na estruturação, monitoramento e prestação de contas dos programas e recursos das Secretarias de Saúde, Educação e Assistência Social.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">Fundos Municipais e Convênios</span>
          </div>

          <!-- 5. Gestão de Caixas Escolares -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Prestação de Contas de Caixa Escolar</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Orientação aos conselhos e gestores escolares na aplicação correta, elaboração de processos e prestação de contas de recursos como o PDDE e repasses municipais.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">PDDE e Recursos da Educação</span>
          </div>

          <!-- 6. Consultoria e Apoio Administrativo -->
          <div class="p-8 rounded-xl bg-slate-light border border-slate-200/80 hover:border-gold transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div class="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center text-navy mb-5">
                <svg class="w-6 h-6 stroke-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-navy mb-2">Apoio Administrativo & Capacitação</h3>
              <p class="text-slate-600 leading-relaxed text-sm">
                Treinamento de equipes de secretarias, padronização de rotinas de escritório público, elaboração de pareceres e relatórios gerenciais.
              </p>
            </div>
            <span class="text-[11px] font-semibold text-gold mt-4 uppercase tracking-wider">Capacitação e Eficiência Pública</span>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {}