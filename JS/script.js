// a
for(let i = 0; i < 10; i++){
let box = document.createElement('div')
let top_side = document.createElement('div')
let bot_side = document.createElement('div')
let icons = document.createElement('div')

let box_title = document.createElement('span')
let icon_text1 = document.createElement('span')
let icon_text2 = document.createElement('span')
let icon_text3 = document.createElement('span')

let desc = document.createElement('p')

let img = document.createElement('img')
let img_star = document.createElement('img')
let img_box = document.createElement('img')
let img_dollar = document.createElement('img')

let btn = document.createElement('button')

//b

icons.classList.add('icons')
box.classList.add('box')
top_side.classList.add('top_side')
bot_side.classList.add('bot_side')
box_title.classList.add('box_title')
icon_text1.classList.add('icon_text1')
icon_text2.classList.add('icon_text1')
icon_text3.classList.add('icon_text1')
desc.classList.add('desc')
img.classList.add('rykzak')
img_star.classList.add('img_star')
img_box.classList.add('img_box')
img_dollar.classList.add('img_dollar')
btn.classList.add('btn')

box_title.innerHTML = 'MEN’S CLOTHING (120)'
desc.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
icon_text1 = '109'
icon_text2 = '3,9'
icon_text3 = '120'
btn.innerHTML = 'В избранное'

img_star.src = './img/star.png'
img_box.src = './img/box.png'
img_dollar.src = './img/dollar.png'
img.src = './img/sumka.png'

//c

box.append(top_side, bot_side)
top_side.append(img)
bot_side.append(box_title, desc, icons, btn)
icons.append(img_dollar, icon_text1, img_star, icon_text2, img_box, icon_text3)

let wrap = document.querySelector('.wrap')
wrap.append(box)

}