import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, Calendar, Users, Target, ChevronDown } from 'lucide-react';

const JelajahKampanye: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('terbaru');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'Semua Kategori' },
    { id: 'pendidikan', name: 'Pendidikan' },
    { id: 'kesehatan', name: 'Kesehatan' },
    { id: 'bencana', name: 'Tanggap Darurat' },
    { id: 'ekonomi', name: 'Pemberdayaan Ekonomi' },
    { id: 'sosial', name: 'Kesejahteraan Sosial' },
    { id: 'lingkungan', name: 'Lingkungan' }
  ];

  const locations = [
    { id: 'all', name: 'Seluruh Jawa Barat' },
    { id: 'bandung', name: 'Bandung' },
    { id: 'bekasi', name: 'Bekasi' },
    { id: 'bogor', name: 'Bogor' },
    { id: 'cirebon', name: 'Cirebon' },
    { id: 'depok', name: 'Depok' },
    { id: 'garut', name: 'Garut' },
    { id: 'sukabumi', name: 'Sukabumi' },
    { id: 'tasikmalaya', name: 'Tasikmalaya' }
  ];

  const statusOptions = [
    { id: 'all', name: 'Semua Status' },
    { id: 'active', name: 'Sedang Berjalan' },
    { id: 'urgent', name: 'Mendesak' },
    { id: 'almost', name: 'Hampir Tercapai' }
  ];

  const sortOptions = [
    { id: 'terbaru', name: 'Terbaru' },
    { id: 'terlama', name: 'Terlama' },
    { id: 'target-tinggi', name: 'Target Tertinggi' },
    { id: 'target-rendah', name: 'Target Terendah' },
    { id: 'progress-tinggi', name: 'Progress Tertinggi' },
    { id: 'donatur-banyak', name: 'Donatur Terbanyak' }
  ];

  const campaigns = [
    {
      id: 1,
      title: 'Bantu Korban Banjir Bandung Selatan',
      description: 'Ribuan keluarga kehilangan tempat tinggal akibat banjir bandang. Bantuan logistik dan tempat tinggal sementara sangat dibutuhkan.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'bencana',
      location: 'bandung',
      progress: 65,
      raised: 850000000,
      target: 1300000000,
      donors: 1234,
      daysLeft: 15,
      urgent: true,
      createdAt: '2025-01-01'
    },
    {
      id: 2,
      title: 'Beasiswa Pendidikan Anak Dhuafa Sukabumi',
      description: 'Program beasiswa untuk 200 anak kurang mampu di Sukabumi agar dapat melanjutkan pendidikan ke jenjang yang lebih tinggi.',
      image: 'https://images.pexels.com/photos/8422403/pexels-photo-8422403.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'pendidikan',
      location: 'sukabumi',
      progress: 45,
      raised: 450000000,
      target: 1000000000,
      donors: 892,
      daysLeft: 45,
      urgent: false,
      createdAt: '2024-12-15'
    },
    {
      id: 3,
      title: 'Renovasi Fasilitas Kesehatan Garut',
      description: 'Puskesmas di daerah terpencil Garut membutuhkan renovasi dan peralatan medis untuk melayani 10,000 penduduk.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'kesehatan',
      location: 'garut',
      progress: 80,
      raised: 1600000000,
      target: 2000000000,
      donors: 2156,
      daysLeft: 20,
      urgent: false,
      createdAt: '2024-11-20'
    },
    {
      id: 4,
      title: 'Pemberdayaan UMKM Perempuan Cirebon',
      description: 'Program pelatihan dan modal usaha untuk 100 perempuan kepala keluarga agar dapat memulai usaha mandiri.',
      image: 'https://images.pexels.com/photos/5900273/pexels-photo-5900273.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'ekonomi',
      location: 'cirebon',
      progress: 30,
      raised: 300000000,
      target: 1000000000,
      donors: 567,
      daysLeft: 60,
      urgent: false,
      createdAt: '2024-12-01'
    },
    {
      id: 5,
      title: 'Bantuan Operasi Jantung Anak',
      description: 'Rafi, 8 tahun, membutuhkan operasi jantung segera. Keluarga tidak mampu membiayai operasi yang mencapai ratusan juta.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'kesehatan',
      location: 'bandung',
      progress: 25,
      raised: 75000000,
      target: 300000000,
      donors: 234,
      daysLeft: 10,
      urgent: true,
      createdAt: '2025-01-10'
    },
    {
      id: 6,
      title: 'Program Lingkungan Hidup Bogor',
      description: 'Inisiatif penanaman 10,000 pohon dan pembersihan sungai untuk menjaga kelestarian lingkungan Bogor.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'lingkungan',
      location: 'bogor',
      progress: 55,
      raised: 275000000,
      target: 500000000,
      donors: 678,
      daysLeft: 30,
      urgent: false,
      createdAt: '2024-12-20'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || campaign.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || campaign.location === selectedLocation;
    const matchesStatus = selectedStatus === 'all' || 
                         (selectedStatus === 'urgent' && campaign.urgent) ||
                         (selectedStatus === 'active' && !campaign.urgent) ||
                         (selectedStatus === 'almost' && campaign.progress >= 80);
    
    return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
  });

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case 'terbaru':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'terlama':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case 'target-tinggi':
        return b.target - a.target;
      case 'target-rendah':
        return a.target - b.target;
      case 'progress-tinggi':
        return b.progress - a.progress;
      case 'donatur-banyak':
        return b.donors - a.donors;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Jelajah Kampanye</h1>
          <p className="text-gray-600 mb-6">
            Temukan dan dukung kampanye yang sesuai dengan passion Anda. Setiap donasi membuat perbedaan.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari kampanye berdasarkan judul, deskripsi, atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h3 className="text-lg font-semibold text-gray-900">Filter</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-1 text-blue-600"
                >
                  <Filter className="w-4 h-4" />
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Kategori</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Lokasi</h4>
                  <div className="space-y-2">
                    {locations.map(location => (
                      <label key={location.id} className="flex items-center">
                        <input
                          type="radio"
                          name="location"
                          value={location.id}
                          checked={selectedLocation === location.id}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{location.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Status</h4>
                  <div className="space-y-2">
                    {statusOptions.map(status => (
                      <label key={status.id} className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          value={status.id}
                          checked={selectedStatus === status.id}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{status.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort & Results Count */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-gray-600">
                  Menampilkan <span className="font-semibold">{sortedCampaigns.length}</span> kampanye
                </p>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">Urutkan:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Campaign Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedCampaigns.map(campaign => (
                <div key={campaign.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden group hover:-translate-y-2 hover:scale-105">
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
                    <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm group-hover:bg-opacity-70 transition-all duration-300">
                      {campaign.daysLeft} hari lagi
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{locations.find(l => l.id === campaign.location)?.name}</span>
                      <span>•</span>
                      <span>{categories.find(c => c.id === campaign.category)?.name}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {campaign.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {campaign.description}
                    </p>
                    
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
                    
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div>
                        <p className="font-semibold text-gray-900">{formatCurrency(campaign.raised)}</p>
                        <p>dari {formatCurrency(campaign.target)}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{campaign.donors.toLocaleString('id-ID')} donatur</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/kampanye/${campaign.id}`}
                      className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Lihat Detail & Donasi
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedCampaigns.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center animate-fade-in-up">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada kampanye ditemukan</h3>
                <p className="text-gray-600 mb-6">
                  Coba ubah filter pencarian atau kata kunci untuk menemukan kampanye yang sesuai.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedLocation('all');
                    setSelectedStatus('all');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JelajahKampanye;