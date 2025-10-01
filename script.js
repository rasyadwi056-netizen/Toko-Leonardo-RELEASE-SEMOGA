const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');
// Kode yang sudah Anda punya (sesuai gambar yang Anda kirim)
const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');
const gameSelect = document.getElementById('gameSelect');
const nominalSelect = document.getElementById('nominalSelect');
const priceDisplay = document.getElementById('priceDisplay');

// Data nominal yang saya berikan (pastikan sudah diperbarui dengan PUBG)
const nominalData = {
    "mobile-legends": [
        { "nominal": "50 Diamond", "price": "Rp 5.000" },
        // ... data lainnya
    ],
    "roblox": [
        // ... data roblox
    ],
    "genshin-impact": [
        // ... data genshin impact
    ],
    "pubg": [
        { "nominal": "60 UC", "price": "Rp 10.000" },
        // ... data lainnya
    ]
};

// Fungsi untuk mengisi dropdown nominal (dari saya)
function populateNominalSelect(game) {
    nominalSelect.innerHTML = '<option value="">Pilih Nominal</option>';
    
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

// Event listener saat pilihan game berubah (dari saya)
gameSelect.addEventListener('change', (event) => {
    const selectedGame = event.target.value;
    populateNominalSelect(selectedGame);
    priceDisplay.textContent = '';
});

// Event listener saat pilihan nominal berubah (dari saya)
nominalSelect.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const price = selectedOption.dataset.price;
    if (price) {
        priceDisplay.textContent = `Harga: ${price}`;
    } else {
        priceDisplay.textContent = '';
    }
});

// Anda juga bisa menambahkan kode untuk form submission di sini
form.addEventListener('submit', (event) => {
    // ... kode untuk submit form
});

