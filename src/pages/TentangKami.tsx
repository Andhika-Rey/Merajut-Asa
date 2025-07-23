import React from 'react';
import { Heart, Users, Target, TrendingUp, Award, CheckCircle, Quote, MapPin } from 'lucide-react';

const TentangKami: React.FC = () => {
  const values = [
    {
      title: 'Transparansi',
      description: 'Setiap rupiah yang masuk dapat dilacak hingga ke penerima manfaat dengan sistem pelaporan real-time.',
      icon: CheckCircle,
      color: 'blue'
    },
    {
      title: 'Gotong Royong',
      description: 'Membangun semangat kebersamaan dan saling membantu dalam komunitas digital yang kuat.',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Inovasi',
      description: 'Menggunakan teknologi terdepan untuk menciptakan pengalaman berdonasi yang mudah dan aman.',
      icon: Target,
      color: 'purple'
    },
    {
      title: 'Dampak Berkelanjutan',
      description: 'Fokus pada solusi jangka panjang yang memberdayakan masyarakat untuk mandiri.',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmad Firdaus',
      role: 'Founder & CEO',
      bio: 'Mantan konsultan McKinsey dengan 15+ tahun pengalaman di sektor sosial dan teknologi.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      linkedin: '#'
    },
    {
      name: 'Sarah Rahmadini',
      role: 'Chief Technology Officer',
      bio: 'Ex-Google engineer yang berdedikasi membangun platform teknologi untuk kebaikan sosial.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      linkedin: '#'
    },
    {
      name: 'Maya Sari Indah',
      role: 'Head of Community',
      bio: 'Aktivis sosial dengan jaringan luas di komunitas filantropi Indonesia.',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200',
      linkedin: '#'
    },
    {
      name: 'Budi Santoso',
      role: 'Chief Financial Officer',
      bio: 'Mantan banker dengan expertise dalam financial compliance dan audit.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Pendirian Merajut Asa',
      description: 'Platform diluncurkan dengan fokus pada transparansi dan teknologi'
    },
    {
      year: '2024',
      title: 'Ekspansi ke Seluruh Jabar',
      description: 'Menjangkau 27 kota/kabupaten di Jawa Barat'
    },
    {
      year: '2024',
      title: 'Program Unggulan Diluncurkan',
      description: 'Katalisator Jabar, Akademi Digital, dan Program Mentorship'
    },
    {
      year: '2025',
      title: 'Pencapaian 10 Miliar',
      description: 'Total donasi terkumpul mencapai Rp 10 miliar'
    }
  ];

  const achievements = [
    { label: 'Total Donasi Terkumpul', value: 'Rp 12.5 Miliar', icon: Target },
    { label: 'Jiwa Terbantu', value: '125,000+', icon: Users },
    { label: 'Kampanye Berhasil', value: '2,847', icon: Award },
    { label: 'Tingkat Kepuasan', value: '98%', icon: Heart }
  ];

  const testimonials = [
    {
      name: 'H. Ridwan Kamil',
      role: 'Mantan Gubernur Jawa Barat',
      content: 'Merajut Asa telah menjadi jembatan yang efektif antara masyarakat yang ingin berbagi dengan mereka yang membutuhkan bantuan.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Prof. Dr. Ani Yudhoyono',
      role: 'Filantropis',
      content: 'Transparansi dan akuntabilitas yang ditunjukkan platform ini memberikan kepercayaan penuh kepada para donor.',
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang
              <span className="text-blue-600 block">Merajut Asa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Platform filantropi digital terdepan di Indonesia yang menghubungkan donor dengan penerima manfaat 
              melalui teknologi dan semangat gotong royong digital.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Terdaftar & Berizin</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Transparansi 100%</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Audit Independen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visi & Misi Kami</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Visi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadi platform filantropi digital terdepan di Indonesia yang menciptakan ekosistem 
                    gotong royong berkelanjutan untuk kesejahteraan masyarakat.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Misi</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Membangun platform teknologi yang transparan dan mudah digunakan</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Menghubungkan donor dengan penerima manfaat secara efektif</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Memberdayakan masyarakat melalui program berkelanjutan</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Menciptakan dampak sosial yang terukur dan berkelanjutan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tim Merajut Asa"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap langkah perjalanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const colorClasses = getColorClasses(value.color);
              
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className={`w-16 h-16 ${colorClasses} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dampak nyata yang telah kami ciptakan bersama komunitas donor dan penerima manfaat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.value}</h3>
                  <p className="text-gray-600 font-medium">{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-gray-600">
              Milestone penting dalam membangun platform filantropi digital terdepan
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Para profesional berpengalaman yang berdedikasi untuk menciptakan dampak sosial positif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kata Mereka</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimoni dari para pemimpin dan mitra yang mendukung misi kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <Quote className="w-8 h-8 text-blue-300 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mari Berkolaborasi
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Tertarik untuk bermitra dengan kami? Atau ingin mengetahui lebih lanjut tentang program-program kami? 
            Jangan ragu untuk menghubungi tim kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
              Download Company Profile
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-10 p-4 rounded-xl">
              <MapPin className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white text-sm">Bandung, Jawa Barat</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-xl">
              <Users className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white text-sm">info@merajutasa.id</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-xl">
              <Target className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white text-sm">+62 21 1234 5678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;