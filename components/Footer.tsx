import React from 'react';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-primary-500" />
              <span className="text-xl font-bold text-white">GeminiPortal</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Yapay zeka teknolojileri ile geleceği şekillendiren, modern ve ölçeklenebilir çözümler sunuyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Entegrasyonlar</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">SSS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2024 GeminiPortal. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">Gizlilik Politikası</a>
            <a href="#" className="hover:text-slate-400">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;