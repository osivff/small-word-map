const smallQuotes = [
    "Life is beautiful",
    "Life is hard",
    "Coding is life",
    "The most common way people give up their power is by thinking they don\'t have any"
]
const wordMap = {};

smallQuotes.forEach((quote) => {
    const words = quote.toLowerCase().split(" ");
    console.log(words);
    for(let i = 0; i < words.length -1; i++){
        let current = words[i];
        let next = words[i + 1];

        if(!wordMap[current]){
            wordMap[current] = [];
        }
        wordMap[current].push(next);
    }
});

function generateWord(wordMap, maxWords = 10){
    const keys = Object.keys(wordMap);
    let currentWord = keys[Math.floor(Math.random() * keys.length)]
    let sentence = [currentWord];

    for(let i = 0; i < maxWords; i++){
        const nextWords = wordMap[currentWord];

        if(!nextWords || nextWords.length === 0) break;

        const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
        sentence.push(nextWord);
        currentWord = nextWord;
    }
    const final = sentence.join(" ");
    return final.charAt(0).toUpperCase() + final.slice(1) + ".";
}
