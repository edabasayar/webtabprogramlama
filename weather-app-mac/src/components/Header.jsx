export default function Header() {
  return (
    // <header> etiketi sayfanın en üst kısmını temsil eder.
    <header style={{
      width: '100%', // Header'ın ekranın solundan sağına tam yayılmasını sağlar.
      padding: '15px 0', // Üstten ve alttan 15px boşluk vererek içeriği ferahlatır.
      backgroundColor: 'rgba(255, 255, 255, 0.05)', // Çok hafif, %5 opaklıkta beyaz bir zemin oluşturur.
      backdropFilter: 'blur(10px)', // Arka planı bulanıklaştırarak şık bir "buzlu cam" (Glassmorphism) efekti verir.
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Alt kısma çok ince ve zarif bir ayırıcı çizgi ekler.
      textAlign: 'center', // İçindeki başlık metnini tam ortalar.
      position: 'fixed', // Sayfa kaydırılsa bile Header'ın en üstte sabit kalmasını sağlar.
      top: 0, // Ekranın en tepesine yapıştırır.
      left: 0, // Sol kenardan boşluk bırakmaz.
      zIndex: 1000 // Diğer tüm öğelerin (kartlar, ikonlar vb.) üstünde görünmesini garanti eder.
    }}>
      <h2 style={{
        margin: 0, // Başlığın etrafındaki varsayılan tarayıcı boşluklarını sıfırlar.
        fontSize: '1.2rem', // Yazı boyutunu kibar ve okunabilir bir seviyeye (küçük) çeker.
        fontWeight: '500', // Yazıyı orta kalınlıkta yaparak zarif gösterir.
        color: 'white', // Yazı rengini beyaz yapar.
        letterSpacing: '2px', // Harfler arasına 2px boşluk koyarak daha modern/premium bir hava katar.
        textTransform: 'uppercase' // Tüm harfleri otomatik olarak BÜYÜK HARFE çevirir.
      }}>
       🌏 Orada Havalar Nasıl?  🌏
      </h2>
    </header>
  );
}