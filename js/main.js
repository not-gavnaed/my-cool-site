var arr = ["W_sKgm0xKoI", "mYlIw9HpqAM", "blgmjOBQi5Y"];

function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

var randomString = getRandomElement(arr);



const id = randomString;
const btn = document.getElementById('btn')
const back = document.getElementsByClassName('start')[0]
const info = document.getElementsByClassName('info')[0]

YT.ready((event=> {
    window.player = new YT.Player('player',{
        videoId: id,
        playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1, 
            playlist: id
        }, 
        events: {
            onReady: event => {
                event.target.setVolume(10)
                btn.addEventListener('click',()=>{
                    player.playVideo()
                    player.unMute()
                    btn.id='none'
                    // back.style.opacity = '0.8'
                    back.style.backgroundColor = `rgba(0,0,0,0.6)`
                    info.id = ''

                    btn.innerText=''
                })
            }
        }
        
    })
}))

// const nick = ['𝙦𝙪𝙞𝙯','𝙦𝙪𝙞','𝙦𝙪','𝙦','𝙦𝙪','𝙦𝙪𝙞']
// let i = 0
// setInterval(()=> {
//     document.title=nick[i]
//     if (i==5) {
//         i = 0
//     } else {
//         i++
//     }
// },250)