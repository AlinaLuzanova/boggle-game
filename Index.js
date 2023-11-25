const btn = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clearBtn')

btn.forEach((btn)=>{
    btn.addEventListener('mousedown',selectWord );
    //btn.addEventListener('mouseup',hideSelection)
})
let word = ''
function selectWord(event) {

    let targetElement = event.target;
    targetElement.classList.add('pressed');
    word += targetElement.innerText;
    let index = Array.from(targetElement.parentElement.children).indexOf(targetElement);

    if (targetElement.nextElementSibling) {
        targetElement.nextElementSibling.addEventListener('mouseover', handleMouseOver);
    }

    if (targetElement.parentElement.nextElementSibling){
        targetElement.parentElement.nextElementSibling.children[index].addEventListener('mouseover', handleMouseOver);
        //targetElement.parentElement.nextElementSibling.children[index+1].addEventListener('mouseover', handleMouseOver);

    }

    //console.log(word);
}

function handleMouseOver(event) {

    let targetElement = event.target;
    targetElement.classList.add('pressed');
    word += targetElement.innerText;

    let index = Array.from(targetElement.parentElement.children).indexOf(targetElement);

    if (targetElement.nextElementSibling) {
        targetElement.nextElementSibling.addEventListener('mouseover', handleMouseOver);
    }
    //console.log(targetElement.parentElement.nextElementSibling.children[index])
    if (targetElement.parentElement.nextElementSibling){
        targetElement.parentElement.nextElementSibling.children[index].addEventListener('mouseover', handleMouseOver)
    }

   // console.log(word);
}

function hideSelection(){

}

clearBtn.addEventListener('click',()=>{
    window.location.reload()
})
