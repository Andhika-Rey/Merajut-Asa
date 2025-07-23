import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';

const ProgramUnggulan: React.FC = () => {
  const programs = [
    {
      id: 'katalisator-jabar',
      title: 'Katalisator Perubahan Jabar',
      description: 'Program pemberdayaan masyarakat lokal menjadi agen perubahan di daerah masing-masing dengan dukungan penuh dari komunitas donor.',
      icon: Users,
      color: 'blue',
      stats: {
        participants: 247,
        locations: 18,
        impact: '12,000+ jiwa terbantu'
      },
      features: [
        'Pelatihan kepemimpinan komunitas',
        'Pendampingan program selama 12 bulan',
        'Network nasional agen perubahan',
        'Funding berkelanjutan untuk inisiatif lokal'
      ]
    },
    {
      id: 'akademi-digital',
      title: 'Akademi Digital',
      description: 'Platform pembelajaran digital gratis untuk meningkatkan literasi teknologi dan keterampilan kerja masyarakat kurang mampu.',
      icon: Target,
      color: 'green',
      stats: {
        participants: 1847,
        courses: 24,
        impact: '78% mendapat pekerjaan'
      },
      features: [
        'Kurikulum disesuaikan industri',
        'Sertifikasi resmi',
        'Job placement program',
        'Akses seumur hidup'
      ]
    },
    {
      id: 'mentorship',
      title: 'Program Mentorship',
      description: 'Menghubungkan para profesional berpengalaman dengan penerima manfaat untuk bimbingan karier dan pengembangan diri jangka panjang.',
      icon: TrendingUp,
      color: 'orange',
      stats: {
        mentors: 156,
        mentees: 423,
        impact: '89% tingkat kepuasan'
      },
      features: [
        'Matching berdasarkan minat & keahlian',
        'Sesi mentoring 1-on-1',
        'Workshop berkelompok',
        'Career development planning'
      ]
    }
  ];

  const successStories = [
    {
      name: 'Rina Sari',
      program: 'Akademi Digital',
      story: 'Dari ibu rumah tangga menjadi digital marketer dengan gaji 8 juta/bulan',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      location: 'Bandung'
    },
    {
      name: 'Ahmad Budiman',
      program: 'Katalisator Perubahan',
      story: 'Memimpin program pemberdayaan UMKM yang mengangkat 200 keluarga dari kemiskinan',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      location: 'Garut'
    },
    {
      name: 'Siti Nurhaliza',
      program: 'Program Mentorship',
      story: 'Berhasil membuka usaha katering dengan omzet 50 juta/bulan',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200',
      location: 'Sukabumi'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-300'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200',
          hover: 'hover:border-green-300'
        };
      case 'orange':
        return {
          bg: 'bg-orange-100',
          text: 'text-orange-600',
          border: 'border-orange-200',
          hover: 'hover:border-orange-300'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-300'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Unggulan
              <span className="text-blue-600 block">Merajut Asa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Inisiatif khusus yang dirancang untuk memberikan dampak maksimal dan berkelanjutan 
              bagi masyarakat Jawa Barat melalui pendekatan yang komprehensif dan terukur.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>2,600+ Peserta Aktif</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>27 Kota/Kabupaten</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>85% Tingkat Keberhasilan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tiga Pilar Utama</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Setiap program dirancang untuk saling melengkapi dan menciptakan ekosistem pemberdayaan yang holistik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const colorClasses = getColorClasses(program.color);
              const IconComponent = program.icon;
              
              return (
                <div
                  key={program.id}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colorClasses.border} ${colorClasses.hover} hover:-translate-y-1`}
                >
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {typeof program.stats.participants === 'number' 
                          ? program.stats.participants.toLocaleString('id-ID')
                          : program.stats.participants}
                      </div>
                      <div className="text-xs text-gray-500">Peserta</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {typeof program.stats.locations === 'number'
                          ? program.stats.locations
                          : program.stats.courses || program.stats.mentors}
                      </div>
                      <div className="text-xs text-gray-500">
                        {program.stats.locations ? 'Lokasi' : program.stats.courses ? 'Kursus' : 'Mentor'}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {program.stats.impact.includes('%') ? program.stats.impact.split(' ')[0] : '12k+'}
                      </div>
                      <div className="text-xs text-gray-500">
                        {program.stats.impact.includes('%') ? 'Sukses' : 'Dampak'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/program/${program.id}`}
                    className={`inline-flex items-center space-x-2 ${colorClasses.text} font-semibold hover:underline transition-colors group`}
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Sukses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cerita inspiratif dari para alumni program yang telah mengubah hidup mereka dan komunitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-500">{story.location}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-blue-600 font-medium">{story.program}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Siap Bergabung dengan Program Kami?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Baik sebagai peserta, mentor, atau donor, setiap kontribusi Anda akan menciptakan dampak 
            nyata bagi masyarakat Jawa Barat. Mari bersama-sama membangun masa depan yang lebih baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jelajah"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Dukung dengan Donasi
            </Link>
            <Link
              to="/tentang"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramUnggulan;