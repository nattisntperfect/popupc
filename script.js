// Tunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Dapatkan elemen-elemen yang dibutuhkan
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContainer = document.getElementById('popup-container');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    // Variabel untuk menampung timer (agar tidak tumpang tindih)
    let reappearTimer = null;
    const reappearDelayYes = 1000; // Jeda 1 detik setelah klik Yes
    const reappearDelayNo = 1500;  // Jeda 1.5 detik setelah klik No

    // Fungsi untuk menampilkan pop-up
    function showPopup() {
        // Tidak perlu cek isPermanentlyClosed lagi
        popupOverlay.style.display = 'block';
        popupContainer.style.display = 'block';
        console.log("Pop-up ditampilkan."); // Pesan console
    }

    // Fungsi untuk menyembunyikan pop-up
    function hidePopup() {
        popupOverlay.style.display = 'none';
        popupContainer.style.display = 'none';
    }

    // Fungsi yang akan dijalankan setelah tombol diklik (Yes atau No)
    function handleButtonClick(delay) {
        hidePopup();
        // Hapus timer sebelumnya jika ada (mencegah timer ganda jika diklik cepat)
        if (reappearTimer) {
            clearTimeout(reappearTimer);
        }
        // Atur timer untuk menampilkan pop-up lagi setelah jeda waktu tertentu
        reappearTimer = setTimeout(showPopup, delay);
        console.log(`Tombol diklik. Pop-up akan muncul lagi dalam ${delay / 1000} detik.`);
    }

    // Event Listener untuk tombol "Yes"
    yesButton.addEventListener('click', () => {
        // Sekarang tombol Yes juga akan memicu pop-up muncul lagi
        handleButtonClick(reappearDelayYes);
    });

    // Event Listener untuk tombol "No"
    noButton.addEventListener('click', () => {
        handleButtonClick(reappearDelayNo);
    });

    // Tampilkan pop-up saat halaman pertama kali dimuat
    // Beri sedikit jeda agar elemen lain sempat render
    setTimeout(showPopup, 500); // Tampilkan setelah 0.5 detik

});