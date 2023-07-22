const cells = document.querySelectorAll('.name');

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        //get index of cell
        const cellIndex = Array.from(cells).indexOf(cell);
        const selectedCell = cells.item(cellIndex);
        const utterance = new SpeechSynthesisUtterance(selectedCell.textContent);

        //change voice
        // const voices = window.speechSynthesis.getVoices();
        // const englishVoice = voices.find(voice => voice.lang === 'en-US');
        // utterance.voice = englishVoice;

        //speak
        window.speechSynthesis.speak(utterance);
    });
});