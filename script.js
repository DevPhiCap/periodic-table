//print chu thich khi click vao
let cells = document.querySelectorAll('.cell');
let info = document.getElementById('info');

cells.forEach(cell => {  
  cell.addEventListener('click', () => {
    let cellInfo = cell.getAttribute('data-info');
    info.innerHTML = cellInfo;
    cell.classList.add('pinned');
  });
});

//du lieu cac nguyen to
const data = [
  {line:1},
  {Number: 1, Symbol: "H", Name: "Hydrogen", weight: 1},
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  {Number: 2, Symbol: "He", Name: "Helium", weight: 4},
  {line:2},
  {Number: 3, Symbol: "Li", Name: "Lithium", weight: 7},
  {Number: 4, Symbol: "Be", Name: "Beryllium", weight: 9},
  {},{},{},{},{},{},{},{},{},{},
  {Number: 5, Symbol: "B", Name: "Boron", weight: 11},
  {Number: 6, Symbol: "C", Name: "Carbon", weight: 12},
  {Number: 7, Symbol: "N", Name: "Nitrogen", weight: 14},
  {Number: 8, Symbol: "O", Name: "Oxygen", weight: 16},
  {Number: 9, Symbol: "F", Name: "Fluorine", weight: 19},
  {Number: 10, Symbol: "Ne", Name: "Neon", weight: 20},
  {line:3},
  {Number: 11, Symbol: "Na", Name: "Sodium", weight: 23},
  {Number: 12, Symbol: "Mg", Name: "Magnesium", weight: 24},
  {},{},{},{},{},{},{},{},{},{},
  {Number: 13, Symbol: "Al", Name: "Aluminum", weight: 27},
  {Number: 14, Symbol: "Si", Name: "Silicon", weight: 28},
  {Number: 15, Symbol: "P", Name: "Phosphorus", weight: 31},
  {Number: 16, Symbol: "S", Name: "Sulfur", weight: 32},
  {Number: 17, Symbol: "Cl", Name: "Chlorine", weight: 35},
  {Number: 18, Symbol: "Ar", Name: "Argon", weight: 40},
  {line:4},
  {Number: 19, Symbol: "K", Name: "Potassium", weight: 39},
  {Number: 20, Symbol: "Ca", Name: "Calcium", weight: 40},
  {Number: 21, Symbol: "Sc", Name: "Scandium", weight: 45},
  {Number: 22, Symbol: "Ti", Name: "Titanium", weight: 48},
  {Number: 23, Symbol: "V", Name: "Vanadium", weight: 51},
  {Number: 24, Symbol: "Cr", Name: "Chromium", weight: 52},
  {Number: 25, Symbol: "Mn", Name: "Manganese", weight: 55},
  {Number: 26, Symbol: "Fe", Name: "Iron", weight: 56},
  {Number: 27, Symbol: "Co", Name: "Cobalt", weight: 59},
  {Number: 28, Symbol: "Ni", Name: "Nickel", weight: 59},
  {Number: 29, Symbol: "Cu", Name: "Copper", weight: 63},
  {Number: 30, Symbol: "Zn", Name: "Zinc", weight: 65},
  {Number: 31, Symbol: "Ga", Name: "Gallium", weight: 70},
  {Number: 32, Symbol: "Ge", Name: "Germanium", weight: 73},
  {Number: 33, Symbol: "As", Name: "Arsenic", weight: 75},
  {Number: 34, Symbol: "Se", Name: "Selenium", weight: 79},
  {Number: 35, Symbol: "Br", Name: "Bromine", weight: 80},
  {Number: 36, Symbol: "Kr", Name: "Krypton", weight: 84},
  {line:5},
  {Number: 37, Symbol: "Rb", Name: "Rubidium", weight: 85},
  {Number: 38, Symbol: "Sr", Name: "Strontium", weight: 88},
  {Number: 39, Symbol: "Y", Name: "Yttrium", weight: 89},
  {Number: 40, Symbol: "Zr", Name: "Zirconium", weight: 91},
  {Number: 41, Symbol: "Nb", Name: "Niobium", weight: 93},
  {Number: 42, Symbol: "Mo", Name: "Molybdenum", weight: 96},
  {Number: 43, Symbol: "Tc", Name: "Technetium", weight: 98},
  {Number: 44, Symbol: "Ru", Name: "Ruthenium", weight: 101},
  {Number: 45, Symbol: "Rh", Name: "Rhodium", weight: 102},
  {Number: 46, Symbol: "Pd", Name: "Palladium", weight: 106},
  {Number: 47, Symbol: "Ag", Name: "Silver", weight: 108},
  {Number: 48, Symbol: "Cd", Name: "Cadmium", weight: 112},
  {Number: 49, Symbol: "In", Name: "Indium", weight: 115},
  {Number: 50, Symbol: "Sn", Name: "Tin", weight: 119},
  {Number: 51, Symbol: "Sb", Name: "Antimony", weight: 122},
  {Number: 52, Symbol: "Te", Name: "Tellurium", weight: 128},
  {Number: 53, Symbol: "I", Name: "Iodine", weight: 127},
  {Number: 54, Symbol: "Xe", Name: "Xenon", weight: 131},
  {line:6},
  {Number: 55, Symbol: "Cs", Name: "Cesium", weight: 133},
  {Number: 56, Symbol: "Ba", Name: "Barium", weight: 137},
  {},
  {Number: 72, Symbol: "Hf", Name: "Hafnium", weight: 178},
  {Number: 73, Symbol: "Ta", Name: "Tantalum", weight: 181},
  {Number: 74, Symbol: "W", Name: "Tungsten", weight: 184},
  {Number: 75, Symbol: "Re", Name: "Rhenium", weight: 186},
  {Number: 76, Symbol: "Os", Name: "Osmium", weight: 190},
  {Number: 77, Symbol: "Ir", Name: "Iridium", weight: 192},
  {Number: 78, Symbol: "Pt", Name: "Platinum", weight: 195},
  {Number: 79, Symbol: "Au", Name: "Gold", weight: 197},
  {Number: 80, Symbol: "Hg", Name: "Mercury", weight: 201},
  {Number: 81, Symbol: "Tl", Name: "Thallium", weight: 204},
  {Number: 82, Symbol: "Pb", Name: "Lead", weight: 207},
  {Number: 83, Symbol: "Bi", Name: "Bismuth", weight: 209},
  {Number: 84, Symbol: "Po", Name: "Polonium", weight: 209},
  {Number: 85, Symbol: "At", Name: "Astatine", weight: 210},
  {Number: 86, Symbol: "Rn", Name: "Radon", weight: 222},
  {line:7},
  {Number: 87, Symbol: "Fr", Name: "Francium", weight: 223},
  {Number: 88, Symbol: "Ra", Name: "Radium", weight: 226},
  {},
  {Number: 104, Symbol: "Rf", Name: "Rutherfordium", weight: 267},
  {Number: 105, Symbol: "Db", Name: "Dubnium", weight: 270},
  {Number: 106, Symbol: "Sg", Name: "Seaborgium", weight: 271},
  {Number: 107, Symbol: "Bh", Name: "Bohrium", weight: 270},
  {Number: 108, Symbol: "Hs", Name: "Hassium", weight: 277},
  {Number: 109, Symbol: "Mt", Name: "Meitnerium", weight: 276},
  {Number: 110, Symbol: "Ds", Name: "Darmstadtium", weight: 281},
  {Number: 111, Symbol: "Rg", Name: "Roentgenium", weight: 280},
  {Number: 112, Symbol: "Cn", Name: "Copernicium", weight: 285},
  {Number: 113, Symbol: "Nh", Name: "Nihonium", weight: 284},
  {Number: 114, Symbol: "Fl", Name: "Flerovium", weight: 289},
  {Number: 115, Symbol: "Mc", Name: "Moscovium", weight: 288},
  {Number: 116, Symbol: "Lv", Name: "Livermorium", weight: 293},
  {Number: 117, Symbol: "Ts", Name: "Tennessine", weight: 294},
  {Number: 118, Symbol: "Og", Name: "Oganesson", weight: 294},
  
  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
  {},{},{},
  {Number: 57, Symbol: "La", Name: "Lanthanum", weight: 139},
  {Number: 58, Symbol: "Ce", Name: "Cerium", weight: 140},
  {Number: 59, Symbol: "Pr", Name: "Praseodymium", weight: 141},
  {Number: 60, Symbol: "Nd", Name: "Neodymium", weight: 144},
  {Number: 61, Symbol: "Pm", Name: "Promethium", weight: 145},
  {Number: 62, Symbol: "Sm", Name: "Samarium", weight: 150},
  {Number: 63, Symbol: "Eu", Name: "Europium", weight: 152},
  {Number: 64, Symbol: "Gd", Name: "Gadolinium", weight: 157},
  {Number: 65, Symbol: "Tb", Name: "Terbium", weight: 159},
  {Number: 66, Symbol: "Dy", Name: "Dysprosium", weight: 163},
  {Number: 67, Symbol: "Ho", Name: "Holmium", weight: 165},
  {Number: 68, Symbol: "Er", Name: "Erbium", weight: 167},
  {Number: 69, Symbol: "Tm", Name: "Thulium", weight: 169},
  {Number: 70, Symbol: "Yb", Name: "Ytterbium", weight: 173},
  {Number: 71, Symbol: "Lu", Name: "Lutetium", weight: 175},
  {},{},{},{},
  {Number: 89, Symbol: "Ac", Name: "Actinium", weight: 227},
  {Number: 90, Symbol: "Th", Name: "Thorium", weight: 232},
  {Number: 91, Symbol: "Pa", Name: "Protactinium", weight: 231},
  {Number: 92, Symbol: "U", Name: "Uranium", weight: 238},
  {Number: 93, Symbol: "Np", Name: "Neptunium", weight: 237},
  {Number: 94, Symbol: "Pu", Name: "Plutonium", weight: 244},
  {Number: 95, Symbol: "Am", Name: "Americium", weight: 243},
  {Number: 96, Symbol: "Cm", Name: "Curium", weight: 247},
  {Number: 97, Symbol: "Bk", Name: "Berkelium", weight: 247},
  {Number: 98, Symbol: "Cf", Name: "Californium", weight: 251},
  {Number: 99, Symbol: "Es", Name: "Einsteinium", weight: 252},
  {Number: 100, Symbol: "Fm", Name: "Fermium", weight: 257},
  {Number: 101, Symbol: "Md", Name: "Mendelevium", weight: 258},
  {Number: 102, Symbol: "No", Name: "Nobelium", weight: 259},
  {Number: 103, Symbol: "Lr", Name: "Lawrencium", weight: 262},
  {}
];

//print ra cac nguyen to
const tableBody = document.querySelector('.periodicTable tbody');

let count = 0;
let tr = document.createElement('tr');
data.forEach(sub => {
    const td = document.createElement('td');
    td.classList.add('sub');
    const divNum = document.createElement('div');
    divNum.textContent = sub.Number;
    divNum.className = 'number';
    divNum.setAttribute('kl-kiem', ['3', '11', '19', '37', '55', '87'].includes(divNum.textContent));
    divNum.setAttribute('kl-kiem-tho', ['4', '12', '20', '38', '56', '88'].includes(divNum.textContent));
    divNum.setAttribute('kl-chuyen-tiep', ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '72', '73', '74', '75', '76', '77', '78', '79', '80', '104', '105', '106', '107'].includes(divNum.textContent));
    divNum.setAttribute('kl-yeu', ['13', '31', '49', '50', '81', '82','83',].includes(divNum.textContent));
    divNum.setAttribute('phi-kim', ['1', '6', '7', '8', '15','16','34'].includes(divNum.textContent));
    divNum.setAttribute('a-kim', ['5', '14', '32', '33', '51', '52','84'].includes(divNum.textContent));
    divNum.setAttribute('halogen', ['9', '17', '35', '53', '85'].includes(divNum.textContent));
    divNum.setAttribute('khi-hiem', ['2', '10', '18', '36', '54','86'].includes(divNum.textContent));
    divNum.setAttribute('unknown', ['108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118'].includes(divNum.textContent));
    divNum.setAttribute('lantan', ['57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71'].includes(divNum.textContent));
    divNum.setAttribute('actini', ['89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103'].includes(divNum.textContent));
    const divSym = document.createElement('div');
    divSym.textContent = sub.Symbol;
    divSym.className = 'symbol';
    const divName = document.createElement('div');
    divName.textContent = sub.Name;
    divName.className = 'name';
    const divWei = document.createElement('div');
    divWei.textContent = sub.weight;
    divWei.className = 'weight';

    td.appendChild(divNum);
    td.appendChild(divSym);
    td.appendChild(divName);
    td.appendChild(divWei);
    tr.appendChild(td);
    count++;
    if (sub.line != null) {
        td.classList.add('stcol');
        td.textContent = sub.line;
    }
    if (td.textContent.trim() === '') {
        td.classList.remove('sub');
    }
    if (divNum.getAttribute('kl-kiem') === 'true') {
        td.classList.add('klKiem');
    }
    if (divNum.getAttribute('kl-kiem-tho') === 'true') {
            td.classList.add('klKiemTho');
    }
    if (divNum.getAttribute('kl-chuyen-tiep') === 'true') {
            td.classList.add('KlChuyenTiep');
    }
    if (divNum.getAttribute('kl-yeu') === 'true') {
            td.classList.add('klYeu');
    }
    if (divNum.getAttribute('phi-kim') === 'true') {
        td.classList.add('phiKim');
    }
    if (divNum.getAttribute('a-kim') === 'true') {
        td.classList.add('aKim');
    }
    if (divNum.getAttribute('halogen') === 'true') {
            td.classList.add('halogen');
    }
    if (divNum.getAttribute('khi-hiem') === 'true') {
            td.classList.add('khiHiem');
    }
    if (divNum.getAttribute('unknown') === 'true') {
            td.classList.add('unknown');
    }
    if (divNum.getAttribute('lantan') === 'true') {
            td.classList.add('lantan');
    }
    if (divNum.getAttribute('actini') === 'true') {
            td.classList.add('actini');
    }
    if (count > 18) {
        count = 0;
        tableBody.appendChild(tr);
        tr = document.createElement('tr');
    }
});
if (count > 0) {
    // append the final row if it's not empty
    tableBody.appendChild(tr);
}


//doc ten cac nguyen to
const names = document.querySelectorAll('.name');

names.forEach((name) => {
    name.addEventListener('click', () => {
        //get index of name
        const nameIndex = Array.from(names).indexOf(name);
        const selectedName = names.item(nameIndex);
        
        //change voice
        // const voices = window.speechSynthesis.getVoices();
        // const englishVoice = voices.find(voice => voice.lang === 'en-US');
        // utterance.voice = englishVoice;

        //speak
        const utterance = new SpeechSynthesisUtterance(selectedName.textContent);
        window.speechSynthesis.speak(utterance);
    });
});

//them chi tiet cua cac nguyen to khi click
