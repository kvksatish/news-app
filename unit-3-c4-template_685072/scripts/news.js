// Ude Import export (MANDATORY)
import navba from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navba

var ndd = JSON.parse(localStorage.getItem("news"))

console.log(ndd)

var appen = document.querySelector("#detailed_news")

printer(ndd)

function printer(ele) {

    appen.innerHTML = ""

    let img = document.createElement("img")
    let title = document.createElement("h3")
    let dtl = document.createElement("p")
    let contennes = document.createElement("p")





    img.src = `${ele.urlToImage}`
    title.innerText = `Title :${ele.title}`
    dtl.innerText = ele.description
    contennes.innerText = ele.content







    let cont = document.createElement("div")
    cont.setAttribute("id", "news")
    cont.append(img, title, dtl, contennes)

    appen.append(cont)

}

var sss = document.querySelector("#search_input")

sss.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searcherfun()
    }
});

function searcherfun() {
    event.preventDefault();

    console.log(sss.value)
    news(sss.value)
    async function news(query) {


        try {


            let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query} `)
            const data = await res.json();



            console.log(data)

            localStorage.setItem("searchdata", JSON.stringify(data))
            window.location.href = "search.html"


        } catch (err) {
            console.log("err")
        }
    }


}
