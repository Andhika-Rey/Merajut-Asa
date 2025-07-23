import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CreditCard, Smartphone, Building, CheckCircle, Lock, Eye, EyeOff } from 'lucide-react';

const AlurDonasi: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [donationAmount, setDonationAmount] = useState(searchParams.get('amount') || '');
  const [isAnonymous, setIsAnonymous] = useState(searchParams.get('anonymous') === 'true');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Mock campaign data
  const campaign = {
    id: 1,
    title: 'Bantu Korban Banjir Bandung Selatan',
    organizer: 'Yayasan Peduli Sesama',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const quickAmounts = [50000, 100000, 250000, 500000, 1000000, 2000000];

  const paymentMethods = [
    {
      category: 'E-Wallet',
      methods: [
        { id: 'gopay', name: 'GoPay', logo: '💚', fee: 0 },
        { id: 'ovo', name: 'OVO', logo: '💜', fee: 0 },
        { id: 'dana', name: 'DANA', logo: '💙', fee: 0 },
        { id: 'shopeepay', name: 'ShopeePay', logo: '🧡', fee: 0 }
      ]
    },
    {
      category: 'Bank Transfer',
      methods: [
        { id: 'bca', name: 'BCA', logo: '🏦', fee: 6500 },
        { id: 'mandiri', name: 'Mandiri', logo: '🏦', fee: 6500 },
        { id: 'bni', name: 'BNI', logo: '🏦', fee: 6500 },
        { id: 'bri', name: 'BRI', logo: '🏦', fee: 6500 }
      ]
    },
    {
      category: 'Kartu Kredit/Debit',
      methods: [
        { id: 'visa', name: 'Visa', logo: '💳', fee: 15000 },
        { id: 'mastercard', name: 'Mastercard', logo: '💳', fee: 15000 }
      ]
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getSelectedMethodDetails = () => {
    for (const category of paymentMethods) {
      const method = category.methods.find(m => m.id === selectedMethod);
      if (method) return method;
    }
    return null;
  };

  const getTotalAmount = () => {
    const amount = parseInt(donationAmount) || 0;
    const methodDetails = getSelectedMethodDetails();
    const fee = methodDetails?.fee || 0;
    return amount + fee;
  };

  const handleStepNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  const handleSubmit = () => {
    // Simulate payment processing
    alert('Donasi berhasil diproses! Terima kasih atas kebaikan Anda.');
    navigate('/');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return donationAmount && parseInt(donationAmount) >= 10000;
      case 2:
        return selectedMethod && donorName && donorEmail && donorPhone;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={handleStepBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali</span>
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Alur Donasi</h1>
            <p className="text-gray-600">Proses donasi yang aman dan mudah</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: 'Pilih Nominal' },
              { step: 2, title: 'Metode Pembayaran' },
              { step: 3, title: 'Konfirmasi' }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= item.step
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > item.step ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{item.step}</span>
                  )}
                </div>
                <span className={`ml-3 font-medium ${
                  currentStep >= item.step ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {item.title}
                </span>
                {index < 2 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > item.step ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              {/* Step 1: Choose Amount */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Pilih Nominal Donasi</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Nominal Donasi (Minimum Rp 10.000)
                      </label>
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Masukkan nominal donasi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                        min="10000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Pilihan Cepat
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {quickAmounts.map(amount => (
                          <button
                            key={amount}
                            onClick={() => setDonationAmount(amount.toString())}
                            className={`px-4 py-3 border rounded-lg font-medium transition-colors ${
                              donationAmount === amount.toString()
                                ? 'border-blue-500 bg-blue-50 text-blue-600'
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {amount >= 1000000 ? `${amount / 1000000}jt` : `${amount / 1000}rb`}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Donasi sebagai anonim</span>
                      </label>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan untuk Penerima (Opsional)
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tulis pesan dukungan Anda..."
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Metode Pembayaran</h2>
                  
                  <div className="space-y-6">
                    {/* Donor Information */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4">Informasi Donatur</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon *
                          </label>
                          <input
                            type="tel"
                            value={donorPhone}
                            onChange={(e) => setDonorPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Pilih Metode Pembayaran</h3>
                      <div className="space-y-4">
                        {paymentMethods.map((category) => (
                          <div key={category.category}>
                            <h4 className="font-medium text-gray-700 mb-3">{category.category}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {category.methods.map((method) => (
                                <button
                                  key={method.id}
                                  onClick={() => setSelectedMethod(method.id)}
                                  className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${
                                    selectedMethod === method.id
                                      ? 'border-blue-500 bg-blue-50'
                                      : 'border-gray-300 hover:bg-gray-50'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{method.logo}</span>
                                    <span className="font-medium">{method.name}</span>
                                  </div>
                                  {method.fee > 0 && (
                                    <span className="text-sm text-gray-500">
                                      +{formatCurrency(method.fee)}
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Konfirmasi Donasi</h2>
                  
                  <div className="space-y-6">
                    {/* Donation Summary */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4">Ringkasan Donasi</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nominal Donasi</span>
                          <span className="font-semibold">{formatCurrency(parseInt(donationAmount))}</span>
                        </div>
                        {getSelectedMethodDetails()?.fee > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Biaya Admin</span>
                            <span className="font-semibold">{formatCurrency(getSelectedMethodDetails()?.fee || 0)}</span>
                          </div>
                        )}
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-semibold text-gray-900">Total Pembayaran</span>
                          <span className="font-bold text-lg text-blue-600">{formatCurrency(getTotalAmount())}</span>
                        </div>
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4">Informasi Donatur</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nama</span>
                          <span className="font-medium">{isAnonymous ? 'Hamba Allah' : donorName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email</span>
                          <span className="font-medium">{donorEmail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Telepon</span>
                          <span className="font-medium">{donorPhone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Metode Pembayaran</span>
                          <span className="font-medium">{getSelectedMethodDetails()?.name}</span>
                        </div>
                      </div>
                    </div>

                    {message && (
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-blue-900 mb-2">Pesan Anda</h3>
                        <p className="text-blue-800 italic">"{message}"</p>
                      </div>
                    )}

                    {/* Security Notice */}
                    <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900">Keamanan Terjamin</h4>
                        <p className="text-green-700 text-sm">
                          Transaksi Anda dilindungi dengan enkripsi SSL 256-bit dan sistem keamanan berlapis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleStepBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {currentStep === 1 ? 'Kembali' : 'Sebelumnya'}
                </button>
                
                <button
                  onClick={currentStep === 3 ? handleSubmit : handleStepNext}
                  disabled={!isStepValid()}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {currentStep === 3 ? 'Konfirmasi Donasi' : 'Lanjutkan'}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Campaign Info */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Kampanye yang Didukung</h3>
                <div className="flex space-x-4">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 line-clamp-2 mb-1">
                      {campaign.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      oleh {campaign.organizer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Keamanan & Kepercayaan</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">SSL 256-bit Encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Data Pribadi Terlindungi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Transparansi 100%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Terdaftar & Berizin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlurDonasi;