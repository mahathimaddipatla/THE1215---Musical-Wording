const FREQUENCY=440;
        let note_context;
        let note_node;
        let gain_node;
        let audioContextInitialized = false;
        let DOT_TIME = 60;
        let DASH_TIME = DOT_TIME * 3;
        var SYMBOL_BREAK = DOT_TIME;
        var LETTER_BREAK = DOT_TIME * 3;
        var WORD_BREAK = DOT_TIME * 7;
        
        function initializeAudioContext() {
            note_context = new AudioContext();
            note_node = note_context.createOscillator();
            gain_node = note_context.createGain();
            note_node.frequency.value = FREQUENCY.toFixed(2);
            gain_node.gain.value = 0;
            note_node.connect(gain_node);
            gain_node.connect(note_context.destination);
            note_node.start();
            audioContextInitialized = true;
            SYMBOL_BREAK = DOT_TIME;
            LETTER_BREAK = DOT_TIME * 3;
            WORD_BREAK = DOT_TIME * 7;
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        function resetTiming() {
            DOT_TIME = 60;
            DASH_TIME = DOT_TIME * 3;
            SYMBOL_BREAK = DOT_TIME;
            LETTER_BREAK = DOT_TIME * 3;
            WORD_BREAK = DOT_TIME * 7;
        }


        function startNotePlaying() {
            // Pass a start time of 0 so it starts ramping up immediately.
            gain_node.gain.setTargetAtTime(0.1, 0, 0.001)
        }
        function stopNotePlaying() {
            // Pass a start time of 0 so it starts ramping down immediately.
            gain_node.gain.setTargetAtTime(0, 0, 0.001)
        }

        async function playDash(currentPlayCounter) {
            startNotePlaying();
            await sleep(DASH_TIME);
            stopNotePlaying();
        }
        
        async function playDot(currentPlayCounter) {
            startNotePlaying();
            await sleep(DOT_TIME);
            stopNotePlaying();
        }

        document.getElementById("playHigherOrderDogIsGood").addEventListener('mouseover', () => {
            if (!audioContextInitialized) {
                initializeAudioContext();
            }
            resetTiming();
            playDot();
        });
        document.getElementById("playHigherOrderDogIsGood").addEventListener('mouseover', () => {
            if (!audioContextInitialized) {
                initializeAudioContext();
            }
            resetTiming();
            playDash();
        });

        async function playLetter(letter) {
            if (!audioContextInitialized) {
                initializeAudioContext();
            }
            for (let i = 0; i < letter.length; i++) {
                if (letter[i] == '-') {
                    await playDash();
                }
                else if (letter[i] == '.') {
                    await playDot();
                }
                await sleep(SYMBOL_BREAK);
            }
        }


        async function playWord(word) {
            for (let i = 0; i < word.length; i++) {
                await playLetter(word[i]);
                console.log(word[i])
                await sleep(LETTER_BREAK);
            }
        }

        async function playSentence(sentence, currentPlayCounter) {
            for (let i = 0; i < sentence.length; i++) {
                await playWord(sentence[i], currentPlayCounter);
                await sleep(WORD_BREAK);
            }
        }

        const MORSE_MAP = {
            'a': '.-','b': '-...','c': '-.-.','d': '-..','e': '.','f': '..-.','g': '--.','h': '....','i': '..','j': '.---','k': '-.-',
            'l': '.-..','m': '--','n': '-.','o': '---','p': '.--.','q': '--.-','r': '.-.','s': '...','t': '-','u': '..-','v': '...-',
            'w': '.--','x': '-..-','y': '-.--','z': '--..'
        };
        // asciiChar is something like 'd'
        // Assumes [a-z0-9]
        function convertAsciiCharToMorse(asciiChar) {
            //console.log(MORSE_MAP[asciiChar]);
            return MORSE_MAP[asciiChar];
        }
        // asciiWord is something like 'dog'
        // Assumes [a-z0-9]
        function convertAsciiWordToMorse(asciiWord) {
            return asciiWord.split('').map(convertAsciiCharToMorse);
        }
        // asciiSentence is something like 'dog is good'
        // Assumes words are separated by spaces.
        function convertAsciiSentenceToMorse(asciiSentence) {
            let splitSentence = asciiSentence.toLowerCase().split(' ');
            let tide=splitSentence
            return splitSentence.map(convertAsciiWordToMorse);
        }

        document.getElementById('playHigherOrderDogIsGood').addEventListener('mouseover', () => {
            if (!audioContextInitialized) {
                initializeAudioContext();
            }
            //let targetString = document.getElementById("t1").value.toLowerCase();
            let targetString = sessionStorage.getItem("usertext").toLowerCase();
            let maid=targetString
            resetTiming();
            playSentence(convertAsciiSentenceToMorse(targetString));
            console.log(maid);
        });
