const form = document.getElementById('topupForm');
const successMsg = document.getElementById('successMsg');
const gameSelect = document.getElementById('gameSelect');
const nominalSelect = document.getElementById('nominalSelect');
const priceDisplay = document.getElementById('priceDisplay');

const nominalData = {
    "mobile-legends": [
        {nominal: "50 Diamond", price: "Rp 5.000"},
        {nominal: "100 Diamond", price: "Rp 10.000"},
        {nominal: "200 Diamond", price: "Rp 20.000"}
    ],
    "roblox": [
        {nominal: "50 Robux", price: "Rp 6.000"},
        {nominal: "100 Robux", price: "Rp 12.000"},
        {nominal: "200 Robux", price: "Rp 24.000"}
    ],
    "genshin-impact": [
        {nominal: "50 Genesis Crystals", price: "Rp 15.000"},
        {nominal
