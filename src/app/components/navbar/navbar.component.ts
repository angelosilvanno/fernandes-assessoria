import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      [class.bg-white]="isScrolled"
      [class.shadow-md]="isScrolled"
      [class.bg-white/95]="!isScrolled"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#inicio" class="flex flex-col">
          <span class="text-2xl font-black tracking-wider text-navy">FERNANDES</span>
          <span class="text-[9px] tracking-[0.2em] font-semibold text-gold uppercase -mt-1">
            Assessoria Contábil e Administrativa
          </span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#inicio" class="text-sm font-medium text-slate-700 hover:text-gold transition-colors">Início</a>
          <a href="#sobre" class="text-sm font-medium text-slate-700 hover:text-gold transition-colors">Sobre Nós</a>
          <a href="#servicos" class="text-sm font-medium text-slate-700 hover:text-gold transition-colors">Serviços</a>
          <a href="#diferenciais" class="text-sm font-medium text-slate-700 hover:text-gold transition-colors">Diferenciais</a>
          <a href="#contato" class="text-sm font-medium text-slate-700 hover:text-gold transition-colors">Contato</a>
        </nav>

        <!-- CTA Topo (Sem botão de WhatsApp aqui) -->
        <div class="hidden md:block">
          <a href="#contato" 
             class="px-5 py-2.5 rounded-lg bg-navy text-white text-sm font-semibold border border-gold hover:bg-navy-light transition-all shadow-sm">
            Solicitar Orçamento
          </a>
        </div>

        <!-- Botão Menu Mobile -->
        <button (click)="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-navy p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      @if (isMobileMenuOpen) {
        <div class="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <a (click)="isMobileMenuOpen = false" href="#inicio" class="block text-slate-700 font-medium py-2">Início</a>
          <a (click)="isMobileMenuOpen = false" href="#sobre" class="block text-slate-700 font-medium py-2">Sobre Nós</a>
          <a (click)="isMobileMenuOpen = false" href="#servicos" class="block text-slate-700 font-medium py-2">Serviços</a>
          <a (click)="isMobileMenuOpen = false" href="#diferenciais" class="block text-slate-700 font-medium py-2">Diferenciais</a>
          <a (click)="isMobileMenuOpen = false" href="#contato" class="block text-slate-700 font-medium py-2">Contato</a>
          <a (click)="isMobileMenuOpen = false" href="#contato" class="inline-block w-full text-center py-2.5 bg-navy text-white font-medium rounded-lg border border-gold">
            Solicitar Orçamento
          </a>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}