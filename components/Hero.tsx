import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-primary-400 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Google Gemini 3.0 ile Güçlendirildi</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Yapay Zeka ile <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
            Sınırları Zorlayın
          </span>
        </h1>

        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          İş akışınızı hızlandırın, yaratıcılığınızı serbest bırakın ve yeni nesil yapay zeka teknolojileriyle geleceği bugün inşa edin.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto group">
            Hemen Başla
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Daha Fazla Bilgi
          </Button>
        </div>

        {/* Stats or trust indicators */}
        <div className="mt-20 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Aktif Kullanıcı', value: '10K+' },
            { label: 'İşlem Hızı', value: '<50ms' },
            { label: 'Güvenilirlik', value: '99.9%' },
            { label: 'Desteklenen Dil', value: '40+' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;