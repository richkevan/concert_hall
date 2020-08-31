const cNote = document.getElementById('c-note')
const dNote = document.getElementById('d-note')
const eNote = document.getElementById('e-note')
const fNote = document.getElementById('f-note')
const gNote = document.getElementById('g-note')
const aNote = document.getElementById('a-note')
const bNote = document.getElementById('b-note')
const cSharp = document.getElementById('c-sharp')
const eFlat = document.getElementById('e-flat')
const fSharp = document.getElementById('f-sharp')
const gSharp = document.getElementById('g-sharp')
const bFlat = document.getElementById('b-flat')

const soundEffect = (source, noteKey) => {
    const soundEffect = document.createElement('audio')
    soundEffect.src = source
    noteKey.append(soundEffect)
    soundEffect.play()
}

document.addEventListener('keydown',function(event)  {
    console.log(event.keyCode, event.key)
    switch (event.key) {
        case 'a':
           soundEffect('./sounds/piano-c.wav', cNote)
            break;
        case 'w':
            soundEffect('./sounds/piano-csharp.wav', cSharp)
            break;
        case 's':
            soundEffect('./sounds/piano-d.wav', dNote)
            break;
        case 'e':
            soundEffect('./sounds/piano-eflat.wav', eFlat)
            break;
        case 'd':
            soundEffect('./sounds/piano-e.wav',eNote)
            break;
        case 'f':
            soundEffect('./sounds/piano-f.wav', fNote)
            break;
        case 't':
            soundEffect('./sounds/piano-fsharp.wav', fSharp)
            break;
        case 'g':
            soundEffect('./sounds/piano-g.wav', gNote)
            break;
        case 'y':
            soundEffect('./sounds/piano-gsharp.wav', gSharp)
            break;
        case 'h':
            soundEffect('./sounds/piano-a.wav', aNote)
            break;
        case 'u':
            soundEffect('./sounds/piano-bflat.wav', bFlat)
            break;
        case 'j':
            soundEffect('./sounds/piano-b.wav', bNote)
        default:
            break;
    }
})