// Koşullu İfadeler - Sayı kontrolü
function checkNumber() {
    // Kullanıcı girdisini al
    const number = parseFloat(document.getElementById('numberInput').value);
    let result = '';
    
    // Sayının pozitif, negatif veya sıfır olduğunu kontrol et
    if (isNaN(number)) {
        result = 'Lütfen geçerli bir sayı girin.';
    } else if (number > 0) {
        result = `${number} pozitif bir sayıdır.`;
    } else if (number < 0) {
        result = `${number} negatif bir sayıdır.`;
    } else {
        result = `${number} sıfırdır.`;
    }
    
    // Sonucu göster
    document.getElementById('numberResult').innerHTML = result;
    console.log(result);
}

// Döngüler
function showLoops() {
    let forLoopResult = '<h3>For Döngüsü</h3><pre>';
    let whileLoopResult = '<h3>While Döngüsü</h3><pre>';
    let doWhileLoopResult = '<h3>Do-While Döngüsü</h3><pre>';
    
    // For döngüsü
    for (let i = 1; i <= 10; i++) {
        forLoopResult += `${i}\n`;
        console.log(`For döngüsü: ${i}`);
    }
    forLoopResult += '</pre>';
    
    // While döngüsü
    let j = 1;
    while (j <= 10) {
        whileLoopResult += `${j}\n`;
        console.log(`While döngüsü: ${j}`);
        j++;
    }
    whileLoopResult += '</pre>';
    
    // Do-While döngüsü
    let k = 1;
    do {
        doWhileLoopResult += `${k}\n`;
        console.log(`Do-While döngüsü: ${k}`);
        k++;
    } while (k <= 10);
    doWhileLoopResult += '</pre>';
    
    // Sonuçları göster
    document.getElementById('loopsResult').innerHTML = forLoopResult + whileLoopResult + doWhileLoopResult;
}

// Asal Sayı Kontrolü
function isPrime(number) {
    // 2'den küçük sayılar asal değildir
    if (number < 2) {
        return false;
    }
    
    // 2 ve 3 asaldır
    if (number <= 3) {
        return true;
    }
    
    // 2 veya 3'e bölünebilen sayılar asal değildir
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    
    // 5'ten başlayarak 6k±1 formundaki sayıları kontrol et
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

function checkPrime() {
    // Kullanıcı girdisini al
    const number = parseInt(document.getElementById('primeInput').value);
    let result = '';
    
    // Sayının asal olup olmadığını kontrol et
    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        result = 'Lütfen pozitif bir tam sayı girin.';
    } else {
        const prime = isPrime(number);
        if (prime) {
            result = `${number} bir asal sayıdır.`;
        } else {
            result = `${number} bir asal sayı değildir.`;
        }
    }
    
    // Sonucu göster
    document.getElementById('primeResult').innerHTML = result;
    console.log(result);
}

// Sayfa yüklendiğinde prompt ile kullanıcıdan sayı isteme (opsiyonel)
window.onload = function() {
    const userInput = prompt('Bir sayı girin (İptal etmek için boş bırakın):');
    
    if (userInput !== null && userInput !== '') {
        const number = parseFloat(userInput);
        document.getElementById('numberInput').value = number;
        checkNumber();
    }
};