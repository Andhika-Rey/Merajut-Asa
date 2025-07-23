import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Target, TrendingUp, ArrowRight, Star, Quote } from 'lucide-react';

const Beranda: React.FC = () => {
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pengalaman Berdonasi yang Anda Kenal,
              <span className="text-blue-600"> Kini dengan Kekuatan Komunitas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bergabunglah dengan ribuan orang baik di Jawa Barat dalam gerakan gotong royong digital. 
              Mari kita wujudkan perubahan nyata, satu donasi pada satu waktu.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari kampanye berdasarkan kategori, lokasi, atau kata kunci..."
                  className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none shadow-lg"
                />
                <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Cari
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/jelajah"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Mulai Berdonasi Sekarang
              </Link>
              <Link
                to="/program"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Pelajari Program Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 font-medium">Dipercaya oleh organisasi terkemuka</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <p className="text-gray-700 font-medium text-sm">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Campaigns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kampanye Mendesak</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bantuan Anda sangat dibutuhkan untuk kampanye-kampanye berikut yang memerlukan perhatian segera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {urgentCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  {campaign.urgent && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Mendesak
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{campaign.location}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Terkumpul</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-500"
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
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/jelajah"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
            >
              <span>Lihat Semua Kampanye</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Unggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inisiatif khusus yang dirancang untuk memberikan dampak maksimal bagi masyarakat Jawa Barat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Katalisator Perubahan Jabar</h3>
              <p className="text-gray-600 mb-6">
                Program pemberdayaan masyarakat lokal menjadi agen perubahan di daerah masing-masing dengan dukungan penuh dari komunitas donor.
              </p>
              <Link
                to="/program/katalisator-jabar"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Akademi Digital</h3>
              <p className="text-gray-600 mb-6">
                Platform pembelajaran digital gratis untuk meningkatkan literasi teknologi dan keterampilan kerja masyarakat kurang mampu.
              </p>
              <Link
                to="/program/akademi-digital"
                className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Mentorship</h3>
              <p className="text-gray-600 mb-6">
                Menghubungkan para profesional berpengalaman dengan penerima manfaat untuk bimbingan karier dan pengembangan diri jangka panjang.
              </p>
              <Link
                to="/program/mentorship"
                className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                <span>Jadi Mentor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cerita nyata dari para donor dan penerima manfaat yang telah merasakan dampak positif platform kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mari Bergabung dengan Gerakan Perubahan
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Setiap donasi yang Anda berikan adalah investasi untuk masa depan yang lebih baik. 
            Bergabunglah dengan ribuan orang baik lainnya dalam mewujudkan Indonesia yang lebih sejahtera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jelajah"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Mulai Berdonasi
            </Link>
            <Link
              to="/tentang"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;