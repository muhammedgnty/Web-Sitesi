
        function HavaDurumuGetir() {
            var sehir = document.getElementById('sehir').value;
            var apiKey = '46c5a22986b85c83a4f1aa9e14c0b208';

            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + sehir + '&lang=tr&appid=' + apiKey)
                .then(function (resp) { return resp.json() })
                .then(function (data) {
                    HavaDurumuGoster(data);
                })
                .catch(function (error) {
                    console.error('Hata:', error);
                    document.getElementById('aciklama').innerHTML = 'Hava durumu bilgisi alınırken bir hata oluştu.';
                });
        }

        function HavaDurumuGoster(d) {
            var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
            var aciklama = d.weather[0].description;
            document.getElementById('aciklama').innerHTML = aciklama;
            document.getElementById('sicaklik').innerHTML = celcius + '&deg;';
            document.getElementById('konum').innerHTML = d.name;
        }
    