
document.addEventListener('DOMContentLoaded', function () {
    const formData = JSON.parse(localStorage.getItem('formData'));
    const output = document.getElementById('formYazar');
    output.innerHTML = `
        <p>Adı: ${formData.adi}</p>
        <p>Soyadı: ${formData.soyadi}</p>
        <p>Telefon: ${formData.telefon}</p>
        <p>E-posta: ${formData.email}</p>
        <p>Cinsiyet: ${formData.cinsiyet}</p>
        <p>Beğenilen Özellikler: ${formData.begenilenOzellikler}</p>
        <p>Tekrar Gelme: ${formData.gelmek}</p>
        <p>Mesaj: ${formData.mesaj}</p>
        <p>Sorunlar: ${formData.sorunlar.join(', ')}</p>
    `;
});
