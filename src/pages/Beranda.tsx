import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Target, TrendingUp, ArrowRight, Star, Quote, Sparkles, ChevronRight } from 'lucide-react';

const Beranda: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState({});
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const impactMetrics = [
    { label: 'Total Donasi Terkumpul', value: 'Rp 12.5 Miliar', icon: Target },
    { label: 'Jiwa Terbantu', value: '125,000+', icon: Users },
    { label: 'Kampanye Aktif', value: '2,847', icon: TrendingUp },
  ];

  const urgentCampaigns = [
    {
      id: 1,
      title: 'Bantu Korban Banjir Bandung',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 65,
      raised: 850000000,
      target: 1300000000,
      donors: 1234,
      location: 'Bandung, Jawa Barat',
      urgent: true
    },
    {
      id: 2,
      title: 'Pendidikan Anak Dhuafa Sukabumi',
      image: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 45,
      raised: 450000000,
      target: 1000000000,
      donors: 892,
      location: 'Sukabumi, Jawa Barat',
      urgent: false
    },
    {
      id: 3,
      title: 'Rehab Fasilitas Kesehatan Garut',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 80,
      raised: 1600000000,
      target: 2000000000,
      donors: 2156,
      location: 'Garut, Jawa Barat',
      urgent: true
    },
    {
      id: 4,
      title: 'Pemberdayaan UMKM Cirebon',
      image: 'https://images.pexels.com/photos/5900273/pexels-photo-5900273.jpeg?auto=compress&cs=tinysrgb&w=400',
      progress: 30,
      raised: 300000000,
      target: 1000000000,
      donors: 567,
      location: 'Cirebon, Jawa Barat',
      urgent: false
    }
  ];

  const partners = [
    'PT Bank Mandiri', 'PT Telkom Indonesia', 'Pemprov Jabar', 
    'BAZNAS', 'Rumah Zakat', 'Dompet Dhuafa'
  ];

  const testimonials = [
    {
      name: 'Sarah Rahmadini',
      role: 'Donor Rutin',
      content: 'Platform ini membuat saya yakin bahwa setiap rupiah yang saya donasikan benar-benar sampai ke yang membutuhkan. Transparansi laporan yang luar biasa!',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'Ahmad Firdaus',
      role: 'Penerima Manfaat',
      content: 'Terima kasih Merajut Asa! Bantuan pendidikan untuk anak saya sangat membantu. Sekarang dia bisa melanjutkan sekolah dengan tenang.',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-green-100/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-600 animate-bounce" />
              <span className="mx-3 text-blue-600 font-medium">Platform Filantropi Digital Terdepan</span>
              <Sparkles className="w-8 h-8 text-green-600 animate-bounce delay-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Pengalaman Berdonasi yang Anda Kenal,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate-gradient"> Kini dengan Kekuatan Komunitas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-200">
              Bergabunglah dengan ribuan orang baik di Jawa Barat dalam gerakan gotong royong digital. 
              Mari kita wujudkan perubahan nyata, satu donasi pada satu waktu.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Cari kampanye berdasarkan kategori, lokasi, atau kata kunci..."
                  className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
                <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Cari
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-400">
              <Link
                to="/jelajah"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Mulai Berdonasi Sekarang</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link
                to="/program"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Pelajari Program Kami</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white" id="metrics" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible.metrics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {impactMetrics.map((metric, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{metric.value}</h3>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Partners */}
      <section className="py-12 bg-gray-50" id="partners" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-gray-600 mb-8 font-medium transition-all duration-1000 ${
            isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>Dipercaya oleh organisasi terkemuka</p>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center transition-all duration-1000 delay-300 ${
            isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <p className="text-gray-700 font-medium text-sm">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Campaigns */}
      <section className="py-20 bg-white" id="campaigns" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible.campaigns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kampanye Mendesak</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bantuan Anda sangat dibutuhkan untuk kampanye-kampanye berikut yang memerlukan perhatian segera
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 delay-300 ${
            isVisible.campaigns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {urgentCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 hover:scale-105 group">
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {campaign.urgent && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      Mendesak
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{campaign.location}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Terkumpul</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="font-semibold text-gray-900">{formatCurrency(campaign.raised)}</p>
                    <p>dari {formatCurrency(campaign.target)}</p>
                    <p>{campaign.donors.toLocaleString('id-ID')} donatur</p>
                  </div>
                  
                  <Link
                    to={`/kampanye/${campaign.id}`}
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-500 ${
            isVisible.campaigns ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <Link
              to="/jelajah"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-all duration-300 group"
            >
              <span>Lihat Semua Kampanye</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50" id="programs" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible.programs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Unggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inisiatif khusus yang dirancang untuk memberikan dampak maksimal bagi masyarakat Jawa Barat
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.programs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Katalisator Perubahan Jabar</h3>
              <p className="text-gray-600 mb-6">
                Program pemberdayaan masyarakat lokal menjadi agen perubahan di daerah masing-masing dengan dukungan penuh dari komunitas donor.
              </p>
              <Link
                to="/program/katalisator-jabar"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Akademi Digital</h3>
              <p className="text-gray-600 mb-6">
                Platform pembelajaran digital gratis untuk meningkatkan literasi teknologi dan keterampilan kerja masyarakat kurang mampu.
              </p>
              <Link
                to="/program/akademi-digital"
                className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-all duration-300 group-hover:translate-x-1"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Program Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Menghubungkan para profesional berpengalaman dengan penerima manfaat untuk bimbingan karier dan pengembangan diri jangka panjang.
              </p>
              <Link
                to="/program/mentorship"
                className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-all duration-300 group-hover:translate-x-1"
              >
                <span>Jadi Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cerita nyata dari para donor dan penerima manfaat yang telah merasakan dampak positif platform kami
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 to-green-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Mari Bergabung dengan Gerakan Perubahan
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up delay-200">
            Setiap donasi yang Anda berikan adalah investasi untuk masa depan yang lebih baik. 
            Bergabunglah dengan ribuan orang baik lainnya dalam mewujudkan Indonesia yang lebih sejahtera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link
              to="/jelajah"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Mulai Berdonasi</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              to="/tentang"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Pelajari Lebih Lanjut</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes gradient {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animate-gradient {
    animation: gradient 3s ease infinite;
  }
  
  .delay-200 {
    animation-delay: 200ms;
  }
  
  .delay-300 {
    animation-delay: 300ms;
  }
  
  .delay-400 {
    animation-delay: 400ms;
  }
  
  .delay-500 {
    animation-delay: 500ms;
  }
`;
document.head.appendChild(style);

export default Beranda;