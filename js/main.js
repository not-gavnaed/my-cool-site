var arr = ["mYlIw9HpqAM", "QNrG0WMtcKM", "dtYW3Kg53o0", "9zmgkR_SAGI", "bTjmr4GN5ag"];

function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

var randomString = getRandomElement(arr);



const id = randomString;
const btn = document.getElementById('btn')
const back = document.getElementsByClassName('start')[0]
const info = document.getElementsByClassName('info')[0]

var texts = [
            "Лишь утратив всё до конца, мы обретаем свободу",
            "Наше прошлое - это уже только история. И как только вы это осознаете, оно больше не имеет власти над вами",
            "Потребители. Мы - побочный продукт этого жизненного стиля. Война, голод - все это не интересует меня. А интересуют меня знаменитости и скандалы, телевизор, где 500 каналов, имя какого-то парня на моих трусах",
            "Все наши самые смелые мечты разбиваются о реальности мира",
            "Я сам себя создал, сам себе все подчинил",
            "Эконом Яндекс.Такси, но я вернусь на Ауди. Я вернусь из ада. На горящей чёрной Мазде",
            "Если есть путь — он окольный. Бог бережёт бережёного. Но по мне звонят колокольни",
            "Из моей плоти, из моей крови, из моих денег и боли.Чёрт, забери моё золото. Золото из мозолей",
            "Позволял связкам все звуки. Позволял всё, кроме воя. Да, я игрок на поле. Помяни моё лихое",
            "Можешь всё забрать, но только не мою надежду. Тяжёлое время — все мои чувства стали вперемешку. Я сходил с ума, думая, что найду в тебе поддержку"
        ];

        // Функция для вывода случайного текста из массива
        function showRandomText() {
            // Получение случайного индекса элемента массива
            var randomIndex2 = Math.floor(Math.random() * texts.length);

            // Получение случайного текста из массива
            var randomText = texts[randomIndex2];

            // Вывод случайного текста на веб-страницу
            document.getElementById("output").textContent = randomText;
        }
        showRandomText();

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