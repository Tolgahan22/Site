'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: 'Lüks Konut',
      description: 'Lüks daire, villa ve müstakil evlerde uzman danışmanlık ve temsilcilik hizmetleri. Hayalinizdeki lüks konutu bulmanız veya mevcut lüks konutunuzu en iyi fiyata satmanız için özel profesyonel destek.',
      features: [
        'Lüks daire satış ve alım danışmanlığı',
        'Villa ve müstakil lüks evler',
        'Lüks konut projeleri danışmanlığı',
        'Piyasa analizi ve fiyat belirleme',
        'Alıcı ve satıcı temsilciliği',
        'Özel lüks konut portföyü'
      ],
      gradient: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      featured: true
    },
    {
      title: 'Arsa Satış',
      description: 'Arsa alım-satım işlemlerinde ekspertiz ve danışmanlık hizmetleri. Yatırım yapmak istediğiniz arsanın değerlemesinden, hukuki süreçlere kadar kapsamlı destek.',
      features: [
        'Arsa değerleme ve ekspertiz',
        'İmar durumu analizi',
        'Alım-satım süreçleri',
        'Yatırım danışmanlığı',
        'Hukuki süreç takibi'
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: 'Ekspertiz',
      description: 'Gayrimenkul değerleme ve ekspertiz raporları. Profesyonel ekibimiz ile gayrimenkullerinizin gerçek piyasa değerini belirliyoruz.',
      features: [
        'Gayrimenkul değerleme',
        'Ekspertiz raporları',
        'Piyasa analizi',
        'Yatırım değerlendirmesi',
        'Resmi belgeler ve raporlar'
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Kontrat Danışmanlığı',
      description: 'Satış, kiralama ve diğer gayrimenkul sözleşmelerinde hukuki danışmanlık. Sözleşmelerinizin hukuki açıdan güvenli olmasını sağlıyoruz.',
      features: [
        'Satış sözleşmeleri',
        'Kiralama sözleşmeleri',
        'Hukuki danışmanlık',
        'Sözleşme inceleme',
        'Risk analizi ve öneriler'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Temsilcilik',
      description: 'Mal sahibi ve alıcı temsilciliği hizmetleri. Gayrimenkul işlemlerinizde sizin adınıza profesyonel temsilcilik.',
      features: [
        'Mal sahibi temsilciliği',
        'Alıcı temsilciliği',
        'Müzakere süreçleri',
        'İşlem takibi',
        'Profesyonel danışmanlık'
      ],
      gradient: 'from-pink-500 to-rose-500',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="w-full min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Hizmetlerimiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Balıkesir/Körfez bölgesinde <strong className="text-purple-600">10 yılı aşkın deneyimimiz</strong> ile gayrimenkul yatırımlarınızda 
            size en iyi hizmeti sunmak için çalışıyoruz. Tüm süreçlerde profesyonel danışmanlık ve destek sağlıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 w-full">
                {service.featured && (
                  <div className="inline-block mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    ⭐ ÖNE ÇIKAN HİZMET
                  </div>
                )}
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} text-white flex items-center justify-center mr-3 mt-0.5`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className={`relative h-80 rounded-3xl bg-gradient-to-br ${service.gradient} p-1 shadow-2xl`}>
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    <div className={`text-9xl opacity-10 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hizmetlerimizden Yararlanmak İster misiniz?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Bizimle iletişime geçin, size özel çözümler sunalım
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  )
}
