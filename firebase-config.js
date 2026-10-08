/* ============================================================
   SEDİR AYAR DOSYASI
   Bu dosyada değiştireceğiniz tek yer aşağıdaki "firebase" bölümüdür.
   Firebase panelinden aldığınız değerleri tırnakların içine yapıştırın.
   Bu bölüm boş kaldıkça uygulama örnek verilerle "deneme modu"nda çalışır.
   ============================================================ */
window.SEDIR_AYAR = {
  uygulamaAdi: 'Sedir',

  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },

  /* Yeni kaydolan mağazaya verilen ücretsiz deneme süresi (gün) */
  denemeGun: 14,

  /* Mağazaların abonelik için size yazacağı WhatsApp numarası. Örn. '0532 000 00 00' */
  destekWhatsapp: ''
};
