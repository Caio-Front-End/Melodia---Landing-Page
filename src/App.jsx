import React, { useState } from 'react';
import './App.css';
import mockupMelodia from './assets/mockup-melodia.png';
import {
  Headphones,
  ListMusic,
  Compass,
  LayoutGrid,
  Star,
  Mail,
  Instagram,
  Twitter,
  Phone,
  Send,
} from 'lucide-react';

// Dados da aplicação
const APP_NAME = 'Melodia';

// Dados da seção de Funcionalidades
const features = [
  {
    icon: Headphones,
    title: 'Qualidade Sonora Superior',
    description:
      'Ouça suas faixas favoritas na mais alta fidelidade. Áudio sem compressão para uma experiência que captura cada detalhe.',
    color: 'text-purple-400',
  },
  {
    icon: ListMusic,
    title: 'Playlists Feitas para Você',
    description:
      'Crie e personalize suas playlists com ferramentas inteligentes que sugerem músicas baseadas no seu humor e histórico.',
    color: 'text-cyan-400',
  },
  {
    icon: Compass,
    title: 'Descoberta de Novos Artistas',
    description:
      'Nosso algoritmo inovador te conecta a talentos emergentes e gêneros que você ainda não explorou. Sua próxima banda favorita está aqui.',
    color: 'text-yellow-400',
  },
  {
    icon: LayoutGrid,
    title: 'Interface Intuitiva e Fluida',
    description:
      'Navegue pelo aplicativo com facilidade. Design limpo e responsivo, focado no que importa: a música.',
    color: 'text-pink-400',
  },
];

// Dados dos Depoimentos
const testimonials = [
  {
    quote:
      'A qualidade de áudio é inacreditável. Finalmente posso ouvir os graves como deveriam ser. Mudou completamente minha experiência musical.',
    name: 'Lara M.',
    role: 'Músicófila e DJ',
    avatar: 'https://placehold.co/100x100/A855F7/ffffff?text=LM',
  },
  {
    quote:
      "Adoro a seção de 'Descobertas'! Encontrei artistas incríveis que nunca apareceriam nas rádios. O Melodia me entende!",
    name: 'João P.',
    role: 'Estudante e Explorador',
    avatar: 'https://placehold.co/100x100/06B6D4/ffffff?text=JP',
  },
];

// Componente de Estrelas para Depoimentos
const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ))}
  </div>
);

// Componente Principal da Landing Page
const App = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      setSubmitStatus('error');
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulação de envio de formulário
    setTimeout(() => {
      console.log('Dados de contato enviados:', { email, message });
      setIsSubmitting(false);
      setEmail('');
      setMessage('');
      setSubmitStatus('success');
      // Limpa o status após 3 segundos
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const CTAButton = ({ text, className = '' }) => (
    <a
      href="#download"
      className={`
        inline-flex items-center justify-center px-8 py-3 
        text-lg font-semibold rounded-full shadow-lg 
        transition-all duration-300 transform hover:scale-105 
        bg-cyan-500 text-gray-900 
        hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-600
        ${className}
      `}
    >
      {text}
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Script para Google Fonts (Inter) e Tailwind CSS' */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Header Fixo */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-400">{APP_NAME}</div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#funcionalidades"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Funcionalidades
            </a>
            <a
              href="#depoimentos"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              Contato
            </a>
          </nav>
          <CTAButton
            text="Baixar Agora"
            className="hidden sm:inline-flex px-6 py-2 text-base"
          />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative pt-24 pb-32 overflow-hidden bg-gray-950"
          id="hero"
        >
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-900 via-gray-950 to-cyan-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="block text-white">Melodia: Sua Música,</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Sua Forma.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Descubra o universo sonoro que combina perfeitamente com você.
              Melodia é a sua curadoria pessoal com{' '}
              <strong className="text-white">
                qualidade de áudio imersiva
              </strong>{' '}
              e a porta para{' '}
              <strong className="text-white">
                novas descobertas musicais.
              </strong>
            </p>

            <div className="flex justify-center space-x-4">
              <CTAButton text="Experimente Já!" className="text-xl" />
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-gray-700 text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Ver Funcionalidades
              </a>
            </div>

            {/* Imagem Mockup do App - gerado com gemini (rs) */}
            <div className="mt-16">
              <img
                src={mockupMelodia}
                alt="Mockup da Interface do Aplicativo Melodia"
                className="mx-auto rounded-xl shadow-2xl transition-all duration-500 hover:shadow-cyan-500/50"
              />
            </div>
          </div>
        </section>

        {/* Seção de Funcionalidades (Funcionalidades) */}
        <section className="py-24 bg-gray-900" id="funcionalidades">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que faz o <span className="text-purple-400">{APP_NAME}</span>{' '}
              ser único?
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto">
              Nossos diferenciais foram pensados para o verdadeiro amante de
              música.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700"
                >
                  <feature.icon
                    className={`w-12 h-12 mx-auto mb-4 ${feature.color}`}
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <CTAButton text="Comece a Ouvir Hoje" className="text-lg" />
            </div>
          </div>
        </section>

        {/* Seção de Depoimentos (Depoimentos) */}
        <section className="py-24 bg-gray-950" id="depoimentos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que dizem nossos usuários
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-4xl mx-auto">
              Veja como o Melodia está transformando a forma como as pessoas
              ouvem música.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl shadow-xl border-t-4 border-purple-500 flex flex-col items-center text-center"
                >
                  <StarRating count={5} />
                  <p className="text-xl italic text-gray-200 mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={t.avatar}
                      alt={`Foto de ${t.name}`}
                      className="w-16 h-16 rounded-full mb-3 object-cover border-4 border-cyan-500"
                    />
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-purple-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-24 bg-gray-900" id="contato">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Tem alguma dúvida ou sugestão? Envie uma mensagem para nossa
              equipe.
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl border border-gray-700"
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Seu Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                    placeholder="voce@exemplo.com"
                    aria-label="Campo de email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-300 resize-none"
                  placeholder="Sua sugestão ou dúvida..."
                  aria-label="Campo de mensagem"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 p-3 bg-green-900 text-green-300 rounded-lg text-center">
                  Mensagem enviada com sucesso! Em breve entraremos em contato.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 p-3 bg-red-900 text-red-300 rounded-lg text-center">
                  Erro ao enviar. Por favor, preencha o formulário corretamente.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-950 border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Informações de Contato */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Contato
              </h4>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                suporte@melodiaapp.com
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                (11) 99999-9999
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a
                    href="#funcionalidades"
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Funcionalidades
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-3 md:text-right">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Siga-nos
              </h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-pink-500 transition duration-300"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-cyan-500 transition duration-300"
                >
                  <Twitter className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
            &copy; {new Date().getFullYear()} {APP_NAME}. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>

      {/* Seção invisível para ancoragem do CTA */}
      <div id="download" className="h-0 w-0 overflow-hidden"></div>
    </div>
  );
};

export default App;
