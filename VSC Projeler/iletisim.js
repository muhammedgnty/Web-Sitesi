
function showValues() {
    const adi = document.getElementById('adi').value.trim();
    const soyadi = document.getElementsByName('soyadi')[0].value.trim();
    const telefon = document.getElementsByName('telefon')[0].value.trim();
    const email = document.getElementsByName('email')[0].value.trim();
    const sifre = document.getElementsByName('sifre')[0].value.trim();
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked').value;
    const begenilenOzellikler = document.getElementsByName('begenilenOzellikler')[0].value;
    const gelmek = document.getElementsByName('gelmek')[0].value;
    const mesaj = document.getElementsByName('mesaj')[0].value.trim();

    let sorunlar = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
        sorunlar.push(checkbox.value);
    });

    const output = document.getElementById('problem');
    output.innerHTML = '';

    let hasError = false;

    if (adi === '') {
        output.innerHTML += '<p class="error">Lütfen adınızı giriniz.</p>';
        hasError = true;
    }

    if (soyadi === '') {
        output.innerHTML += '<p class="error">Lütfen soyadınızı giriniz.</p>';
        hasError = true;
    }

    if (telefon === '' || !/^[0-9]{11}$/.test(telefon)) {
        output.innerHTML += '<p class="error">Lütfen geçerli bir telefon numarası giriniz. 11 haneli olacak</p>';
        hasError = true;
    }

    if (email === '' || !validateEmail(email)) {
        output.innerHTML += '<p class="error">Lütfen geçerli bir e-posta adresi giriniz. örneğin: serserikalbim@gmail.com</p>';
        hasError = true;
    }

    if (sifre === '') {
        output.innerHTML += '<p class="error">Lütfen bir şifre giriniz.</p>';
        hasError = true;
    }

    if (!hasError) {
        let formData = {
            adi: adi,
            soyadi: soyadi,
            telefon: telefon,
            email: email,
            sifre: sifre,
            cinsiyet: cinsiyet,
            begenilenOzellikler: begenilenOzellikler,
            gelmek: gelmek,
            mesaj: mesaj,
            sorunlar: sorunlar
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        output.innerHTML += "Göndermek Başarılı";
        // Yeni sayfayı aç
        window.open('iletisimSorunlariGor.html');
    }
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Müzik kontrolü için gerekli değişkenler
var audio = document.getElementById('backgroundMusic');
var musicControlButton = document.getElementById('musicControlButton');
var isPlaying = true; // Varsayılan olarak müzik çalıyor

// Butona tıklama olayını dinle
musicControlButton.addEventListener('click', function () {
    // Müzik çalıyorsa durdur, duruyorsa çal
    if (isPlaying) {
        audio.pause();
        musicControlButton.textContent = 'Müzik Çal'; // Buton metnini değiştir
    } else {
        audio.play();
        musicControlButton.textContent = 'Müzik Durdur'; // Buton metnini değiştir
    }
    // Durum değişikliğini güncelle
    isPlaying = !isPlaying;
});



// Sekme etkinliğini dinle
document.addEventListener('visibilitychange', function () {
    // Eğer sekme etkinse (yani görünürse)
    if (document.hidden) {
        // Eğer sekme etkisizse (yani gizliyse)
        // Durdurulmuşsa, müziği durdur
        var audio = document.getElementById('backgroundMusic');
        audio.pause();
    }
});

