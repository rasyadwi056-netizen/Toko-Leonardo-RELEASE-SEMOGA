// Dapatkan elemen-elemen yang dibutuhkan dari DOM
const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');
const gameSelect = document.getElementById('gameSelect');
const nominalSelect = document.getElementById('nominalSelect');
const priceDisplay = document.getElementById('priceDisplay');

// Data nominal untuk setiap game
const nominalData = {
    "mobile-legends": [
        { "nominal": "50 Diamond", "price": "Rp 5.000" },
        { "nominal": "100 Diamond", "price": "Rp 10.000" },
        { "nominal": "200 Diamond", "price": "Rp 20.000" }
    ],
    "roblox": [
        { "nominal": "50 Robux", "price": "Rp 6.000" },
        { "nominal": "100 Robux", "price": "Rp 12.000" },
        { "nominal": "200 Robux", "price": "Rp 24.000" }
    ],
    "genshin-impact": [
        { "nominal": "50 Genesis Crystals", "price": "Rp 15.000" }
    ],
    "pubg": [
        { "nominal": "60 UC", "price": "Rp 10.000" },
        { "nominal": "120 UC", "price": "Rp 20.000" }
    ]
};

// Fungsi untuk mengisi dropdown nominal
function populateNominalSelect(game) {
    // Hapus semua pilihan yang ada dan tambahkan opsi default
    nominalSelect.innerHTML = '<option value="">Pilih Nominal</option>';
    
    // Ambil data nominal sesuai game yang dipilih
    const nominals = nominalData[game];

    if (nominals) {
        nominals.forEach(item => {
            const option = document.createElement('option');
            option.value = item.nominal;
            option.textContent = item.nominal;
            option.dataset.price = item.price; 
            nominalSelect.appendChild(option);
        });
    }
}

// Event listener saat pilihan game berubah
gameSelect.addEventListener('change', (event) => {
    const selectedGame = event.target.value;
    populateNominalSelect(selectedGame);
    priceDisplay.textContent = ''; 
});

// Event listener saat pilihan nominal berubah untuk menampilkan harga
nominalSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const price = selectedOption.dataset.price;
    if (price) {
        priceDisplay.textContent = `Harga: ${price}`;
    } else {
        priceDisplay.textContent = '';
    }
});

