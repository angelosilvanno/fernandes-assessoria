import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <!-- Coluna 1: Dados Oficiais do CNPJ -->
          <div class="space-y-3">
            <span class="text-xl font-bold tracking-wider">FERNANDES</span>
            <p class="text-[10px] tracking-[0.15em] font-semibold text-gold uppercase">
              Assessoria Contábil e Administrativa
            </p>
            <div class="text-xs text-slate-400 space-y-1.5 pt-2">
              <p><strong class="text-slate-200">Razão Social:</strong><br>J. DA S. FERNANDES ASSESSORIA E CONSULTORIA CONTABIL E ADMINISTRATIVA</p>
              <p><strong class="text-slate-200">CNPJ:</strong> 27.097.495/0001-75</p>
              <p><strong class="text-slate-200">Endereço:</strong> Rua José Lopes, 26 - Centro, Upanema/RN</p>
            </div>
          </div>

          <!-- Coluna 2: Navegação -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Navegação</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li><a href="#inicio" class="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" class="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" class="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#contato" class="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <!-- Coluna 3: Especialidades Reais -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Áreas de Atuação</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Assessoria Contábil & Fiscal</li>
              <li>BPO & Gestão Administrativa</li>
              <li>Treinamento Profissional</li>
              <li>Organização de Eventos</li>
              <li>Locação de Estruturas e Equipamentos</li>
              <li>Mão de Obra e Logística</li>
            </ul>
          </div>

          <!-- Coluna 4: Atendimento Oficial -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contato Direto</h4>
            <p class="text-sm text-slate-300 mb-1">Telefone: (84) 99456-2228</p>
            <p class="text-sm text-slate-300 mb-4">Upanema - RN e Região Potiguar</p>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Fernandes Assessoria Contábil e Administrativa. CNPJ 27.097.495/0001-75. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}