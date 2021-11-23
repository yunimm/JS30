(function() {
  window.addEventListener('keydown', playHandler)

  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', resetTransition)
  
  })

  function playHandler(e) {
    const dom = document.querySelector(`div[data-key='${e.keyCode}']`)
      dom.classList.add('playing')

    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    audio.play()
    audio.currentTime = 0 
  }

  function resetTransition(e) {
    if(e.propertyName === 'transform') {
      e.currentTarget.classList.remove('playing')
    }
  }

})()



