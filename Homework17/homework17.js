
let model = document.querySelector('.modal-body')

//1-card
let div = document.createElement('div')
div.classList.add('new_div_class')


// card_img = document.querySelector('card-img-top')

let imgcreate = document.createElement('img')
imgcreate.setAttribute('src', 'https://www.notebookcheck.com/fileadmin/Notebooks/Apple/iPhone_13/4_zu_3_iphone_13.jpg')

let createp = document.createElement('p') 

createp.innerHTML = document.querySelector('.card-title').innerText

let deleteIcon = document.createElement('i')
deleteIcon.classList.add('fa-solid')
deleteIcon.classList.add('fa-trash')


function modalconnect(){
    div.appendChild(imgcreate)
    div.appendChild(createp)
    div.appendChild(deleteIcon)
    model.appendChild(div)
}

let btn = document.querySelector('.card_btn')
btn.addEventListener('click', modalconnect)


deleteIcon.addEventListener("click",()=>{
    div.remove()
})



//2-card

let secondDiv = document.createElement('div')
secondDiv.classList.add('new_div_class')


let imgcreate2 = document.createElement('img')
imgcreate2.setAttribute('src', 'https://www.renderhub.com/rever-art/samsung-galaxy-s21-5g-ultra-phantom-brown/samsung-galaxy-s21-5g-ultra-phantom-brown-15.jpg')

let createp2 = document.createElement('p')
createp2.innerHTML = document.querySelector('.card-title2').innerText

let deleteIcon2 = document.createElement('i')
deleteIcon2.classList.add('fa-solid')
deleteIcon2.classList.add('fa-trash')

function modalconnect2(){
    secondDiv.appendChild(imgcreate2)
    secondDiv.appendChild(createp2)
    secondDiv.appendChild(deleteIcon2)
    model.appendChild(secondDiv)
}

let btn2 = document.querySelector('.card_btn2')
btn2.addEventListener('click', modalconnect2)


deleteIcon2.addEventListener("click",()=>{
    secondDiv.remove()
})



//3-card

let thirddDiv = document.createElement('div')
thirddDiv.classList.add('new_div_class')


let imgcreate3 = document.createElement('img')
imgcreate3.setAttribute('src', 'https://i02.appmifile.com/976_operatorx_operatorx_opx/23/02/2024/c4866f7bdd20c6ed7acf6082417dd340.png?thumb=1&w=500&f=webp&q=85')

let createp3 = document.createElement('p')
createp3.innerHTML = document.querySelector('.card-title3').innerText

let deleteIcon3 = document.createElement('i')
deleteIcon3.classList.add('fa-solid')
deleteIcon3.classList.add('fa-trash')

function modalconnect3(){
    thirddDiv.appendChild(imgcreate3)
    thirddDiv.appendChild(createp3)
    thirddDiv.appendChild(deleteIcon3)
    model.appendChild(thirddDiv)
}

let btn3 = document.querySelector('.card_btn3')
btn3.addEventListener('click', modalconnect3)


deleteIcon3.addEventListener("click",()=>{
    thirddDiv.remove()
})


//4-card

let fourthDiv = document.createElement('div')
fourthDiv.classList.add('new_div_class')


let imgcreate4 = document.createElement('img')
imgcreate4.setAttribute('src', 'https://cdn.vox-cdn.com/thumbor/xROoqQAcCGao0kKU5wy2ROQ5bHY=/0x0:2000x1500/2000x1333/filters:focal(1000x750:1001x751)/cdn.vox-cdn.com/uploads/chorus_asset/file/23449848/Pixel_6a_3.jpg')

let createp4 = document.createElement('p')
createp4.innerHTML = document.querySelector('.card-title4').innerText

let deleteIcon4 = document.createElement('i')
deleteIcon4.classList.add('fa-solid')
deleteIcon4.classList.add('fa-trash')




function modalconnect4(){
    fourthDiv.appendChild(imgcreate4)
    fourthDiv.appendChild(createp4)
    fourthDiv.appendChild(deleteIcon4)
    model.appendChild(fourthDiv)
}

let btn4 = document.querySelector('.card_btn4')
btn4.addEventListener('click', modalconnect4)


deleteIcon4.addEventListener("click",()=>{
    fourthDiv.remove()
})









