$(document).ready(function() {
    // Fade-in effect untuk semua gambar di galeri
    $('.gallery img').fadeTo(2500, 1);

    // Menampilkan gambar dalam modal saat diklik
    $('.gallery img').click(function() {
        const imgSrc = $(this).attr('src');
        $('.modal img').attr('src', imgSrc);
        $('.modal').fadeIn();
    });

    // Menutup modal ketika tombol close diklik
    $('.close-btn').click(function() {
        $('.modal').fadeOut();
    });

    // Menutup modal jika area luar gambar diklik
    $('.modal').click(function(event) {
        if ($(event.target).is('.modal')) {
            $('.modal').fadeOut();
        }
    });
});