let selectedSandi = 'an'


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


// Untuk dropdown akan tukar posisi isi htmlnya, antara dropmain dan droplist 
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
