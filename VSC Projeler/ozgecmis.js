
// Müzik kontrolü için gerekli değişkenler
var audio = document.getElementById('backgroundMusic');
var musicControlButton = document.getElementById('musicControlButton');
var isPlaying = false; // Varsayılan olarak müzik çalmıyor

// Butona tıklama olayını dinle
musicControlButton.addEventListener('click', function () {
    // Müzik çalıyorsa durdur, duruyorsa çal
    if (isPlaying) {
        audio.pause();
        musicControlButton.textContent = 'Müzik Çalınsın'; // Buton metnini değiştir
    } else {
        audio.play();
        musicControlButton.textContent = 'Müzik Durdurulsun'; // Buton metnini değiştir
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
        musicControlButton.textContent = 'Müzik Durdu';
    }
});



