'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      title: 'Güvenilirlik',
      description: 'Müşterilerimizle kurduğumuz güven ilişkisi en önemli değerimizdir.',
      icon: '🤝',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Profesyonellik',
      description: 'Sektördeki deneyimimiz ve uzmanlığımızla en kaliteli hizmeti sunuyoruz.',
      icon: '⭐',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Şeffaflık',
      description: 'Tüm süreçlerde açık ve şeffaf bir iletişim kuruyoruz.',
      icon: '💎',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizin ihtiyaçlarına özel çözümler geliştiriyoruz.',
      icon: '🎯',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="w-full min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Hakkımızda
          </h1>
        </div>

        {/* Main Content */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Gamze Yüceer - Balıkesir/Körfez Gayrimenkul Danışmanlığı
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10 yılı aşkın deneyimimiz</strong> ile Balıkesir/Körfez bölgesinde müşterilerimize en kaliteli 
            gayrimenkul danışmanlık hizmetlerini sunuyoruz. Lüks konut, arsa satış, 
            ekspertiz ve kontrat danışmanlığı alanlarında uzman hizmet veriyoruz.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Körfez bölgesindeki tüm ilçelerde mal sahibi ve alıcı 
            temsilciliği konusundaki profesyonel yaklaşımımız ile gayrimenkul yatırımlarınızda güvenilir bir partner 
            olarak hizmet veriyoruz.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bölgenin coğrafi, ekonomik ve sosyal yapısını yakından tanıyan, yerel piyasa bilgisine sahip deneyimli 
            bir emlak danışmanı olarak, yatırım kararlarınızda size en doğru rehberliği sağlıyoruz.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold mb-4">Misyonumuz</h3>
            <p className="text-lg leading-relaxed text-purple-50">
              Müşterilerimize gayrimenkul yatırımlarında en doğru kararları vermeleri için 
              profesyonel danışmanlık hizmeti sunmak ve sektörde güvenilir bir marka olmak.
            </p>
          </div>
          <div className={`bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl p-8 text-white shadow-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold mb-4">Vizyonumuz</h3>
            <p className="text-lg leading-relaxed text-pink-50">
              Gayrimenkul sektöründe öncü bir danışmanlık firması olarak, müşterilerimizin 
              yatırım hedeflerine ulaşmalarında en önemli partner olmak.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.gradient} text-white mb-4`}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Neden Bizi Seçmelisiniz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg"><strong>10 yılı aşkın deneyim</strong> ve sektör bilgisi</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Balıkesir/Körfez bölgesinde derin yerel piyasa bilgisi</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Profesyonel ve güvenilir hizmet anlayışı</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Kapsamlı danışmanlık hizmetleri</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Müşteri memnuniyeti odaklı yaklaşım</span>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-lg">Şeffaf ve adil fiyatlandırma</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  )
}
