document.getElementById('toggleBtn').addEventListener('click', function () {
    var navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse.style.display === 'block') {
        navbarCollapse.style.display = 'none';
    } else {
        navbarCollapse.style.display = 'block';
    }
});

function berhasil() {
    alert("Pesan anda berhasil, Terima Kasih");
}