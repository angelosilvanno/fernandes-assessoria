import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-navy text-white pt-16 pb-8 border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <!-- Coluna 1: Dados Legais -->
          <div class="space-y-3">
            <span class="text-xl font-bold tracking-wider">FERNANDES</span>
            <p class="text-xs text-gold uppercase tracking-widest font-semibold">
              Assessoria Contábil e Administrativa
            </p>
            <div class="text-xs text-slate-400 space-y-1 pt-2">
              <p><strong class="text-slate-200">Razão Social:</strong> J DA SILVA FERNANDES-ME</p>
              <p><strong class="text-slate-200">CNPJ:</strong> 27.097.495/0001-75</p>
              <p>Upanema - RN / Brasil</p>
            </div>
          </div>

          <!-- Coluna 2: Links Rápidos -->
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

          <!-- Coluna 3: Especialidades -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Serviços</h4>
            <ul class="space-y-2 text-sm text-slate-300">
              <li>Gestão Contábil</li>
              <li>Planejamento Tributário</li>
              <li>Consultoria Administrativa</li>
              <li>Capacitação Profissional</li>
              <li>Eventos e Equipamentos</li>
            </ul>
          </div>

          <!-- Coluna 4: Atendimento -->
          <div>
            <h4 class="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Atendimento</h4>
            <p class="text-sm text-slate-300 mb-2">Segunda a Sexta: 08:00 às 17:00</p>
            <p class="text-sm text-slate-300">Upanema e Região Oeste Potiguar</p>
          </div>

        </div>

        <!-- Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Fernandes Assessoria Contábil e Administrativa. Todos os direitos reservados.</p>
          <div class="flex gap-4">
            <a href="#" class="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" class="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}