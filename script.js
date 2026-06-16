 // ===================================================
    // FUNGSI: UPDATE LABEL HARGA
    // Dipanggil saat slider harga digeser
    // Mengubah angka slider menjadi format Rupiah
    // ===================================================
    function updateHarga(nilai) {
      // toLocaleString('id-ID') = format angka Indonesia (titik sebagai pemisah ribuan)
      document.getElementById('hargaLabel').textContent =
        'Rp ' + parseInt(nilai).toLocaleString('id-ID');
    }

    // ===================================================
    // FUNGSI: FILTER PRODUK
    // Menyembunyikan/menampilkan kartu berdasarkan:
    //   1. Kategori yang dicentang
    //   2. Harga maksimum dari slider
    // ===================================================
    function filterProduk() {

      // Ambil semua checkbox yang dicentang
      const checkboxes = document.querySelectorAll('.form-check-input:checked');

      // Buat array dari nilai kategori yang dipilih
      // Array.from() mengubah NodeList menjadi array biasa
      const kategoriDipilih = Array.from(checkboxes).map(cb => cb.value);

      // Ambil nilai maksimum harga dari slider
      const maxHarga = parseInt(document.getElementById('rangeHarga').value);

      // Ambil semua elemen produk
      const semuaProduk = document.querySelectorAll('.produk-item');

      let adaYangTampil = false; // Penanda apakah ada produk yang tampil

      // Loop setiap produk
      semuaProduk.forEach(item => {
        const kategoriItem = item.getAttribute('data-kategori'); // Kategori produk
        const hargaItem    = parseInt(item.getAttribute('data-harga')); // Harga produk

        // Cek kategori: jika tidak ada yang dicentang, tampilkan semua
        const lolosKategori = kategoriDipilih.length === 0
                              || kategoriDipilih.includes(kategoriItem);

        // Cek harga: produk hanya tampil jika harganya <= maks slider
        const lolosHarga = hargaItem <= maxHarga;

        if (lolosKategori && lolosHarga) {
          item.style.display = ''; // Tampilkan (kembalikan display default)
          adaYangTampil = true;
        } else {
          item.style.display = 'none'; // Sembunyikan
        }
      });

      // Tampilkan pesan "tidak ada" jika semua produk tersembunyi
      document.getElementById('noResult').style.display = adaYangTampil ? 'none' : 'block';
    }

    // ===================================================
    // FUNGSI: RESET FILTER
    // Menghapus semua centang dan mengembalikan slider ke max
    // ===================================================
    function resetFilter() {
      // Hapus centang semua checkbox
      document.querySelectorAll('.form-check-input').forEach(cb => cb.checked = false);

      // Kembalikan slider ke nilai maksimum
      const slider = document.getElementById('rangeHarga');
      slider.value = slider.max;
      updateHarga(slider.max); // Update tampilan label harga

      // Jalankan filter ulang (tampilkan semua produk)
      filterProduk();
    }