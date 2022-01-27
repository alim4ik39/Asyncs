// Promise================
// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('preparing data ...');
//         const backendData={
//             server:'FFFF',
//             port:20000,
//             status:'500 - server is not working'
//         }
//         // resolve(backendData)
//         reject(backendData)
//     },2000)
// })


// p
// .then((data)=>console.log('OK',data))
// .catch((err)=>{
//     console.log('ERROR',err)
// })
// .finally((data)=>console.log('Finall answer'))

// HTTP methods==========
// CRUD  operations====== CREATE READ UPDATE DELETE
// GET (запрос для получения информации из бэкенда)
// POST (запрос для отправления информации из бэкенда)
// PUT PATCH(редактирование данных)
// DELETE(удаление данных)

// HTTP STATUS======== Hyper text transmition protocol
// 200-OK -correct
// 300-перенаправление
// 400-ошибка во фронтеэнде-неправильный из-за вас
// 500-ошибка сервера


// =======ASYNC==AWAIT==FETCH======

// const search=async()=>{
//     let url='http://youtube.com'
//     let request=await fetch (url)
//     let response=await request.json()
//     console.log(response);
// }
// ===================================


// const API = 'https://api.giphy.com/v1/gifs/search?api_key='

// const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'

// const secondStr = '&limit=25&q='

// let input, btn, output
// input=document.getElementById('input')
// btn=document.getElementById('btn')
// output=document.getElementById('output')

// const searchGiphy=async()=>{
//     let text=input.value
//     let url=API+KEY+secondStr+text
//     let request=await fetch(url)
//     let response=await request.json()
//     console.log(response)
// }

// btn.addEventListener('click',()=>{
//     searchGiphy()
// })


// Promise =====================
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('preparing data ...');
//         const backendData = {
//             server : 'FFFF',
//             port: 20000,
//             status: '500 - server is not working'
//         }
//         // resolve(backendData)
//         reject(backendData)
//     }, 2000)
// })

// p
// .then((data)=> console.log('OK', data))
// .catch((err)=>{
//     console.error('ERROR', err)
// })
// .finally((data)=>console.log('Finall answer'))



// HTTP methods===========================
// CRUD operations====== CREATE READ UPDATE DELETE
// GET (запрос для получения информации из бэкенда)
// POST (запрос для отправления информации в бэкенд)
// PUT PATCH (редактирование данных)
// DELETE (удаление данных)

// HTTP status====================Hyper text transmition protocol
// 200 - OK - correct
// 300 - перенаправление
// 400 - ошибка во фронтенде - неправильный запрос
// 500 - ошибка сервера

// =========ASYNC==AWAIT==FETCH====================

// const search = async()=>{
//     let url = 'http://youtube.com'
//     let request = await fetch(url)
//     let response = await request.json()
//     console.log(response);
// }
// ====================================================


// Promise =====================
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('preparing data ...');
//         const backendData = {
//             server : 'FFFF',
//             port: 20000,
//             status: '500 - server is not working'
//         }
//         // resolve(backendData)
//         reject(backendData)
//     }, 2000)
// })

// p
// .then((data)=> console.log('OK', data))
// .catch((err)=>{
//     console.error('ERROR', err)
// })
// .finally((data)=>console.log('Finall answer'))

// HTTP methods===========================
// CRUD operations====== CREATE READ UPDATE DELETE
// GET (запрос для получения информации из бэкенда)
// POST (запрос для отправления информации в бэкенд)
// PUT PATCH (редактирование данных)
// DELETE (удаление данных)

// HTTP status====================Hyper text transmition protocol
// 200 - OK - correct
// 300 - перенаправление
// 400 - ошибка во фронтенде - неправильный запрос
// 500 - ошибка сервера

// =========ASYNC==AWAIT==FETCH====================

// const search = async()=>{
//     let url = 'http://youtube.com'
//     let request = await fetch(url)
//     let response = await request.json()
//     console.log(response);
// }
// ====================================================

const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const KEY = 'sTdCJjIAUz2fNDMUob8nqHx6G50HnUzP'
const secondStr = '&limit=25&q='

let input, btn, output
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')
let img=document.createElement('img')
img.src='./cs.jpg'
const searchGiphy = async (e) => {
    
  let text = input.value
  let url = API + KEY + secondStr + text
  let requset = await fetch(url)
  let response = await requset.json()
  input.value =''
  console.log(response.data)
  renderGiphy(response.data)
  
}

const renderGiphy = (data) => {
    output.innerHTML=``
    data.forEach((el) => {
    let div = document.createElement('div')
    let iframe = document.createElement('iframe')
    let h5 = document.createElement('h5')
    h5.innerHTML = el.title
    iframe.src = el.embed_url
    div.append(h5, iframe)
    output.append(div)
  })
}

btn.addEventListener('click', () => {
  searchGiphy()
})

output.style.cssText=`

`
