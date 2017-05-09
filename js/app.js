
const notes = {
c:document.querySelector('#c_audio'),
d:document.querySelector('#d_audio'),
e:document.querySelector('#e_audio'),
f:document.querySelector('#f_audio'),
g:document.querySelector('#g_audio'),
a:document.querySelector('#a_audio'),
b:document.querySelector('#b_audio')
}
const keys = document.querySelectorAll('.key')

// keys[0].onclick = function(event){
// notes[event.target.id].play()
// }

for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function(event){
    notes[event.target.id].currentTime = 0
  notes[event.target.id].play()
  }
}

const keyCodes = {
 '97':'c',
'115':'d',
'100':'e',
'102':'f',
'103':'g',
'104':'a',
'106':'b'
}
document.addEventListener('keypress', function(event){
const note = keyCodes[event.keyCode]
notes[note].currentTime = 0
notes[note].play()
})
