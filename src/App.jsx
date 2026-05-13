import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { products } from './data';

// --- ПЕРЕКЛАДИ (прямо тут, щоб нічого не загубилося) ---
const translations = {
  UA: {
    beer: "Пиво",
    spirits: "Міцне",
    about: "Про нас",
    add_to_cart: "Додати в кошик",
    cart: "Кошик",
    close: "Закрити",
    total: "Сума",
    checkout: "Оформити",
    heritage: "Czech Heritage",
    explore: "Дивитись колекцію",
    slogan: "Традиційні чеські напої, що пройшли крізь віки. Відкрийте для себе справжній смак Чехії."
  },
  EN: {
    beer: "Beer",
    spirits: "Spirits",
    about: "About Us",
    add_to_cart: "Add to cart",
    cart: "Cart",
    close: "Close",
    total: "Total",
    checkout: "Checkout",
    heritage: "Czech Heritage",
    explore: "Explore Collection",
    slogan: "Traditional Czech drinks through the ages. Discover the true taste of Czechia."
  }
};

// --- ДОПОМІЖНІ КОМПОНЕНТИ ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- КОШИК ---
const CartDrawer = ({ isOpen, onClose, cart, setCart, t }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full md:w-[450px] bg-[#0d0d0d] h-full p-10 flex flex-col shadow-2xl border-l border-white/5">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif italic text-white">{t.cart}</h2>
          <button onClick={onClose} className="text-amber-500 text-xs font-black uppercase tracking-widest hover:text-white transition-colors">{t.close} ✕</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          {cart.length === 0 ? (
            <p className="text-stone-600 italic text-center pt-20">...</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-6 items-center border-b border-white/5 pb-6">
                <div className="w-16 h-20 flex items-center justify-center bg-white/5 rounded-xl">
                  <img src={item.img} className="max-h-[80%] object-contain" alt="" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] font-black uppercase text-stone-300">{item.name}</h4>
                  <p className="text-amber-500 font-serif">{item.price} ₴</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button onClick={() => setCart(cart.map(i => i.id === item.id ? {...i, quantity: Math.max(1, i.quantity - 1)} : i))} className="text-white bg-white/5 w-6 h-6 rounded-full">-</button>
                    <span className="text-xs">{item.quantity}</span>
                    <button onClick={() => setCart(cart.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i))} className="text-white bg-white/5 w-6 h-6 rounded-full">+</button>
                  </div>
                </div>
                <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-stone-600 hover:text-red-500 transition-colors">✕</button>
              </div>
            ))
          )}
        </div>
        <div className="pt-10 border-t border-white/10 mt-auto">
          <div className="flex justify-between items-end mb-6">
            <span className="text-stone-500 uppercase text-[10px] font-black">{t.total}:</span>
            <span className="text-4xl font-serif text-white">{total} ₴</span>
          </div>
          <button className="w-full bg-amber-600 text-white py-6 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 transition-all">{t.checkout}</button>
        </div>
      </div>
    </div>
  );
};

// --- СТОРІНКА ПРО НАС ---
const AboutPage = ({ t, lang }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-white pt-48 pb-20 px-6">
    <div className="max-w-4xl mx-auto space-y-12">
      <h2 className="text-7xl font-serif italic tracking-tighter text-center">{t.about}</h2>
      <div className="bg-[#111] p-12 rounded-[60px] border border-white/5 space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px]"></div>
        <p className="text-2xl font-serif italic leading-relaxed text-stone-300 text-center">
          {lang === 'UA' 
            ? '"Ми розпочали свій шлях із простої ідеї: привезти справжню атмосферу затишних празьких вуличок прямо до вас."'
            : '"We started our journey with a simple idea: to bring the authentic atmosphere of cozy Prague streets directly to you."'
          }
        </p>
        <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
          <div className="space-y-4">
            <strong className="text-amber-500 uppercase text-[10px] font-black tracking-widest block">
              {lang === 'UA' ? 'Тільки автентичність' : 'Only Authenticity'}
            </strong>
            <p className="text-stone-400 text-sm leading-relaxed">
              {lang === 'UA' 
                ? 'Ми ретельно відбираємо напої, які стали легендами — від класичного Pilsner Urquell до рідкісних лікерів родини Jelínek.'
                : 'We carefully select drinks that have become legends — from the classic Pilsner Urquell to rare liqueurs from the Jelínek family.'}
            </p>
          </div>
          <div className="space-y-4">
            <strong className="text-amber-500 uppercase text-[10px] font-black tracking-widest block">
              {lang === 'UA' ? 'Культура споживання' : 'Drinking Culture'}
            </strong>
            <p className="text-stone-400 text-sm leading-relaxed">
              {lang === 'UA'
                ? 'Для нас «Na Zdravi» — це не просто тост, це побажання здоров\'я та щира емоція. Ми хочемо, щоб ви відчували якість у кожному ковтку.'
                : 'For us, "Na Zdravi" is not just a toast, it is a wish for health and a sincere emotion. We want you to feel quality in every sip.'}
            </p>
          </div>
        </div>
        <div className="pt-10 text-center">
          <span className="text-5xl font-serif italic text-amber-600">Na Zdraví!</span>
        </div>
      </div>
    </div>
  </div>
);

// --- ДЕТАЛЬНА СТОРІНКА ТОВАРУ ---
const ProductDetail = ({ t, onAddToCart }) => {
  const { id } = useParams();
  const p = products.find(item => item.id === parseInt(id));
  if (!p) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-48 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="h-[600px] sticky top-40 flex justify-center items-center bg-[#111] rounded-[80px] border border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-amber-500/5 blur-[120px]"></div>
          <img src={p.img} className="max-h-[80%] object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)] relative z-10" alt="" />
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-amber-500 uppercase text-[10px] font-black tracking-[0.5em]">{p.brand}</span>
            <h1 className="text-7xl font-serif italic leading-none">{p.name}</h1>
          </div>
          <p className="text-2xl text-stone-300 font-serif italic leading-relaxed border-l-2 border-amber-500 pl-8">{p.desc}</p>
          <div className="flex items-center gap-10">
            <span className="text-6xl font-serif">{p.price} ₴</span>
            <button onClick={() => onAddToCart(p)} className="flex-1 bg-amber-600 px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              {t.add_to_cart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- СТОРІНКА КАТЕГОРІЙ ---
const CategoryPage = ({ type, title, t }) => {
  const filtered = products.filter(p => p.category === type);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-48 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-8xl font-serif italic border-b border-white/5 pb-10 tracking-tighter">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filtered.map(p => (
            <Link key={p.id} to={`/product/${p.id}`} className="bg-[#111] p-10 rounded-[50px] border border-white/5 hover:border-amber-500/50 transition-all text-center group">
              <div className="h-64 flex items-center justify-center mb-6">
                <img src={p.img} className="h-56 object-contain group-hover:scale-110 transition-transform duration-700" alt="" />
              </div>
              <h3 className="text-lg font-serif italic text-stone-200">{p.name}</h3>
              <p className="text-2xl font-serif text-amber-500 mt-2">{p.price} ₴</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- ОСНОВНИЙ КОМПОНЕНТ APP ---
export default function App() {
  const [lang, setLang] = useState('UA');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const t = translations[lang];

  const addToCart = (product) => {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      setCart(cart.map(i => i.id === product.id ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
    setIsCartOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black">
        
        {/* HEADER */}
        <header className="fixed top-0 w-full z-[80] bg-black/60 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
            <Link to="/" className="flex flex-col group">
              <span className="text-3xl font-serif italic tracking-tighter text-white group-hover:text-amber-500 transition-colors leading-none">Na Zdravi</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-amber-600 font-black mt-1">{t.heritage}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-14 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">
              <Link to="/beer" className="hover:text-white transition-colors">{t.beer}</Link>
              <Link to="/spirits" className="hover:text-white transition-colors">{t.spirits}</Link>
              <Link to="/about" className="hover:text-white transition-colors">{t.about}</Link>
            </nav>

            <div className="flex items-center gap-8">
              <button 
                onClick={() => setLang(lang === 'UA' ? 'EN' : 'UA')} 
                className="text-[10px] font-black border border-white/20 rounded-full px-4 py-2 hover:border-amber-500 transition-all uppercase tracking-widest min-w-[50px]"
              >
                {lang}
              </button>

              <button onClick={() => setIsCartOpen(true)} className="flex items-center gap-3 group">
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 group-hover:text-amber-500 transition-colors">{t.cart}</span>
                <span className="bg-amber-600 text-white text-[11px] font-black w-6 h-6 flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  {cart.reduce((a,b)=>a+b.quantity,0)}
                </span>
              </button>
            </div>
          </div>
        </header>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} setCart={setCart} t={t} />

        <Routes>
          <Route path="/" element={
            <div className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6">
              <div className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full"></div>
              <span className="text-amber-600 uppercase tracking-[0.8em] font-black text-xs mb-8 z-10 animate-pulse font-sans">Est. 1869</span>
              <h2 className="text-[10vw] font-serif italic z-10 tracking-tighter leading-none mb-6">Na Zdravi</h2>
              <p className="max-w-2xl text-stone-400 text-xl font-serif italic z-10 leading-relaxed">
                {t.slogan}
              </p>
              <div className="mt-16 z-10">
                <Link to="/beer" className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-black hover:text-white transition-all flex items-center gap-4 group">
                  <span className="w-12 h-px bg-amber-500/30 group-hover:w-20 transition-all"></span>
                  {t.explore}
                  <span className="w-12 h-px bg-amber-500/30 group-hover:w-20 transition-all"></span>
                </Link>
              </div>
            </div>
          } />
          <Route path="/beer" element={<CategoryPage type="beer" title={t.beer} t={t} />} />
          <Route path="/spirits" element={<CategoryPage type="spirits" title={t.spirits} t={t} />} />
          <Route path="/about" element={<AboutPage t={t} lang={lang} />} />
          <Route path="/product/:id" element={<ProductDetail t={t} onAddToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}