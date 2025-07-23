import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Merajut Asa</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Platform filantropi digital terdepan di Indonesia yang menghubungkan donor dengan penerima manfaat 
              melalui teknologi dan semangat gotong royong digital.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@merajutasa.id</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Bandung, Jawa Barat, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/jelajah" className="text-gray-300 hover:text-white transition-colors">Jelajah Kampanye</Link></li>
              <li><Link to="/program" className="text-gray-300 hover:text-white transition-colors">Program Unggulan</Link></li>
              <li><Link to="/tentang" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/profil" className="text-gray-300 hover:text-white transition-colors">Profil Saya</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pusat Bantuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cara Berdonasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Merajut Asa. Semua hak cipta dilindungi.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;