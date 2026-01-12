import React, { useState, useEffect } from 'react'; // React'in hafıza (state) ve yaşam döngüsü (effect) araçlarını içeri alıyoruz.
import axios from 'axios'; // İnternetten (API) veri çekmek için kullanılan popüler kütüphane.
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog } from 'react-icons/wi'; // Hava durumuna göre göstereceğimiz ikon paketleri.

export default function WeatherContent() {
  // --- STATE (DURUM) TANIMLAMALARI ---
  const [city, setCity] = useState('Ankara'); // Kullanıcının yazdığı şehir ismini tutar (Varsayılan: Ankara).
  const [weather, setWeather] = useState(null); // API'den gelen tüm hava durumu verisini (sıcaklık, nem vb.) saklar.
  const [loading, setLoading] = useState(false); // Veri yüklenirken kullanıcıya "yükleniyor" demek için kullanılır.
  const [error, setError] = useState(null); // Bir hata oluşursa (yanlış şehir adı gibi) hata mesajını tutar.

  const API_KEY = "e0167d21893bff39a3a0c782fac783f9"; // OpenWeatherMap sitesinden aldığımız özel kimlik anahtarı.

  // useEffect: Bileşen ekrana ilk geldiğinde (mount olduğunda) fetchWeather fonksiyonunu bir kez çalıştırır.
  useEffect(() => {
    fetchWeather();
  }, []);

  // --- API VERİ ÇEKME FONKSİYONU ---
  const fetchWeather = async () => {
    if (!city) return; // Eğer şehir ismi boşsa fonksiyonu durdurur.
    setLoading(true);  // Yükleme animasyonunu başlatır.
    setError(null);    // Varsa eski hataları temizler.
    try {
      // axios.get: API adresine bir "istek" gönderir. await ile yanıtın gelmesini bekler.
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`);
      setWeather(res.data); // Gelen veriyi 'weather' state'ine kaydeder.
    } catch (err) {
      setError("Şehir bulunamadı! Lütfen kontrol edin."); // Hata varsa kullanıcıya bildirir.
      setWeather(null); // Eski verileri temizler.
    } finally {
      setLoading(false); // İşlem bittiğinde (başarılı veya başarısız) yükleme modunu kapatır.
    }
  };

  // --- GÖRSEL AYARLAMA FONKSİYONU ---
  const getWeatherDetails = () => {
    if (!weather) return { icon: <WiDaySunny />, class: 'default' };
    const main = weather.weather[0].main.toLowerCase(); // Hava durumunun ana kategorisini (Clear, Clouds vb.) alır.
    
    // Hava durumuna göre hangi ikonun döneceğini ve hangi CSS sınıfının kullanılacağını belirler:
    if (main.includes('clear')) return { icon: <WiDaySunny className="animate-spin-slow" />, class: 'sunny' };
    if (main.includes('cloud')) return { icon: <WiCloudy className="animate-bounce-slow" />, class: 'cloudy' };
    if (main.includes('rain') || main.includes('drizzle')) return { icon: <WiRain className="animate-rain" />, class: 'rainy' };
    if (main.includes('snow')) return { icon: <WiSnow className="animate-snow" />, class: 'snowy' };
    return { icon: <WiFog />, class: 'default' };
  };

  const details = getWeatherDetails(); // Yukarıdaki fonksiyonu çalıştırıp sonucu bir değişkene atar.

  return (
    // 'details.class' sayesinde hava durumuna göre arka plan rengi değişir (sunny, cloudy vb.)
    <div className={`weather-card ${details.class}`}>
      <div className="search-box">
        <input 
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)} // Klavyeden her tuşa basıldığında 'city' bilgisini günceller.
          placeholder="Şehir girin..." 
        />
        <button onClick={fetchWeather}>Ara</button> {/* Butona basıldığında API fonksiyonunu tetikler. */}
      </div>

      {/* Koşullu Gösterim: Eğer yükleniyorsa bu mesajı göster. */}
      {loading && <div className="status-msg">Veriler getiriliyor...</div>}
      {/* Koşullu Gösterim: Eğer hata varsa bu mesajı göster. */}
      {error && <p className="status-msg error-text">{error}</p>}

      {/* Veri başarıyla geldiyse ve yükleme bittiyse bilgileri ekrana basar: */}
      {weather && !loading && (
        <div className="info-area">
          <div className="main-icon">{details.icon}</div>
          <h2 className="city-name">{weather.name}</h2>
          <h1 className="temp-display">{Math.round(weather.main.temp)}°C</h1> {/* Sayıyı yuvarlar (11.4 -> 11) */}
          <p className="weather-desc">{weather.weather[0].description.toUpperCase()}</p>
          
          <div className="details-row">
            <span>💧 Nem: %{weather.main.humidity}</span>
            <span>💨 Rüzgar: {weather.wind.speed} km/s</span>
          </div>
        </div>
      )}
    </div>
  );
}