import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, Play, CheckCircle, Star, TrendingUp } from 'lucide-react';

const AkademiDigital: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const tracks = [
    { id: 'all', name: 'Semua Track', count: 24 },
    { id: 'tech', name: 'Technology', count: 8 },
    { id: 'business', name: 'Business', count: 6 },
    { id: 'creative', name: 'Creative', count: 5 },
    { id: 'life-skills', name: 'Life Skills', count: 5 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      track: 'tech',
      level: 'Pemula',
      duration: '12 minggu',
      students: 234,
      rating: 4.8,
      instructor: 'Ahmad Rizki',
      description: 'Pelajari HTML, CSS, JavaScript dari dasar hingga mampu membuat website responsif',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 8,
      certificate: true,
      jobPlacement: 85
    },
    {
      id: 2,
      title: 'Digital Marketing Strategy',
      track: 'business',
      level: 'Menengah',
      duration: '8 minggu',
      students: 189,
      rating: 4.9,
      instructor: 'Sari Dewi',
      description: 'Strategi pemasaran digital lengkap untuk UMKM dan startup',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 6,
      certificate: true,
      jobPlacement: 78
    },
    {
      id: 3,
      title: 'Graphic Design with Figma',
      track: 'creative',
      level: 'Pemula',
      duration: '10 minggu',
      students: 156,
      rating: 4.7,
      instructor: 'Maya Indah',
      description: 'Desain grafis modern menggunakan Figma untuk kebutuhan digital',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 7,
      certificate: true,
      jobPlacement: 72
    },
    {
      id: 4,
      title: 'Data Analysis with Excel',
      track: 'tech',
      level: 'Menengah',
      duration: '6 minggu',
      students: 203,
      rating: 4.6,
      instructor: 'Budi Santoso',
      description: 'Analisis data praktis menggunakan Excel untuk pengambilan keputusan bisnis',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 5,
      certificate: true,
      jobPlacement: 68
    },
    {
      id: 5,
      title: 'Financial Literacy',
      track: 'life-skills',
      level: 'Pemula',
      duration: '4 minggu',
      students: 312,
      rating: 4.8,
      instructor: 'Rina Sari',
      description: 'Literasi keuangan dasar untuk pengelolaan keuangan pribadi dan keluarga',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 4,
      certificate: true,
      jobPlacement: 45
    },
    {
      id: 6,
      title: 'Content Creation',
      track: 'creative',
      level: 'Menengah',
      duration: '8 minggu',
      students: 178,
      rating: 4.7,
      instructor: 'Dika Pratama',
      description: 'Membuat konten menarik untuk media sosial dan platform digital',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=400',
      modules: 6,
      certificate: true,
      jobPlacement: 82
    }
  ];

  const stats = [
    { label: 'Total Peserta', value: '1,847', icon: Users },
    { label: 'Kursus Tersedia', value: '24', icon: BookOpen },
    { label: 'Tingkat Kelulusan', value: '89%', icon: Award },
    { label: 'Job Placement', value: '78%', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'Rina Sari',
      course: 'Digital Marketing Strategy',
      job: 'Digital Marketing Specialist',
      company: 'PT Maju Bersama',
      story: 'Setelah menyelesaikan kursus, saya langsung mendapat pekerjaan dengan gaji 8 juta per bulan. Materinya sangat praktis dan applicable.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    },
    {
      name: 'Ahmad Firdaus',
      course: 'Web Development',
      job: 'Freelance Developer',
      company: 'Self-employed',
      story: 'Dari tidak tahu coding sama sekali, sekarang saya bisa membuat website dan earning 15 juta per bulan sebagai freelancer.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5
    }
  ];

  const filteredCourses = selectedTrack === 'all' 
    ? courses 
    : courses.filter(course => course.track === selectedTrack);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Pemula': return 'bg-green-100 text-green-800';
      case 'Menengah': return 'bg-yellow-100 text-yellow-800';
      case 'Lanjutan': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Akademi Digital
              <span className="text-green-600 block">Merajut Asa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Platform pembelajaran digital gratis untuk meningkatkan literasi teknologi dan keterampilan kerja 
              masyarakat kurang mampu. Belajar dari praktisi berpengalaman dengan kurikulum yang disesuaikan industri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg">
                Mulai Belajar Gratis
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-colors">
                Lihat Kurikulum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Katalog Kursus</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilih track pembelajaran yang sesuai dengan minat dan tujuan karier Anda
            </p>
          </div>

          {/* Track Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tracks.map(track => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  selectedTrack === track.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {track.name} ({track.count})
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {course.modules} modul
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} peserta</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      by {course.instructor}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-6">
                    {course.certificate && (
                      <div className="flex items-center space-x-1 text-xs text-green-600">
                        <Award className="w-3 h-3" />
                        <span>Sertifikat</span>
                      </div>
                    )}
                    <div className="text-xs text-blue-600">
                      {course.jobPlacement}% job placement
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-medium hover:bg-green-700 transition-colors">
                    Mulai Belajar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Sukses Alumni</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cerita inspiratif dari para alumni yang berhasil mengubah hidup mereka melalui Akademi Digital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg border border-green-100">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600 font-medium">{testimonial.job}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">Kursus: {testimonial.course}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mulai Perjalanan Belajar Anda
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Bergabunglah dengan 1,800+ peserta lainnya yang telah mengubah hidup mereka melalui 
            pembelajaran digital. Akses gratis, sertifikat resmi, dan job placement program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
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

export default AkademiDigital;