<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullaniciAdi = $_POST['kullanici'];
    $sifre = $_POST['sifre'];


    if (($kullaniciAdi)=="b231210300@sakarya.edu.tr" && ($sifre)=="b231210300") {
        // Giriş başarılıysa
        $_SESSION["girisKontrol"] = "GİRİŞ BAŞARILI";
        header("Location: girisSayfasiBasarili.html");
        exit;
    } else {
        // Giriş başarısızsa
        $_SESSION["girisKontrol"] = "GİRİŞ BAŞARISIZ";
        header("Location: girisSayfasiBasarisiz.html");
        exit;
    }
}
?>
