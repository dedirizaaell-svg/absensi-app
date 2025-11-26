function simpanAbsensi() {
    let nama = document.getElementById("nama").value;
    let divisi = document.getElementById("divisi").value;
    let shift = document.getElementById("shift").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    let tanggal = new Date().toLocaleDateString('id-ID');
    let jam = new Date().toLocaleTimeString('id-ID');

    let data = {
        nama: nama,
        divisi: divisi,
        shift: shift,
        tanggal: tanggal,
        jam: jam
    };

    // simpan ke LocalStorage
    let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
    absensi.push(data);
    localStorage.setItem("absensi", JSON.stringify(absensi));

    tampilkanData();
    document.getElementById("nama").value = "";
}

function tampilkanData() {
    let data = JSON.parse(localStorage.getItem("absensi")) || [];
    let tabel = document.getElementById("tabelData");
    tabel.innerHTML = "";

    data.forEach((item) => {
        tabel.innerHTML += `
            <tr>
                <td>${item.nama}</td>
                <td>${item.divisi}</td>
                <td>${item.shift}</td>
                <td>${item.tanggal}</td>
                <td>${item.jam}</td>
            </tr>
        `;
    });
}

// tampilkan otomatis saat web dibuka
tampilkanData();
