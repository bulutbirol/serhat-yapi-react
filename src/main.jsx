import React from 'react'
import { createRoot } from 'react-dom/client'
import { Phone, MapPin, ShieldCheck, Ruler, Star, ArrowRight, ExternalLink } from 'lucide-react'
import './index.css'
import hero from './assets/cam-balkon-izmir-4000x9000-1.webp'
import whatsappIcon from './assets/whatsapp.png'
import phoneIcon from './assets/phone-call.png'
import camBalkon from './assets/cam_balkon.jpg'
import pvc from './assets/pvc-sistemleri.jpg'
import aluminyum from './assets/aluminyum_doYrama.png'
import korkuluk from './assets/aluminyum_korkuluk.jpg'
import dusakabin from './assets/duYakabin.jpg'
import proGold from './assets/pro-gold-8mm-cam-balkon.jpg'
import demonte from './assets/demonterenklicambalkon.jpg'
import usta from './assets/serhat.webp'

const phone = '+905373348667'
const cleanPhone = '905373348667'
const armutUrl = 'https://armut.com/hizmetveren/serhat-yapi-cam-bursa-yildirim-aluminyum-cam-bolme_11168074'
const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Merhaba, Serhat Yapı web sitenizden ulaşıyorum. Cam balkon hizmeti hakkında bilgi almak istiyorum.')}`

const services = [
  { title: 'Cam Balkon Sistemleri', text: 'Balkonlar için modern, kullanışlı ve estetik cam kapama çözümleri.', image: camBalkon },
  { title: 'PVC Sistemleri', text: 'Isı ve ses yalıtımı yüksek PVC pencere ve kapı sistemleri.', image: pvc },
  { title: 'Alüminyum Doğrama', text: 'Dayanıklı, uzun ömürlü ve şık alüminyum doğrama uygulamaları.', image: aluminyum },
  { title: 'Alüminyum Korkuluk', text: 'Balkon, merdiven ve teraslar için güvenli korkuluk sistemleri.', image: korkuluk },
  { title: 'Duşakabin', text: 'Banyolara özel ölçüyle şık ve pratik duşakabin çözümleri.', image: dusakabin },
  { title: 'Demonte Cam Balkon', text: 'Renkli ve fonksiyonel demonte cam balkon seçenekleri.', image: demonte }
]

const highlights = [
  { icon: ShieldCheck, title: 'Kaliteli Malzeme', text: 'Dayanıklı profil, cam ve bağlantı ekipmanlarıyla uzun ömürlü kullanım.' },
  { icon: Ruler, title: 'Yerinde Ölçü', text: 'Mekana uygun ölçülendirme ile temiz ve doğru uygulama.' },
  { icon: Star, title: 'Özenli İşçilik', text: 'Montajdan teslimata kadar düzenli, hızlı ve güvenilir süreç.' }
]

function BrandLogo({ className = '', small = false, light = false }) {
  return <span className={`inline-flex flex-col items-center justify-center font-sans leading-none ${className}`}>
    <span className={`${small ? 'text-[1.55rem] sm:text-[1.8rem]' : 'text-[1.75rem]'} font-black`}>
      <span className={light ? 'text-white' : 'text-blue-950'}>SERHAT</span>
      <span className={`mx-2 ${light ? 'text-blue-100' : 'text-black'}`}>YAPI</span>
    </span>
    <span className={`${small ? 'text-[0.62rem] sm:text-[0.72rem]' : 'text-[0.72rem]'} mt-1 font-black ${light ? 'text-blue-100' : 'text-black'}`}>
      CAM BALKON SISTEMLERI
    </span>
  </span>
}

function App() {
  return <main className="min-h-screen overflow-hidden">
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/20 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#anasayfa" className="flex items-center" aria-label="Serhat Yapı anasayfa">
          <BrandLogo small className="h-12 w-44" />
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          <a href="#hizmetler" className="hover:text-blue-900">Hizmetler</a>
          <a href="#galeri" className="hover:text-blue-900">Galeri</a>
          <a href="#armut" className="hover:text-blue-900">Armut</a>
          <a href="#iletisim" className="hover:text-blue-900">İletişim</a>
        </div>
        <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-950/20 hover:bg-blue-900" aria-label="Telefon ile ara">
          <Phone size={17} />
          <span className="hidden sm:inline">Ara</span>
        </a>
      </nav>
    </header>

    <section id="anasayfa" className="relative pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-20" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #60a5fa 0, transparent 35%), radial-gradient(circle at 80% 20%, #ffffff 0, transparent 22%)'}} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="text-white">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">Bursa Cam Balkon Sistemleri</p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Serhat Yapı ile modern, güvenli ve şık yaşam alanları</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Cam balkon, PVC sistemleri, alüminyum doğrama, korkuluk ve duşakabin uygulamalarında ölçüye özel çözümler.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-xl shadow-green-950/20 hover:bg-green-600">
              WhatsApp'tan Yaz <ArrowRight size={18} />
            </a>
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-950 hover:bg-slate-100">
              <Phone size={18} /> {phone}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
          <img src={hero} alt="Serhat Yapı cam balkon uygulaması" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/20" />
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 md:grid-cols-3 md:px-6">
      {highlights.map(({icon: Icon, title, text}) => <div key={title} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/70 ring-1 ring-slate-200">
        <Icon className="mb-4 text-blue-950" size={34} />
        <h2 className="text-xl font-black">{title}</h2>
        <p className="mt-2 text-slate-600">{text}</p>
      </div>)}
    </section>

    <section id="hizmetler" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="font-bold text-blue-900">Hizmetlerimiz</p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">İhtiyaca uygun yapı çözümleri</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => <article key={service.title} className="group overflow-hidden rounded-3xl bg-slate-50 shadow-lg shadow-slate-200/60 ring-1 ring-slate-200">
            <img src={service.image} alt={`Serhat Yapı ${service.title}`} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-6">
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-2 text-slate-600">{service.text}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="galeri" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl bg-blue-950 p-8 text-white">
          <p className="font-bold text-blue-200">Galeri</p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">Uygulama örnekleri</h2>
          <p className="mt-4 text-slate-200">Gönderilen görsellerle cam balkon, alüminyum sistem ve yerinde uygulama görünümü tek sayfada toplandı.</p>
          <img src={usta} alt="Serhat Yapı montaj uygulaması" className="mt-8 rounded-2xl object-cover" loading="lazy" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[proGold, demonte, camBalkon, pvc].map((image, index) => <img key={image} src={image} alt={`Serhat Yapı galeri ${index + 1}`} className="h-full min-h-56 rounded-3xl object-cover shadow-lg shadow-slate-200/70" loading="lazy" />)}
        </div>
      </div>
    </section>

    <section id="armut" className="bg-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-bold text-blue-900">Armut üzerinden ulaşım</p>
              <h2 className="mt-2 text-3xl font-black">Serhat Yapı Armut profilinden de teklif alabilirsiniz</h2>
              <p className="mt-3 text-slate-600">Hizmet veren profiline giderek Armut üzerinden iletişim ve teklif sürecini başlatabilirsiniz.</p>
            </div>
            <a href={armutUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-950 px-6 py-3 font-bold text-white hover:bg-blue-900">
              Armut Profiline Git <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer id="iletisim" className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="py-16">
          <a href="#anasayfa" className="mb-8 inline-flex" aria-label="Serhat Yapı anasayfa">
            <BrandLogo light className="h-14 w-52" />
          </a>
          <p className="font-bold text-blue-200">İletişim</p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">Keşif ve fiyat bilgisi için hemen ulaşın</h2>
          <p className="mt-4 text-slate-200">Telefonla arayabilir, WhatsApp üzerinden fotoğraf göndererek hızlı bilgi alabilirsiniz.</p>
        </div>
        <div className="grid gap-4 py-16">
          <a href={`tel:${phone}`} className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 hover:bg-white/15">
            <img src={phoneIcon} alt="Telefon ikonu" className="h-12 w-12 rounded-2xl bg-white p-2" />
            <span><strong className="block text-lg">Telefon</strong>{phone}</span>
          </a>
          <a href={whatsappUrl} className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 hover:bg-white/15">
            <img src={whatsappIcon} alt="WhatsApp ikonu" className="h-12 w-12 rounded-2xl" />
            <span><strong className="block text-lg">WhatsApp</strong>Mesaj gönder</span>
          </a>
          <a href={armutUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15 hover:bg-white/15">
            <MapPin size={36} />
            <span><strong className="block text-lg">Armut</strong>Hizmet veren profili</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Serhat Yapı Cam Balkon Sistemleri. Tüm hakları saklıdır.</p>
      </div>
    </footer>

    <a href={whatsappUrl} className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl shadow-green-950/30 hover:scale-105" aria-label="WhatsApp mesaj gönder">
      <img src={whatsappIcon} alt="WhatsApp" className="h-14 w-14 rounded-full" />
    </a>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
