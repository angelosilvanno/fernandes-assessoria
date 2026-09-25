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
              <li><a href="#sobre" class="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" class="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" class="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#contato" class="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <!-- Coluna 3: Áreas de Atuação Públicas Atualizadas -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Áreas de Atuação</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Prestações SIOPE e SIOPS</li>
              <li>Folha de Pagamento do Setor Público</li>
              <li>Contábil e Orçamento Municipal</li>
              <li>Planos de Trabalho (Saúde, Educ. e Assist.)</li>
              <li>Prestação de Caixa Escolar</li>
              <li>Consultoria e Gestão Pública</li>
            </ul>
          </div>

          <!-- Coluna 4: Contato Direto -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contato Direto</h4>
            <p class="text-sm text-slate-300 mb-1">Telefone: (84) 99456-2228</p>
            <p class="text-sm text-slate-300 mb-4">Upanema - RN e Região Potiguar</p>
            <span class="inline-block px-3 py-1 bg-white/10 rounded text-xs text-gold border border-gold/30">
              Fundada em 2017
            </span>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {{ currentYear }} Fernandes Assessoria Contábil e Administrativa. CNPJ 27.097.495/0001-75. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}