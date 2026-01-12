import { StrictMode } from 'react' // React'in geliştirme sürecinde hataları önceden uyarmasını sağlayan özel bir aracı içeri alıyoruz.
import { createRoot } from 'react-dom/client' // React bileşenlerini HTML'deki gerçek bir kutuya (DOM) bağlamak için gerekli olan ana fonksiyonu alıyoruz.
import './index.css' // Tüm uygulama genelinde geçerli olacak (arka plan rengi, yazı tipleri gibi) stil dosyasını yüklüyoruz.
import App from './App.jsx' // Yazdığımız tüm uygulamanın ana merkezi olan 'App' bileşenini buraya çağırıyoruz.

// HTML dosyamızın (index.html) içinde id'si 'root' olan boş div'i buluyoruz ve React'in yönetim merkezini oraya kuruyoruz.
createRoot(document.getElementById('root')).render(
  // <StrictMode>: Uygulamayı "sıkı mod"da çalıştırır. Kodundaki olası hataları veya eski kalmış yöntemleri konsolda (F12) sana uyarı olarak gösterir.
  <StrictMode>
    <App /> {/* Ana uygulama bileşenimiz burada ekrana basılır. */}
  </StrictMode>,
)