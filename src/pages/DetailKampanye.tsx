import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Share2, 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  Clock,
  CheckCircle,
  User,
  ArrowLeft,
  TrendingUp,
  Award,
  MessageCircle
} from 'lucide-react';

const DetailKampanye: React.FC = () => {
  const { id } = useParams();
  const [donationAmount, setDonationAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock data - in real app, this would come from API based on id
  const campaign = {
    id: id || '1',
    title: 'Bantu Pendidikan Anak-Anak di Pelosok Jawa Barat',
    description: 'Mari bersama-sama memberikan akses pendidikan yang layak untuk anak-anak di daerah terpencil Jawa Barat. Setiap donasi Anda akan langsung disalurkan untuk kebutuhan sekolah, buku, dan fasilitas belajar.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    targetAmount: 50000000,
    currentAmount: 32500000,
    donorCount: 1247,
    daysLeft: 23,
    category: 'Pendidikan',
    location: 'Sukabumi, Jawa Barat',
    organizer: 'Yayasan Pendidikan Nusantara',
    verified: true,
    urgency: 'high',
    story: `
      <p>Di tengah pegunungan Sukabumi, terdapat sebuah sekolah dasar yang telah berdiri selama 30 tahun. SD Harapan Bangsa melayani 150 anak dari 5 desa sekitar yang harus menempuh perjalanan hingga 2 jam untuk bisa bersekolah.</p>
      
      <p>Kondisi sekolah saat ini sangat memprihatinkan. Atap bocor di mana-mana, lantai masih tanah, dan hanya memiliki 3 ruang kelas untuk 6 tingkat. Anak-anak harus bergantian menggunakan ruangan, dan saat hujan, kegiatan belajar mengajar terpaksa dihentikan.</p>
      
      <p>Dengan bantuan Anda, kami akan:</p>
      <ul>
        <li>Memperbaiki atap dan lantai sekolah</li>
        <li>Membangun 3 ruang kelas tambahan</li>
        <li>Menyediakan meja, kursi, dan papan tulis</li>
        <li>Melengkapi perpustakaan mini</li>
        <li>Menyediakan alat tulis dan buku pelajaran</li>
      </ul>
      
      <p>Mari bersama-sama wujudkan mimpi anak-anak ini untuk mendapatkan pendidikan yang layak!</p>
    `,
    updates: [
      {
        date: '2024-01-15',
        title: 'Progres Renovasi Minggu Ke-2',
        content: 'Alhamdulillah, perbaikan atap sudah mencapai 70%. Anak-anak sangat antusias melihat perubahan di sekolah mereka.',
        image: 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        date: '2024-01-08',
        title: 'Dimulainya Renovasi Sekolah',
        content: 'Hari ini kami resmi memulai renovasi SD Harapan Bangsa. Terima kasih untuk semua donatur yang telah mempercayai kami.',
        image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    recentDonors: [
      { name: 'Budi Santoso', amount: 500000, time: '2 menit lalu', anonymous: false },
      { name: 'Anonim', amount: 250000, time: '15 menit lalu', anonymous: true },
      { name: 'Siti Nurhaliza', amount: 1000000, time: '1 jam lalu', anonymous: false },
      { name: 'Ahmad Rahman', amount: 300000, time: '2 jam lalu', anonymous: false },
      { name: 'Anonim', amount: 750000, time: '3 jam lalu', anonymous: true }
    ]
  };

  const progressPercentage = (campaign.currentAmount / campaign.targetAmount) * 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000];

  const handleDonate = () => {
    if (!donationAmount) return;
    // In real app, this would redirect to payment gateway
    alert(`Terima kasih! Anda akan diarahkan ke halaman pembayaran untuk donasi ${formatCurrency(parseInt(donationAmount))}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Navigation */}
      <div className={`sticky top-16 z-40 bg-white border-b transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link 
              to="/jelajah-kampanye" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Jelajah Kampanye
            </Link>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-red-600 transition-colors group">
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Simpan
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors group">
                <Share2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Header */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Mendesak
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Terverifikasi
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3">
                    {campaign.category}
                  </span>
                  <MapPin className="w-4 h-4 mr-1" />
                  {campaign.location}
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {campaign.title}
                </h1>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {campaign.description}
                </p>
                
                <div className="flex items-center mt-6 text-sm text-gray-500">
                  <User className="w-4 h-4 mr-2" />
                  <span>Oleh <strong className="text-gray-700">{campaign.organizer}</strong></span>
                  {campaign.verified && (
                    <CheckCircle className="w-4 h-4 ml-2 text-green-500" />
                  )}
                </div>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center group">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                    <Target className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(campaign.currentAmount)}
                  </div>
                  <div className="text-sm text-gray-500">Terkumpul</div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                    <Users className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {campaign.donorCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Donatur</div>
                </div>
                
                <div className="text-center group">
                  <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-100 transition-colors">
                    <Clock className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {campaign.daysLeft}
                  </div>
                  <div className="text-sm text-gray-500">Hari Tersisa</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{progressPercentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500">
                  Target: {formatCurrency(campaign.targetAmount)}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {[
                    { id: 'story', label: 'Cerita', icon: MessageCircle },
                    { id: 'updates', label: 'Update', icon: TrendingUp },
                    { id: 'donors', label: 'Donatur', icon: Users }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-6 py-4 text-sm font-medium transition-all hover:bg-gray-50 ${
                        activeTab === tab.id
                          ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'story' && (
                  <div 
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: campaign.story }}
                  />
                )}
                
                {activeTab === 'updates' && (
                  <div className="space-y-6">
                    {campaign.updates.map((update, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(update.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {update.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{update.content}</p>
                        {update.image && (
                          <img 
                            src={update.image} 
                            alt={update.title}
                            className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'donors' && (
                  <div className="space-y-4">
                    {campaign.recentDonors.map((donor, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{donor.name}</div>
                            <div className="text-sm text-gray-500">{donor.time}</div>
                          </div>
                        </div>
                        <div className="text-lg font-semibold text-green-600">
                          {formatCurrency(donor.amount)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Donation Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Donasi Sekarang</h3>
                
                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all hover:scale-105 ${
                        donationAmount === amount.toString()
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {formatCurrency(amount)}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Atau masukkan nominal lain
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      Rp
                    </span>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                {/* Anonymous Option */}
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                    Donasi sebagai anonim
                  </label>
                </div>
                
                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={!donationAmount}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all hover:scale-105 hover:shadow-lg transform"
                >
                  {donationAmount ? `Donasi ${formatCurrency(parseInt(donationAmount))}` : 'Masukkan Nominal'}
                </button>
                
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Donasi Anda aman dan terenkripsi
                </div>
              </div>
              
              {/* Recent Donors */}
              <div className="bg-white rounded-xl shadow-sm p-6 mt-6 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Donatur Terbaru
                </h4>
                <div className="space-y-3">
                  {campaign.recentDonors.slice(0, 5).map((donor, index) => (
                    <div key={index} className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{donor.name}</div>
                          <div className="text-xs text-gray-500">{donor.time}</div>
                        </div>
                      </div>
                      <div className="font-semibold text-green-600">
                        {formatCurrency(donor.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKampanye;