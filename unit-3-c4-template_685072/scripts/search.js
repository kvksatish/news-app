// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navba from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navba


var serda = JSON.parse(localStorage.getItem("searchdata"))

console.log(serda)
printer(serda.articles)



function printer(data) {
    console.log(data)
    var appen = document.querySelector("#results")
    appen.innerHTML = ""
    data.map(function (ele) {



        let img = document.createElement("img")
        let title = document.createElement("h3")
        let dtl = document.createElement("p")





        img.src = `${ele.urlToImage}`
        title.innerText = `Title :${ele.title}`
        dtl.innerText = ele.description







        let cont = document.createElement("div")
        cont.setAttribute("id", "news")
        cont.append(img, title, dtl)

        cont.onclick = function () {
            dtttf(ele)
        }

        appen.append(cont)



    })
}

function dtttf(ele) {
    console.log(ele)
    localStorage.setItem("news", JSON.stringify(ele))
    window.location.href = "news.html"
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
