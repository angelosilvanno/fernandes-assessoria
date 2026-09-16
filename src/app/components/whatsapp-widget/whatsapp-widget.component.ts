import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-widget',
  standalone: true,
  template: `
    <div class="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg border border-white/10 pointer-events-none">
        Fale Conosco
      </span>

      <a 
        href="https://wa.me/5584994562228?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Fernandes%20Assessoria." 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        class="w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse hover:animate-none">
        <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.84 2.791.84 3.18 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.826-5.768-5.826zm3.435 8.163c-.144.405-.836.774-1.17.822-.312.043-.683.07-1.101-.069-.252-.084-.576-.187-.988-.368-1.751-.77-2.883-2.55-2.97-2.666-.088-.118-.716-.953-.716-1.815 0-.862.451-1.286.611-1.46.16-.174.349-.218.465-.218.117 0 .233.001.334.006.107.005.25-.041.391.298.144.349.493 1.202.536 1.29.044.088.073.19.015.305-.059.118-.088.192-.175.293-.087.103-.184.23-.263.308-.088.089-.18.185-.077.362.103.177.458.756.983 1.224.675.602 1.244.788 1.421.876.176.088.279.074.383-.044.103-.118.436-.508.552-.682.117-.175.234-.146.393-.088.16.059 1.017.479 1.192.567.175.088.291.132.335.205.044.072.044.422-.1 1.033z"/>
        </svg>
      </a>
    </div>
  `
})
export class WhatsappWidgetComponent {}