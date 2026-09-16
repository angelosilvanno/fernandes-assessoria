import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contato" class="py-24 bg-slate-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Coluna Esquerda: Informações Institucionais -->
          <div class="lg:col-span-5 space-y-6">
            <span class="text-xs font-bold uppercase tracking-widest text-gold">CANAIS DE ATENDIMENTO</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-navy">Fale Conosco</h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Estamos prontos para atender você presencialmente ou digitalmente. Preencha o formulário ou entre em contato diretamente pelo nosso canal oficial no WhatsApp.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded bg-navy text-gold flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-sm">Localização</h4>
                  <p class="text-slate-600 text-xs mt-0.5">Upanema - RN, Região Oeste Potiguar</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded bg-navy text-gold flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-sm">E-mail</h4>
                  <p class="text-slate-600 text-xs mt-0.5">contato&#64;fernandesassessoria.com.br</p>
                </div>
              </div>
            </div>

            <!-- Botão WhatsApp Direto -->
            <div class="pt-4">
              <a 
                href="https://wa.me/5584999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 px-6 py-3.5 bg-whatsapp text-white font-bold rounded-lg shadow-md hover:opacity-95 transition-all text-sm">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.84 2.791.84 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.826-5.768-5.826zm3.435 8.163c-.144.405-.836.774-1.17.822-.312.043-.683.07-1.101-.069-.252-.084-.576-.187-.988-.368-1.751-.77-2.883-2.55-2.97-2.666-.088-.118-.716-.953-.716-1.815 0-.862.451-1.286.611-1.46.16-.174.349-.218.465-.218.117 0 .233.001.334.006.107.005.25-.041.391.298.144.349.493 1.202.536 1.29.044.088.073.19.015.305-.059.118-.088.192-.175.293-.087.103-.184.23-.263.308-.088.089-.18.185-.077.362.103.177.458.756.983 1.224.675.602 1.244.788 1.421.876.176.088.279.074.383-.044.103-.118.436-.508.552-.682.117-.175.234-.146.393-.088.16.059 1.017.479 1.192.567.175.088.291.132.335.205.044.072.044.422-.1 1.033z"/>
                </svg>
                Atendimento via WhatsApp
              </a>
            </div>
          </div>

          <!-- Coluna Direita: Formulário Reativo -->
          <div class="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            @if (formSubmitted) {
              <div class="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <h4 class="font-bold text-green-800 text-lg">Solicitação Enviada com Sucesso!</h4>
                <p class="text-green-700 text-sm mt-1">Nossa equipe retornará o contato no menor tempo possível.</p>
                <button (click)="formSubmitted = false" class="mt-4 text-xs font-bold text-navy underline">
                  Enviar outra mensagem
                </button>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Nome Completo *</label>
                    <input type="text" formControlName="name" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="Seu nome" />
                    @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                      <span class="text-xs text-red-500">Nome é obrigatório.</span>
                    }
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Empresa</label>
                    <input type="text" formControlName="company" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">E-mail *</label>
                    <input type="email" formControlName="email" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="exemplo@email.com" />
                    @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                      <span class="text-xs text-red-500">E-mail válido obrigatório.</span>
                    }
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Telefone / WhatsApp *</label>
                    <input type="text" formControlName="phone" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="(84) 99999-9999" />
                    @if (contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched) {
                      <span class="text-xs text-red-500">Telefone é obrigatório.</span>
                    }
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Serviço de Interesse</label>
                  <select formControlName="service" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white">
                    <option value="">Selecione uma opção...</option>
                    <option value="contabil">Gestão Contábil e Tributária</option>
                    <option value="administrativo">Consultoria e Apoio Administrativo</option>
                    <option value="treinamento">Treinamento e Desenvolvimento</option>
                    <option value="eventos">Organização de Eventos e Locação</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Mensagem *</label>
                  <textarea rows="4" formControlName="message" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="Conte brevemente sobre o seu projeto ou necessidade..."></textarea>
                  @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                    <span class="text-xs text-red-500">Mensagem é obrigatória.</span>
                  }
                </div>

                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid"
                  class="w-full py-3 bg-navy disabled:opacity-50 text-white font-bold rounded-lg hover:bg-navy-light transition-all shadow-md">
                  Enviar Solicitação
                </button>
              </form>
            }
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Dados do Contato:', this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }
}