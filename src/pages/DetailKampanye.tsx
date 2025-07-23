import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Target, Share2, Heart, Clock, ChevronRight, User, CheckCircle } from 'lucide-react';

const DetailKampanye: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cerita');
  const [donationAmount, setDonationAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Mock data - in real app, this would come from API
  const campaign = {
    id: 1,
    title: 'Bantu Korban Banjir Bandung Selatan',
    description: 'Banjir bandang yang terjadi di Bandung Selatan telah menyebabkan ribuan keluarga kehilangan tempat tinggal dan harta benda. Banyak anak-anak yang tidak bisa bersekolah, dan kebutuhan dasar seperti makanan, air bersih, dan pakaian sangat mendesak.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tanggap Darurat',
    location: 'Bandung Selatan, Jawa Barat',
    organizer: 'Yayasan Peduli Sesama',
    progress: 65,
    raised: 850000000,
    target: 1300000000,
    donors: 1234,
    daysLeft: 15,
    urgent: true,
    createdAt: '2025-01-01',
    story: `
      <p class="mb-4">Pada tanggal 28 Desember 2024, banjir bandang melanda kawasan Bandung Selatan dengan debit air yang sangat besar. Dalam hitungan jam, air sungai meluap dan menggenangi pemukiman warga hingga ketinggian 2 meter.</p>
      
      <p class="mb-4">Ribuan keluarga terpaksa mengungsi ke tempat yang lebih tinggi dengan hanya membawa pakaian seadanya. Rumah-rumah hancur, kendaraan hanyut, dan infrastruktur rusak parah. Yang paling memprihatinkan adalah kondisi anak-anak yang kehilangan mainan, buku sekolah, dan perlengkapan belajar.</p>
      
      <p class="mb-4">Saat ini, 1,247 keluarga masih tinggal di pengungsian darurat dengan fasilitas yang sangat terbatas. Kebutuhan mendesak meliputi:</p>
      
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Makanan dan air bersih untuk 4,500 jiwa</li>
        <li>Pakaian layak pakai untuk seluruh keluarga</li>
        <li>Obat-obatan dan vitamin untuk pencegahan penyakit</li>
        <li>Perlengkapan sekolah untuk 800 anak</li>
        <li>Material untuk perbaikan rumah sederhana</li>
      </ul>
      
      <p class="mb-4">Tim relawan kami telah bekerja 24 jam memberikan bantuan darurat, namun kebutuhan masih jauh lebih besar dari kemampuan kami. Dengan dukungan Anda, kami dapat memberikan bantuan yang lebih komprehensif dan membantu mereka kembali normal.</p>
    `,
    updates: [
      {
        date: '15 Januari 2025',
        title: 'Distribusi bantuan tahap ketiga',
        content: 'Hari ini kami berhasil mendistribusikan paket sembako untuk 200 keluarga dan perlengkapan sekolah untuk 150 anak.',
        image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        date: '12 Januari 2025',
        title: 'Pembangunan dapur umum',
        content: 'Dapur umum telah beroperasi dan mampu menyediakan 1,000 porsi makanan hangat setiap hari untuk para pengungsi.',
        image: 'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        date: '8 Januari 2025',
        title: 'Bantuan medis darurat',
        content: 'Tim medis relawan telah memberikan pemeriksaan kesehatan gratis dan obat-obatan untuk 300 pengungsi.',
        image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    budgetBreakdown: [
      { item: 'Bantuan Pangan & Air Bersih', amount: 400000000, percentage: 31 },
      { item: 'Tempat Tinggal Sementara', amount: 350000000, percentage: 27 },
      { item: 'Bantuan Medis & Kesehatan', amount: 200000000, percentage: 15 },
      { item: 'Pendidikan & Perlengkapan Anak', amount: 180000000, percentage: 14 },
      { item: 'Rehabilitasi Infrastruktur', amount: 120000000, percentage: 9 },
      { item: 'Operasional & Administrasi', amount: 50000000, percentage: 4 }
    ]
  };

  const recentDonors = [
    { name: 'Sarah Rahmadini', amount: 500000, time: '2 menit lalu', anonymous: false },
    { name: 'Hamba Allah', amount: 1000000, time: '15 menit lalu', anonymous: true },
    { name: 'Ahmad Firdaus', amount: 250000, time: '1 jam lalu', anonymous: false },
    { name: 'Keluarga Wijaya', amount: 2000000, time: '2 jam lalu', anonymous: false },
    { name: 'Hamba Allah', amount: 100000, time: '3 jam lalu', anonymous: true },
    { name: 'Maya Sari', amount: 750000, time: '4 jam lalu', anonymous: false },
    { name: 'PT Maju Bersama', amount: 5000000, time: '5 jam lalu', anonymous: false },
    { name: 'Hamba Allah', amount: 300000, time: '6 jam lalu', anonymous: true }
  ];

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000, 2000000];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleDonate = () => {
    if (donationAmount && parseInt(donationAmount) >= 10000) {
      navigate(`/donasi/${id}?amount=${donationAmount}&anonymous=${isAnonymous}`);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: campaign.title,
          text: campaign.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Beranda</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/jelajah" className="hover:text-blue-600">Jelajah Kampanye</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{campaign.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Campaign Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                {campaign.urgent && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Mendesak
                  </div>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleShare}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-colors"
                  >
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{campaign.location}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{campaign.daysLeft} hari lagi</span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {campaign.title}
                </h1>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {campaign.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Penyelenggara: {campaign.organizer}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Terverifikasi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'cerita', label: 'Cerita Kampanye' },
                    { id: 'update', label: 'Update Terbaru' },
                    { id: 'rincian', label: 'Rincian Dana' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-6">
                {activeTab === 'cerita' && (
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: campaign.story }} />
                  </div>
                )}
                
                {activeTab === 'update' && (
                  <div className="space-y-6">
                    {campaign.updates.map((update, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{update.title}</h3>
                        {update.image && (
                          <img
                            src={update.image}
                            alt={update.title}
                            className="w-full max-w-md h-48 object-cover rounded-lg mb-3"
                          />
                        )}
                        <p className="text-gray-600 leading-relaxed">{update.content}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'rincian' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Rincian Penggunaan Dana</h3>
                    <div className="space-y-4">
                      {campaign.budgetBreakdown.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-900">{item.item}</span>
                              <span className="text-sm text-gray-600">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="ml-6 text-right">
                            <span className="font-semibold text-gray-900">
                              {formatCurrency(item.amount)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sticky Donation Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {formatCurrency(campaign.raised)}
                  </div>
                  <div className="text-gray-600 mb-4">
                    terkumpul dari {formatCurrency(campaign.target)}
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{campaign.donors.toLocaleString('id-ID')} donatur</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{campaign.daysLeft} hari lagi</span>
                    </div>
                  </div>
                </div>

                {/* Donation Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nominal Donasi (Minimum Rp 10.000)
                    </label>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder="Masukkan nominal"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      min="10000"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {amount >= 1000000 ? `${amount / 1000000}jt` : `${amount / 1000}rb`}
                      </button>
                    ))}
                  </div>
                  
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Donasi sebagai anonim</span>
                  </label>
                  
                  <button
                    onClick={handleDonate}
                    disabled={!donationAmount || parseInt(donationAmount) < 10000}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Donasi Sekarang
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Donasi Anda aman dan terenkripsi SSL 256-bit
                  </p>
                </div>
              </div>

              {/* Recent Donors */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Donatur Terbaru</h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {recentDonors.map((donor, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{donor.name}</p>
                          <p className="text-xs text-gray-500">{donor.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">
                          {formatCurrency(donor.amount)}
                        </p>
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