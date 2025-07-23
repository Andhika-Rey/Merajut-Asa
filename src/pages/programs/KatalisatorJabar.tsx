import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Target, TrendingUp, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';

const KatalisatorJabar: React.FC = () => {
  const regions = [
    { name: 'Bandung Raya', champions: 12, projects: 34, impact: '2,400 jiwa' },
    { name: 'Bogor & Sekitarnya', champions: 8, projects: 21, impact: '1,800 jiwa' },
    { name: 'Bekasi & Depok', champions: 15, projects: 42, impact: '3,200 jiwa' },
    { name: 'Cirebon & Indramayu', champions: 6, projects: 18, impact: '1,500 jiwa' },
    { name: 'Garut & Tasikmalaya', champions: 9, projects: 25, impact: '2,100 jiwa' },
    { name: 'Sukabumi & Cianjur', champions: 7, projects: 19, impact: '1,600 jiwa' }
  ];

  const champions = [
    {
      name: 'Sari Dewi Lestari',
      region: 'Bandung',
      focus: 'Pendidikan Anak',
      impact: '450 anak terbantu',
      projects: 8,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      story: 'Membangun 3 perpustakaan komunitas dan program bimbel gratis'
    },
    {
      name: 'Ahmad Firdaus',
      region: 'Garut',
      focus: 'Pemberdayaan Ekonomi',
      impact: '120 UMKM diberdayakan',
      projects: 12,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      story: 'Mengorganisir koperasi digital untuk petani dan pengrajin lokal'
    },
    {
      name: 'Maya Sari Indah',
      region: 'Bogor',
      focus: 'Kesehatan Masyarakat',
      impact: '800 keluarga terlayani',
      projects: 6,
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200',
      story: 'Menjalankan posyandu keliling dan program gizi balita'
    }
  ];

  const programBenefits = [
    {
      title: 'Pelatihan Kepemimpinan',
      description: 'Workshop intensif selama 3 bulan tentang community organizing dan project management',
      icon: Users
    },
    {
      title: 'Seed Funding',
      description: 'Dana awal Rp 10-50 juta untuk memulai inisiatif perubahan di komunitas',
      icon: Target
    },
    {
      title: 'Mentoring Berkelanjutan',
      description: 'Pendampingan dari praktisi berpengalaman selama 12 bulan penuh',
      icon: TrendingUp
    },
    {
      title: 'Network Nasional',
      description: 'Akses ke jaringan 200+ change agents di seluruh Indonesia',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Katalisator Perubahan
              <span className="text-blue-600 block">Jawa Barat</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Program pemberdayaan masyarakat lokal menjadi agen perubahan di daerah masing-masing 
              dengan dukungan penuh dari komunitas donor dan network nasional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Daftar Jadi Champion
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                Dukung Program Ini
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Peta Dampak Regional</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jejak perubahan nyata yang telah diciptakan oleh para Regional Champions di seluruh Jawa Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-lg text-gray-900">{region.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Regional Champions</span>
                    <span className="font-semibold text-blue-600">{region.champions} orang</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Proyek Aktif</span>
                    <span className="font-semibold text-green-600">{region.projects} proyek</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dampak Langsung</span>
                    <span className="font-semibold text-orange-600">{region.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Champions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Champions Terpilih</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kenali para pemimpin perubahan yang telah menciptakan dampak luar biasa di komunitas mereka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {champions.map((champion, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{champion.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{champion.region}</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fokus Area</span>
                    <span className="font-medium text-gray-900">{champion.focus}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dampak</span>
                    <span className="font-medium text-green-600">{champion.impact}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Proyek</span>
                    <span className="font-medium text-blue-600">{champion.projects} proyek</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm italic mb-6">"{champion.story}"</p>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Lihat Profil Lengkap
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa yang Anda Dapatkan</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Paket lengkap pemberdayaan untuk menjadi agen perubahan yang efektif di komunitas Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Menjadi Regional Champion?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan 57 Regional Champions lainnya yang telah menciptakan perubahan nyata 
            di komunitas mereka. Proses seleksi terbuka setiap 6 bulan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">1</div>
              <h3 className="font-semibold text-white mb-2">Aplikasi Online</h3>
              <p className="text-blue-100 text-sm">Submit proposal inisiatif perubahan Anda</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">2</div>
              <h3 className="font-semibold text-white mb-2">Assessment</h3>
              <p className="text-blue-100 text-sm">Interview dan evaluasi kelayakan proyek</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <h3 className="font-semibold text-white mb-2">Onboarding</h3>
              <p className="text-blue-100 text-sm">Training intensif dan launch proyek</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Daftar Sekarang
            </button>
            <Link
              to="/program"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Kembali ke Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KatalisatorJabar;