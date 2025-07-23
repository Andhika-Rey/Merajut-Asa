import React, { useState } from 'react';
import { User, Heart, Target, TrendingUp, Award, Calendar, MapPin, Edit, Settings, Bell, Shield } from 'lucide-react';

const ProfilPengguna: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'Sarah Rahmadini',
    email: 'sarah.rahmadini@email.com',
    phone: '+62 812 3456 7890',
    location: 'Bandung, Jawa Barat',
    joinDate: 'Januari 2024',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
    verified: true
  };

  const impactMetrics = [
    {
      label: 'Total Donasi',
      value: 'Rp 2.5 Juta',
      change: '+15%',
      icon: Heart,
      color: 'text-red-600 bg-red-100'
    },
    {
      label: 'Kampanye Didukung',
      value: '12',
      change: '+3',
      icon: Target,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      label: 'Jiwa Terbantu',
      value: '847',
      change: '+124',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-100'
    }
  ];

  const badges = [
    { name: 'Donor Rutin', description: 'Berdonasi 6 bulan berturut-turut', icon: '🏆', earned: true },
    { name: 'Peduli Pendidikan', description: 'Mendukung 5+ kampanye pendidikan', icon: '📚', earned: true },
    { name: 'Champion Supporter', description: 'Donasi total >Rp 1 juta', icon: '⭐', earned: true },
    { name: 'Community Builder', description: 'Mengajak 10+ teman berdonasi', icon: '🤝', earned: false },
    { name: 'Early Adopter', description: 'Bergabung di tahun pertama', icon: '🚀', earned: true },
    { name: 'Loyal Supporter', description: 'Aktif berdonasi >1 tahun', icon: '💎', earned: false }
  ];

  const recentActivities = [
    {
      type: 'donation',
      title: 'Donasi untuk Bantu Korban Banjir Bandung',
      amount: 'Rp 500.000',
      date: '2 hari lalu',
      status: 'completed'
    },
    {
      type: 'badge',
      title: 'Mendapat lencana "Champion Supporter"',
      date: '1 minggu lalu',
      status: 'earned'
    },
    {
      type: 'donation',
      title: 'Donasi untuk Beasiswa Anak Dhuafa',
      amount: 'Rp 250.000',
      date: '2 minggu lalu',
      status: 'completed'
    },
    {
      type: 'share',
      title: 'Membagikan kampanye "Renovasi Puskesmas Garut"',
      date: '3 minggu lalu',
      status: 'shared'
    }
  ];

  const donationHistory = [
    {
      id: 1,
      campaign: 'Bantu Korban Banjir Bandung Selatan',
      amount: 500000,
      date: '15 Januari 2025',
      status: 'Berhasil',
      receipt: 'TRX001234567'
    },
    {
      id: 2,
      campaign: 'Beasiswa Pendidikan Anak Dhuafa Sukabumi',
      amount: 250000,
      date: '8 Januari 2025',
      status: 'Berhasil',
      receipt: 'TRX001234566'
    },
    {
      id: 3,
      campaign: 'Renovasi Fasilitas Kesehatan Garut',
      amount: 1000000,
      date: '28 Desember 2024',
      status: 'Berhasil',
      receipt: 'TRX001234565'
    },
    {
      id: 4,
      campaign: 'Pemberdayaan UMKM Perempuan Cirebon',
      amount: 300000,
      date: '20 Desember 2024',
      status: 'Berhasil',
      receipt: 'TRX001234564'
    },
    {
      id: 5,
      campaign: 'Program Lingkungan Hidup Bogor',
      amount: 150000,
      date: '15 Desember 2024',
      status: 'Berhasil',
      receipt: 'TRX001234563'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'donation': return '💝';
      case 'badge': return '🏆';
      case 'share': return '📤';
      default: return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              {user.verified && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h1>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Bergabung {user.joinDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4 sm:mt-0">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit Profil</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings className="w-4 h-4" />
                    <span>Pengaturan</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600">{metric.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Ringkasan' },
                { id: 'donations', label: 'Riwayat Donasi' },
                { id: 'badges', label: 'Lencana & Pencapaian' },
                { id: 'settings', label: 'Pengaturan' }
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
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Recent Activities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Aktivitas Terbaru</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{activity.title}</h4>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                        {activity.amount && (
                          <div className="text-right">
                            <span className="font-semibold text-green-600">{activity.amount}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Statistik Bulan Ini</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <h4 className="font-semibold text-blue-900 mb-2">Donasi Bulan Ini</h4>
                      <p className="text-2xl font-bold text-blue-600">Rp 750.000</p>
                      <p className="text-sm text-blue-700">+25% dari bulan lalu</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <h4 className="font-semibold text-green-900 mb-2">Kampanye Didukung</h4>
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-sm text-green-700">Semua berhasil tercapai</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'donations' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Riwayat Donasi</h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Unduh Laporan
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Kampanye</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Jumlah</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Tanggal</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationHistory.map((donation) => (
                        <tr key={donation.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="font-medium text-gray-900 line-clamp-2">
                              {donation.campaign}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="font-semibold text-green-600">
                              {formatCurrency(donation.amount)}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{donation.date}</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                              {donation.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              Lihat Kwitansi
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {activeTab === 'badges' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Lencana & Pencapaian</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        badge.earned
                          ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50'
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">{badge.icon}</div>
                        <h4 className={`font-bold mb-2 ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                          {badge.name}
                        </h4>
                        <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                          {badge.description}
                        </p>
                        {badge.earned && (
                          <div className="mt-3">
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              Diraih
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Pengaturan Akun</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">Notifikasi Email</h4>
                          <p className="text-sm text-gray-600">Terima update kampanye dan donasi</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">Donasi Anonim</h4>
                          <p className="text-sm text-gray-600">Sembunyikan nama di daftar donatur</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Informasi Pribadi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                      <input
                        type="text"
                        defaultValue={user.location}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPengguna;