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
          
          <!-- Coluna de Informações Reais -->
          <div class="lg:col-span-5 space-y-6">
            <span class="text-xs font-bold uppercase tracking-widest text-gold">CANAIS DE ATENDIMENTO</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-navy">Fale Conosco</h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Atendimento com hora marcada ou via canais digitais. Solicite seu orçamento ou tire dúvidas com nossa equipe.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded bg-navy text-gold flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-sm">Endereço Sede</h4>
                  <p class="text-slate-600 text-xs mt-0.5">Rua José Lopes, 26 - Centro</p>
                  <p class="text-slate-500 text-[11px]">Upanema - RN, CEP 59.670-000</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded bg-navy text-gold flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-navy text-sm">Telefone</h4>
                  <p class="text-slate-600 text-xs mt-0.5">(84) 99456-2228</p>
                </div>
              </div>
            </div>

            <!-- Botão WhatsApp com o número oficial real -->
            <div class="pt-4">
              <a 
                href="https://wa.me/5584994562228?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Fernandes%20Assessoria." 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 px-6 py-3.5 bg-whatsapp text-white font-bold rounded-lg shadow-md hover:opacity-95 transition-all text-sm">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.84 2.791.84 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.826-5.768-5.826zm3.435 8.163c-.144.405-.836.774-1.17.822-.312.043-.683.07-1.101-.069-.252-.084-.576-.187-.988-.368-1.751-.77-2.883-2.55-2.97-2.666-.088-.118-.716-.953-.716-1.815 0-.862.451-1.２８６.6１１-１．４６．１６－．１７４．３４９－．２１８．４６５－．２１８．１１７ ０．２３３．００１．３３４．００６．１０７．００５．２５－．０４１．３９１．２９８．１４４．３４９．４９３ １．２０２．５３６ １．２９．０４４．０８８．０７３．１９．０１５．３０５－．０５９．１１８－．０８８．１９２－．１７５．２９３－．０８７．１０３－．１８４．２３－．２６３．３０８－．０８８．０８９－．１８．１８５－．０７７。３６２。１０３。１７７。４５８。７５６。９８３ ₁。₂₂₄。₆₇₅。₆₀₂。₁。₂₄₄。₇₈₈。₁。₄₂₁。₈₇₆。₁。₇₆。₀₈₈。₂。₂₇₉。₀₇₄。₃。₈₃－。₀₄⁴。₁。₀³³z"/>
                </svg>
                Atendimento via WhatsApp
              </a>
            </div>
          </div>

          <!-- Formulário com os 6 serviços atualizados -->
          <div class="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            @if (formSubmitted) {
              <div class="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                <h4 class="font-bold text-green-800 text-lg">Solicitação Enviada com Sucesso!</h4>
                <p class="text-green-700 text-sm mt-1">Nossa equipe retornará no seu WhatsApp em breve.</p>
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
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Empresa / Razão Social</label>
                    <input type="text" formControlName="company" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">E-mail *</label>
                    <input type="email" formControlName="email" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="seuemail@empresa.com" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">WhatsApp / Telefone *</label>
                    <input type="text" formControlName="phone" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="(84) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Serviço de Interesse</label>
                  <select formControlName="service" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white">
                    <option value="">Selecione o serviço desejado...</option>
                    <option value="contabil">Assessoria Contábil e Tributária</option>
                    <option value="gestao">Gestão e Apoio Administrativo (BPO)</option>
                    <option value="treinamento">Treinamento & Desenvolvimento Corporativo</option>
                    <option value="eventos">Organização de Eventos e Estruturas</option>
                    <option value="maquinas">Locação de Máquinas e Equipamentos</option>
                    <option value="mao_de_obra">Locação de Mão de Obra e Transporte</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Mensagem *</label>
                  <textarea rows="4" formControlName="message" class="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy" placeholder="Conte-nos como podemos ajudar..."></textarea>
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
      this.formSubmitted = true;
      this.contactForm.reset();
    }
  }
}