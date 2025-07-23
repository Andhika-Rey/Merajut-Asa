import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, MessageCircle, Calendar, Star, Award, Filter, Search, MapPin } from 'lucide-react';

const ProgramMentorship: React.FC = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const expertiseAreas = [
    { id: 'all', name: 'Semua Bidang', count: 156 },
    { id: 'business', name: 'Business & Entrepreneurship', count: 42 },
    { id: 'technology', name: 'Technology & IT', count: 38 },
    { id: 'marketing', name: 'Marketing & Sales', count: 28 },
    { id: 'finance', name: 'Finance & Accounting', count: 24 },
    { id: 'creative', name: 'Creative & Design', count: 18 },
    { id: 'education', name: 'Education & Training', count: 6 }
  ];

  const locations = [
    { id: 'all', name: 'Seluruh Jawa Barat' },
    { id: 'bandung', name: 'Bandung' },
    { id: 'bekasi', name: 'Bekasi' },
    { id: 'bogor', name: 'Bogor' },
    { id: 'cirebon', name: 'Cirebon' },
    { id: 'depok', name: 'Depok' }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Rahmadini',
      title: 'Senior Business Consultant',
      company: 'McKinsey & Company',
      expertise: 'business',
      location: 'bandung',
      experience: '15+ tahun',
      mentees: 23,
      rating: 4.9,
      languages: ['Indonesia', 'English'],
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Spesialis strategi bisnis dan transformasi digital dengan pengalaman membantu 100+ perusahaan.',
      specialties: ['Business Strategy', 'Digital Transformation', 'Leadership'],
      availability: 'Weekends',
      sessionPrice: 'Gratis'
    },
    {
      id: 2,
      name: 'Ahmad Firdaus',
      title: 'Senior Software Engineer',
      company: 'Google Indonesia',
      expertise: 'technology',
      location: 'bandung',
      experience: '12+ tahun',
      mentees: 31,
      rating: 4.8,
      languages: ['Indonesia', 'English'],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Full-stack developer dengan expertise di cloud computing dan machine learning.',
      specialties: ['Web Development', 'Cloud Computing', 'Machine Learning'],
      availability: 'Evenings',
      sessionPrice: 'Gratis'
    },
    {
      id: 3,
      name: 'Maya Sari Indah',
      title: 'Marketing Director',
      company: 'Unilever Indonesia',
      expertise: 'marketing',
      location: 'bogor',
      experience: '10+ tahun',
      mentees: 18,
      rating: 4.9,
      languages: ['Indonesia'],
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Expert dalam brand management dan digital marketing dengan track record membangun brand ternama.',
      specialties: ['Brand Management', 'Digital Marketing', 'Consumer Insights'],
      availability: 'Flexible',
      sessionPrice: 'Gratis'
    },
    {
      id: 4,
      name: 'Budi Santoso',
      title: 'CFO',
      company: 'Bank Mandiri',
      expertise: 'finance',
      location: 'bekasi',
      experience: '18+ tahun',
      mentees: 15,
      rating: 4.7,
      languages: ['Indonesia', 'English'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Ahli keuangan korporat dengan pengalaman dalam investment banking dan financial planning.',
      specialties: ['Corporate Finance', 'Investment', 'Financial Planning'],
      availability: 'Weekends',
      sessionPrice: 'Gratis'
    },
    {
      id: 5,
      name: 'Rina Dewi',
      title: 'Creative Director',
      company: 'Hakuhodo Indonesia',
      expertise: 'creative',
      location: 'bandung',
      experience: '8+ tahun',
      mentees: 12,
      rating: 4.8,
      languages: ['Indonesia', 'English'],
      image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Creative professional dengan pengalaman memimpin kampanye untuk brand multinasional.',
      specialties: ['Creative Strategy', 'Art Direction', 'Brand Design'],
      availability: 'Evenings',
      sessionPrice: 'Gratis'
    },
    {
      id: 6,
      name: 'Dika Pratama',
      title: 'Startup Founder',
      company: 'TechStart Indonesia',
      expertise: 'business',
      location: 'cirebon',
      experience: '6+ tahun',
      mentees: 27,
      rating: 4.9,
      languages: ['Indonesia'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Serial entrepreneur yang telah membangun 3 startup sukses di bidang teknologi.',
      specialties: ['Startup Strategy', 'Product Development', 'Fundraising'],
      availability: 'Flexible',
      sessionPrice: 'Gratis'
    }
  ];

  const programStats = [
    { label: 'Total Mentor', value: '156', icon: Users },
    { label: 'Mentee Aktif', value: '423', icon: Target },
    { label: 'Sesi Mentoring', value: '2,847', icon: MessageCircle },
    { label: 'Tingkat Kepuasan', value: '89%', icon: Award }
  ];

  const successStories = [
    {
      mentee: 'Siti Nurhaliza',
      mentor: 'Dr. Sarah Rahmadini',
      achievement: 'Berhasil membuka usaha katering dengan omzet 50 juta/bulan',
      duration: '6 bulan mentoring',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      mentee: 'Rizki Ramadhan',
      mentor: 'Ahmad Firdaus',
      achievement: 'Mendapat pekerjaan sebagai Software Developer di startup unicorn',
      duration: '4 bulan mentoring',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise === selectedExpertise;
    const matchesLocation = selectedLocation === 'all' || mentor.location === selectedLocation;
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesExpertise && matchesLocation && matchesSearch;
  });

  const getExpertiseColor = (expertise: string) => {
    const colors = {
      business: 'bg-blue-100 text-blue-800',
      technology: 'bg-green-100 text-green-800',
      marketing: 'bg-purple-100 text-purple-800',
      finance: 'bg-yellow-100 text-yellow-800',
      creative: 'bg-pink-100 text-pink-800',
      education: 'bg-indigo-100 text-indigo-800'
    };
    return colors[expertise as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Mentorship
              <span className="text-orange-600 block">Merajut Asa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Menghubungkan para profesional berpengalaman dengan penerima manfaat untuk bimbingan karier 
              dan pengembangan diri jangka panjang. Sesi 1-on-1 gratis dengan mentor terpilih.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors shadow-lg">
                Cari Mentor
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors">
                Jadi Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {programStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor Directory */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direktori Mentor</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Temukan mentor yang tepat sesuai dengan bidang keahlian dan tujuan pengembangan Anda
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari mentor berdasarkan nama, perusahaan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>

              {/* Expertise Filter */}
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                {expertiseAreas.map(area => (
                  <option key={area.id} value={area.id}>
                    {area.name} ({area.count})
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                {locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mentor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map(mentor => (
              <div key={mentor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                      <p className="text-gray-600 text-sm">{mentor.title}</p>
                      <p className="text-blue-600 text-sm font-medium">{mentor.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-gray-500 text-sm">({mentor.mentees} mentee)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{locations.find(l => l.id === mentor.location)?.name}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{mentor.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.specialties.slice(0, 2).map((specialty, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getExpertiseColor(mentor.expertise)}`}
                      >
                        {specialty}
                      </span>
                    ))}
                    {mentor.specialties.length > 2 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{mentor.specialties.length - 2} lainnya
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div>
                      <span className="font-medium">Pengalaman:</span>
                      <p>{mentor.experience}</p>
                    </div>
                    <div>
                      <span className="font-medium">Ketersediaan:</span>
                      <p>{mentor.availability}</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors">
                    Hubungi Mentor
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredMentors.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada mentor ditemukan</h3>
              <p className="text-gray-600 mb-6">
                Coba ubah filter pencarian untuk menemukan mentor yang sesuai.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedExpertise('all');
                  setSelectedLocation('all');
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kisah Sukses Mentoring</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transformasi nyata yang terjadi melalui program mentorship kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg border border-orange-100">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.mentee}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{story.mentee}</h4>
                    <p className="text-orange-600 font-medium">Mentee</p>
                    <p className="text-gray-500 text-sm">{story.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{story.achievement}"
                </p>
                
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Mentor: </span>
                  {story.mentor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Kerja Program</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses mentoring yang terstruktur untuk memaksimalkan hasil pembelajaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Pilih Mentor',
                description: 'Browse direktori mentor dan pilih yang sesuai dengan kebutuhan Anda'
              },
              {
                step: '2',
                title: 'Matching Process',
                description: 'Tim kami akan memfasilitasi perkenalan dan memastikan compatibility'
              },
              {
                step: '3',
                title: 'Sesi Mentoring',
                description: 'Lakukan sesi 1-on-1 secara rutin sesuai kesepakatan bersama'
              },
              {
                step: '4',
                title: 'Track Progress',
                description: 'Monitor perkembangan dan capai target yang telah ditetapkan'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Journey Mentoring?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Bergabunglah dengan 400+ mentee yang telah merasakan transformasi melalui program mentorship kami. 
            Gratis, berkualitas, dan berdampak nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Cari Mentor Sekarang
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

export default ProgramMentorship;