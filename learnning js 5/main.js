let urls = []
const inputurl = document.getElementById("inputText")
const inputBtn = document.getElementById("savebtn")
const listeText = document.getElementById("liste")
const deleteBtn = document.getElementById("delete")
const tabBtn = document.getElementById("savetabbtn")

// get data from local storage
let urlslocalstorage = JSON.parse(localStorage.getItem("urls"))

if(urlslocalstorage){
    urls = urlslocalstorage
    pushurls(urls)
}

inputBtn.addEventListener("click",function (){
    urls.push(inputurl.value)
    inputurl.value = ""
    //
    localStorage.setItem("urls" ,JSON.stringify(urls))
    pushurls(urls)
})
// thats all see you guys in new projects

deleteBtn.addEventListener("dblclick" , function() {
    localStorage.clear()
    urls = []
    pushurls(urls)
})

// when u get the API from chrome or edge .. u wont need this tab u ll work just with the tabs list in ur browser 
// const tabs = [
//     {url : "wwww.system/LB/Programming.com"}
// ]

tabBtn.addEventListener("click", function(){
    // grap urls from ur browser dependes on which browser u work on (just googlr it)
    //for brave its the same as chrome
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
        urls.push(tabs[0].url)
        localStorage.setItem("urls" ,JSON.stringify(urls))
        pushurls(urls) // u can find it on google stack overflow or just chatgpt
    })
})

function pushurls(links){
    items = ""

    for(let i=0;i<links.length;i++){
        items +="<li> <a href = '"+ links[i] +"' target='_blank'>"+ links[i] +"</a></li>" 
    }
    listeText.innerHTML = items
}

