const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');
    if (header) {
        clearInterval(interval)

        const button = document.createElement('button')
        button.setAttribute('class', 'speedButton')
        button.innerHTML = '2X'

        let speedOn = false
        
        button.addEventListener('click', () => {
            speedOn === false ? speedOn = true : speedOn = false
            
            const audios = document.querySelectorAll('audio');

            if (speedOn){
                button.setAttribute('class', 'doubleSpeed')
                audios.forEach(audio => {
                    audio.playbackRate = 2
                });
            } else {
                button.removeAttribute('class', 'doubleSpeed')
                audios.forEach(audio => {
                    audio.playbackRate = 1
                });
            }
        })

        header.appendChild(button)
    }
    
}, 1000)