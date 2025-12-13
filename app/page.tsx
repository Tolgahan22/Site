'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: 'Lüks Konut',
      description: 'Lüks daire, villa ve müstakil evlerde uzman danışmanlık ve temsilcilik. Hayalinizdeki lüks konutu bulmanız için özel hizmet.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Arsa Satış',
      description: 'Arsa alım-satım işlemlerinde ekspertiz ve danışmanlık hizmetleri.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Ekspertiz',
      description: 'Gayrimenkul değerleme ve ekspertiz raporları.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Kontrat Danışmanlığı',
      description: 'Satış, kiralama ve diğer gayrimenkul sözleşmelerinde hukuki danışmanlık.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Temsilcilik',
      description: 'Mal sahibi ve alıcı temsilciliği hizmetleri.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl ring-4 ring-purple-500/50">
                  <Image 
                    src="/profile.jpg" 
                    alt="Gamze Yüceer" 
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <div className="mb-6 animate-fade-in">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-200 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  10+ Yıllık Deneyim
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-slide-up">
                Gamze Yüceer
              </h1>
              <p className="text-xl md:text-3xl lg:text-4xl mb-4 text-purple-100 font-light animate-slide-up animation-delay-200">
                Balıkesir/Körfez Bölgesinde
              </p>
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-purple-200/80 max-w-3xl mx-auto lg:mx-0 animate-slide-up animation-delay-400">
                Gayrimenkul Yatırım Danışmanlığı
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in animation-delay-600">
                <Link
                  href="/services"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <span className="relative z-10">Hizmetlerimiz</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-full border-2 border-white/30 font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gayrimenkul yatırımlarınızda size en iyi hizmeti sunmak için çalışıyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  service.featured 
                    ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50' 
                    : 'border-gray-100'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ÖNE ÇIKAN
                  </div>
                )}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-pink-100/20 to-blue-100/20"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Hakkımızda
            </h2>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              <strong className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gamze Yüceer</strong> olarak, Balıkesir/Körfez bölgesinde <strong className="text-purple-600">10 yılı aşkın deneyimimiz</strong> ile 
              müşterilerimize en kaliteli gayrimenkul danışmanlık hizmetlerini sunuyoruz. <strong className="text-purple-600">Lüks konut</strong>, 
              arsa satış, ekspertiz ve kontrat danışmanlığı alanlarında uzman hizmet veriyoruz.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Körfez bölgesindeki tüm ilçelerde mal sahibi ve alıcı temsilciliği konusundaki profesyonel yaklaşımımız ile 
              gayrimenkul yatırımlarınızda güvenilir bir partner olarak hizmet veriyoruz.
            </p>
            <div className="flex justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-pink-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-xl text-purple-200">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-xl text-purple-200">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-xl text-purple-200">Tamamlanan Proje</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Aldığım Eğitimler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sürekli gelişim ve eğitim ile sektördeki en güncel bilgilere sahibim
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dijital Pazarlama Uzmanlığı Eğitimi',
                institution: 'İstanbul Enstitüsü',
                year: 'Şubat 2020',
                certificate: 'Sertifika No: 20200600184',
                icon: '💻'
              },
              {
                title: 'İçerik Editörlüğü Sertifikası',
                institution: 'İstanbul Enstitüsü',
                year: 'Şubat 2020',
                certificate: 'Sertifika No: 20202660135',
                icon: '✍️'
              },
              {
                title: 'SEO Eğitimi Sertifikası',
                institution: 'İstanbul Enstitüsü',
                year: 'Mart 2020',
                certificate: 'Sertifika No: 30503860061',
                icon: '🔍'
              },
              {
                title: 'Satış Yönetimi Eğitimi Sertifikası',
                institution: 'İstanbul Enstitüsü',
                year: 'Mayıs 2020',
                certificate: 'Sertifika No: 50402680243',
                icon: '📊'
              },
              {
                title: 'Yapay Zeka Eğitimi',
                institution: 'Gayrimenkuldiji - Toros Cumhur',
                year: '',
                certificate: '',
                icon: '🤖'
              },
              {
                title: 'Sosyal Medya Eğitimi',
                institution: 'Gayrimenkuldiji - Ekrem Kutsal',
                year: '',
                certificate: '',
                icon: '📱'
              },
              {
                title: 'Gayrimenkul Hukuku Eğitimi',
                institution: 'Kudret Çöçü',
                year: '',
                certificate: '',
                icon: '⚖️'
              },
              {
                title: 'Running Start Eğitimi',
                institution: 'Azerşin Saraç',
                year: '2024',
                certificate: '',
                icon: '🚀'
              },
              {
                title: 'AMP Eğitimi',
                institution: 'Coldwell Banker',
                year: '2019',
                certificate: '',
                icon: '🏢'
              },
              {
                title: 'Focus Eğitimi',
                institution: 'Master Türk',
                year: '2020',
                certificate: '',
                icon: '🎯'
              },
              {
                title: 'Kişisel Markalama Eğitimi',
                institution: 'Gayrimenkuldiji - Ekrem Kutsal',
                year: '2025',
                certificate: '',
                icon: '⭐'
              },
              {
                title: 'İmar Yönetmeliği ve Güncel İmar Planlama Eğitimi',
                institution: 'Akademik Talks - Naime Özcan',
                year: '2024',
                certificate: '',
                icon: '🏗️'
              },
              {
                title: 'Meta Eğitimi',
                institution: 'Gayrimenkuldiji',
                year: '',
                certificate: '',
                icon: '🌐'
              },
              {
                title: 'Power Start Eğitimi',
                institution: 'Remax',
                year: '2019',
                certificate: '',
                icon: '💪'
              },
              {
                title: 'Gayrimenkul Danışmanı Gelişim Programı Eğitimci Eğitimi',
                institution: 'Power Camp',
                year: '',
                certificate: '',
                icon: '🎓'
              },
              {
                title: 'Dijital Pazarlama ve İçerik Yönetimi Okulu',
                institution: '',
                year: '',
                certificate: '',
                icon: '📚'
              },
              {
                title: 'Gayrimenkul Hukuku Eğitimi',
                institution: 'Nova Türkiye Akademi',
                year: '2024',
                certificate: '',
                icon: '⚖️'
              }
            ].map((education, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{education.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{education.title}</h3>
                {education.institution && (
                  <p className="text-gray-600 mb-2">{education.institution}</p>
                )}
                {education.year && (
                  <p className="text-sm text-purple-600 font-semibold mb-1">{education.year}</p>
                )}
                {education.certificate && (
                  <p className="text-xs text-gray-500 font-mono">{education.certificate}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Gayrimenkul Yatırımınız İçin Hazırız
          </h2>
          <p className="text-2xl mb-12 text-gray-600 max-w-3xl mx-auto">
            Profesyonel danışmanlık hizmetlerimizden yararlanmak için bizimle iletişime geçin
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  )
}
