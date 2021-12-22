const alfabetList = Array.from('abcdefghijklmnopqrstuvwxyz');

let selectedSandi = 'an'
let userInput;
let userInputType = [];       // Menyatakan type userInput, urutannya sesuai


// Untuk bagian dropdown, tidak dispesifikasikan sebab akan bertukar posisi
function changeSelectedSandi(clickedId) {
    if (clickedId === 'an') {
        selectedSandi = 'an';
    } else if (clickedId === 'az') {
        selectedSandi = 'az';
    } else {
        if (selectedSandi === 'an') {
            selectedSandi = 'az';
        } else {
            selectedSandi = 'an';
        }
    }

    setSelectedSandi();

    // Memulai proses kalimat, saat pergantiaan sandi
    prepareInput();
}


// Untuk non Dropdown, ini akan menukar class 'dark-jenis-btn' dan 'white-jenis-btn'
function setSelectedSandi() {
    const nonDropdownOption = document.getElementsByClassName('general-jenis-btn');
    const nonDropdownAn = document.getElementById('an');
    const nonDropdownAz = document.getElementById('az');

    // Set to default, yaitu 'white-jenis-btn'
    for (var i = 0; i < nonDropdownOption.length; i++) {
        nonDropdownOption[i].classList.remove('dark-jenis-btn');
        nonDropdownOption[i].classList.add('white-jenis-btn');
    }

    if (selectedSandi === 'an') {
        nonDropdownAn.classList.add('dark-jenis-btn');
        nonDropdownAn.classList.remove('white-jenis-btn');
    } else {
        nonDropdownAz.classList.add('dark-jenis-btn');
        nonDropdownAz.classList.remove('white-jenis-btn');
    }

    switchDropdown();
}


// Expand dropdown
function showDropdown() {
    document.getElementById('dropdown-list').classList.add('block');        
    document.getElementById('dropdown-list').classList.remove('hidden');        
}


// Untuk dropdown akan tukar isi htmlnya, antara 'dropmain' dan 'droplist' 
function switchDropdown() {
    let iconArrow = "<i class='fas fa-chevron-down ml-1'><\/i>"
    let drpmain;
    let drplist;

    if (selectedSandi === 'an') {
        drpmain = 'Sandi AN'; 
        drplist = 'Sandi AZ'; 
    } else {
        drplist = 'Sandi AN'; 
        drpmain = 'Sandi AZ'; 
    }

    document.getElementById('drpmain').innerHTML = drpmain + " " + iconArrow;
    document.getElementById('drplist').innerHTML = drplist;
}


// Unfocus dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById('dropdown-list').classList.remove('block');        
        document.getElementById('dropdown-list').classList.add('hidden');        
    }
}


// Clipboard Action
function clipboardAction() {
    let clipboard = document.getElementById('clip-btn').classList;
    clipboard.add('clipboard-active');
    clipboard.remove('clipboard-unactive');

    let result = document.getElementById('result').innerHTML;
    let body = document.body;

    // Workaround untuk menyalin ke user clipboard
    // Membuat textarea sementara supaya bisa disalin
    let dummyarea = document.createElement('textarea');
    body.appendChild(dummyarea);
    dummyarea.value = result;
    dummyarea.select();

    document.execCommand('copy');
    body.removeChild(dummyarea);
}


// Pre-Proses Kalimat
function prepareInput() {
    userInputType = [];     // Reset this array
    userInput = Array.from(document.getElementById('input').value);

    // Melakukan identifikasi type char
    for (var i = 0; i < userInput.length; i++) {

        // Mengidentifikasikan kapital atau bukan suatu huruf
        // Dan dikasih typenya, di 'userInputType'
        if (userInput[i].toLowerCase() != userInput[i]) {
            userInputType.push('kapital');
        } else {
            userInputType.push('normal');
        }

        // Mengubah semua huruf menjadi huruf kecil
        userInput[i] = userInput[i].toLowerCase();

        // Mengidentifikasi apakah char adalah alfabet atau bukan
        // Jika bukan, maka 'userInputType' akan 'simbol'
        // Jika iya, maka 'userInputType' akan 'normal' / 'kapital'
        // dan jika char adl alfabet, akan diubah menjadi angka sesuai urutan alfabet
        // Cth : a -> 1, b -> 2, c -> 3.
        let nomorAlfabet = 0;
        while(true) {
            if (userInput[i] === alfabetList[nomorAlfabet]) {
                userInput[i] = nomorAlfabet;
                break;
            } else if (nomorAlfabet > 25) {
                userInputType[i] = "simbol";
                break
            }

            nomorAlfabet++;
        }
        nomorAlfabet = 0;
    }

    // Menjalankan function sesuai dgn sandi yg terpilih
    if (selectedSandi === 'an') {
        prosesAN();
    } else {
        prosesAZ();
    }

    postProses();
}


// Rumus Sandi AN adalah : 
// Jika nomorAlfabet < 13 = 13 + (nomorAlfabet)
// Jika nomorAlfabet > 13 = (nomorAlfabet) - 13
function prosesAN() {
    for (var i = 0; i < userInput.length; i++) {
        
        // Tentu saja 'userInput' yg diproses adalah yg 'type'nya adalah
        // Kapital atau Normal, simbol tidak diproses sama sekali
        if (userInputType[i] === "kapital" || userInputType[i] === 'normal') {
            if (userInput[i] < 13) {
                userInput[i] = 13 + userInput[i];
            } else {
                userInput[i] = userInput[i] - 13;
            }
        }
    }
}


// Rumus Sandi AZ adalah : 
// nomorAlfabet = 26 - (nomorAlfabet)
// khusus untuk Sandi AZ, sebab array jadi hasilnya harus dikurang 1
function prosesAZ() {
    for (var i = 0; i < userInput.length; i++) {

        // Tentu saja 'userInput' yg diproses adalah yg 'type'nya adalah
        // Kapital atau Normal, simbol tidak diproses sama sekali
        if (userInputType[i] === "kapital" || userInputType[i] === 'normal') {
            userInput[i] = (26 - userInput[i]) - 1;
        }
    }
}


// Post proses setelah ditransformasikan
function postProses() {
    let output = document.getElementById('output').classList;

    for (var i = 0; i < userInput.length; i++) {

        // Post proses yg hanya dialami user input type 'kapital' / 'normal'
        if (userInputType[i] === "kapital" || userInputType[i] === 'normal') {

            // Mengubah kembali angka menjadi alfabetnya
            // cth : 1 -> a, 2 -> b
            let nomorAlfabet = 0;
            while (true) {
                if (userInput[i] === nomorAlfabet) {
                    userInput[i] = alfabetList[nomorAlfabet];
                    break
                }
                nomorAlfabet++;
            }
            nomorAlfabet = 0;

            // Kapitalkan char, jika typenya 'kapital'
            if (userInputType[i] === 'kapital') {
                userInput[i] = userInput[i].toUpperCase();
            }
        }
    }

    // Combine char to strings
    let result = userInput.join('');

    // Menampilkan bagian output bila terdapat input
    if (result != "") {
        output.remove('invisible');
        output.add('visible');
    } else {
        output.add('invisible');
        output.remove('visible');
    }

    // Tampilkan hasil
    document.getElementById('result').innerHTML = result;
}
