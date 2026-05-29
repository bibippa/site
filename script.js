console.log("読み込みました.");
const username = "OB";
const age = 22;

// console.log(username,age)

// const title = document.querySelector("#title");
// console.log(title)

// title.textContent = "変更済み";

// const btn = document.querySelector("#btn");
// const intro = document.querySelector("#profileText");

// // btn.addEventListener("click", ()=>{
// //     intro.textContent = "押したね。"
// // })

// const themeBtn = document.querySelector("#themeBtn");
// const profile = document.querySelector("#profile");

// profile.addEventListener("click", ()=>{
//     profile.classList.add("dark")
// })


const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");
const greeting = document.querySelector("#greeting");
const flag = 0;


greetBtn.addEventListener("click", ()=>{
    greeting.textContent = nameInput.value + "さんこんにちは。";
    const flag = 1;
})

const B = document.querySelector("#B");
const a = document.querySelector("#a");

B.addEventListener("click",()=>{
    a.classList.add("#hid");
    if(flag==1){
        a.classList.toggle("#hid");
    }
})