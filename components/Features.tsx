import React from 'react';
import { Zap, Shield, Globe, Code, MessageSquare, BarChart } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Yüksek Hız",
    description: "Gemini Flash modeli ile milisaniyeler içinde yanıtlar alın. Bekleme süresi yok.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Güvenli Altyapı",
    description: "Verileriniz Google'ın kurumsal güvenlik standartlarıyla korunmaktadır.",
    icon: <Shield className="w-6 h-6 text-green-400" />
  },
  {
    title: "Çoklu Dil Desteği",
    description: "Türkçe dahil 40'tan fazla dilde akıcı iletişim ve çeviri yeteneği.",
    icon: <Globe className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Kod Üretimi",
    description: "Python, JavaScript, React ve daha fazlası için optimize edilmiş kod asistanı.",
    icon: <Code className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Doğal Sohbet",
    description: "İnsan benzeri anlama ve yanıt verme yeteneği ile doğal diyaloglar kurun.",
    icon: <MessageSquare className="w-6 h-6 text-pink-400" />
  },
  {
    title: "Veri Analizi",
    description: "Karmaşık verileri saniyeler içinde anlamlı içgörülere dönüştürün.",
    icon: <BarChart className="w-6 h-6 text-orange-400" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Özellikler</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Her İhtiyaca Uygun Çözümler
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            En son teknoloji yapay zeka modelleri ile projelerinizi bir üst seviyeye taşıyın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/10 group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all"></div>
              
              <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-xl border border-slate-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;