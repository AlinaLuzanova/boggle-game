const btn = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clearBtn')

btn.forEach((btn)=>{
    btn.addEventListener('mousedown',selectWord );
    //btn.addEventListener('mouseup',hideSelection)
})
let word = ''
function selectWord(event){
    const targetElement = event.target;
    targetElement.classList.add('pressed');
    word+=targetElement.innerText
    if(targetElement.nextElementSibling){
        targetElement.nextElementSibling.addEventListener('mouseover',()=>{
            targetElement.nextElementSibling.classList.add('pressed')
        })

        this.nextElementSibling.addEventListener('mouseout',()=>{
            this.nextElementSibling.classList.remove('pressed')
            this.classList.remove('pressed')
        })
    }
    console.log(word)
}

function hideSelection(){

}

clearBtn.addEventListener('click',()=>{
    window.location.reload()
})
