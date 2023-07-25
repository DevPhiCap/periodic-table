const names = document.querySelectorAll('.name');
// const cells = document.querySelectorAll('td');

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

let cells = document.querySelectorAll('.cell');
let info = document.getElementById('info');

cells.forEach(cell => {  
  cell.addEventListener('click', () => {
    let cellInfo = cell.getAttribute('data-info');
    info.innerHTML = cellInfo;
    cell.classList.add('pinned');
  });
});
