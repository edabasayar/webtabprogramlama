// 'export default' kullanarak bu fonksiyonun diğer dosyalardan kolayca çağrılmasını sağlıyoruz.
export default function Footer() {
  return (
    // HTML5 ile gelen <footer> etiketi, sayfanın en alt kısmı olduğunu arama motorlarına (SEO) bildirir.
    // 'style' prop'u içine yazılan çift süslü parantez, JavaScript içinde bir nesne (object) tanımladığımız içindir.
    <footer style={{ 
        marginTop: '20px',    // Üstteki içerikle arasında boşluk bırakır (nefes aldırır).
       borderTop: '1px solid #333', // Çok parlak olmayan koyu bir çizgi
        textAlign: 'center',        // Metni ortalar
        color: 'white',             // Yazıyı görünür kılar 
        width: '100%'               // Tam genişlik kaplar
      }}>
      {/* <p> etiketi metni bir paragraf olarak tanımlar, standart metin yerleşimi sağlar. */}
      <p>© 2026 Tüm Hakları Saklıdır | React Projesi</p>
    </footer>
  );
}