import Header from './components/Header'; //  Header'ı içeri aktarıyoruz
import WeatherContent from './components/WeatherContent'; // Hava durumu kartını içeren ana bileşeni dosyaya dahil ediyoruz.
import Footer from './components/Footer'; //  Footer bileşenini içeri aktarıyoruz.
import './App.css'; // Uygulamanın görsel tasarımını (renkler, hizalamalar) belirleyen CSS dosyasını yüklüyoruz.

function App() {
  return (
    // 'container' sınıfı, CSS dosyasında tanımladığın 'display: flex' ve 'justify-content: center' gibi özellikleri uygulayarak kartı merkeze alır.
    <div className="container">
      {/*  En üste Header'ı yerleştir */}
      <Header />
      {/* Hava durumu kartını ekranda gösterir. */}
      <WeatherContent />
      {/* Footer'ı kartın hemen altına yerleştiriyoruz. */}
      <Footer />
    </div>
  );
}

export default App; // Bu ana bileşeni, React'in başlangıç noktası (index.js) tarafından okunabilmesi için dışa aktarıyoruz.