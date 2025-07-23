import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X, Heart, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  user: any;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, setIsLoggedIn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jelajah?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/profil');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <Heart className="w-6 h-6 text-white group-hover:animate-pulse" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Merajut Asa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2">
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/jelajah" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2">
              Jelajah Kampanye
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('program')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/program" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2 flex items-center space-x-1">
                <span>Program Unggulan</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'program' ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 py-2 transition-all duration-300 ${
                activeDropdown === 'program' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <Link to="/program/katalisator-jabar" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200">
                  <div className="font-medium">Katalisator Perubahan Jabar</div>
                  <div className="text-sm text-gray-500">Pemberdayaan agen perubahan lokal</div>
                </Link>
                <Link to="/program/akademi-digital" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-green-50/50 transition-all duration-200">
                  <div className="font-medium">Akademi Digital</div>
                  <div className="text-sm text-gray-500">Platform pembelajaran gratis</div>
                </Link>
                <Link to="/program/mentorship" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-orange-50/50 transition-all duration-200">
                  <div className="font-medium">Program Mentorship</div>
                  <div className="text-sm text-gray-500">Bimbingan dari profesional</div>
                </Link>
              </div>
            </div>
            <Link to="/tentang" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2">
              Tentang Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8 group">
            <form onSubmit={handleSearch} className="w-full relative transform group-hover:scale-105 transition-all duration-300">
              <input
                type="text"
                placeholder="Cari kampanye, lokasi, atau kategori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white focus:bg-white shadow-sm hover:shadow-md"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link to="/profil" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline group-hover:translate-x-1 transition-transform duration-300">Profil</span>
              </Link>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Masuk
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-200/50 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}>
          <div className={`space-y-4 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari kampanye..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white/80 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-4">
              <Link
                to="/"
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/jelajah"
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jelajah Kampanye
              </Link>
              <Link
                to="/program"
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Program Unggulan
              </Link>
              <Link
                to="/tentang"
                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;