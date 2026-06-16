
 // ===================================================
    // FUNGSI: KIRIM PESAN (VALIDASI FORM)
    // Memvalidasi semua input sebelum "mengirim" pesan
    // Jika valid: tampilkan alert sukses
    // Jika tidak: tandai field yang salah
    // ===================================================
    function kirimPesan() {

      // Ambil nilai tiap input dan hapus spasi di awal/akhir
      const nama  = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const pesan = document.getElementById('pesan').value.trim();

      let valid = true; // Penanda keseluruhan validasi

      // -- Validasi Nama --
      if (nama === '') {
        // Tambahkan class is-invalid agar input menjadi merah (Bootstrap)
        document.getElementById('nama').classList.add('is-invalid');
        document.getElementById('errNama').style.display = 'block';
        valid = false;
      } else {
        // Hapus error jika sudah diisi
        document.getElementById('nama').classList.remove('is-invalid');
        document.getElementById('errNama').style.display = 'none';
      }

      // -- Validasi Email --
      // Regex untuk mengecek format email: harus ada @, titik, dan domain
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('errEmail').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('errEmail').style.display = 'none';
      }

      // -- Validasi Pesan --
      if (pesan === '') {
        document.getElementById('pesan').classList.add('is-invalid');
        document.getElementById('errPesan').style.display = 'block';
        valid = false;
      } else {
        document.getElementById('pesan').classList.remove('is-invalid');
        document.getElementById('errPesan').style.display = 'none';
      }

      // -- Jika Semua Valid --
      if (valid) {
        // Tampilkan alert sukses
        const alert = document.getElementById('alertSukses');
        alert.style.display = 'block';

        // Reset semua field form ke kosong
        document.getElementById('formKontak').reset();

        // Sembunyikan alert setelah 5 detik (5000 ms)
        setTimeout(() => {
          alert.style.display = 'none';
        }, 5000);

        // Scroll halus ke atas agar alert sukses terlihat
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }