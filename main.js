const sections = document.querySelectorAll("section");

sections[0].classList.add("featured")


const article = document.createElement('article');
const img = document.createElement('img')
const headerThree = document.createElement("h3")
const para = document.createElement("p")
const aside = document.createElement("aside")
const secPara = document.createElement("p")


article.append(img)
article.append(headerThree)
article.append(para)
article.append(aside)
aside.append(secPara)


// img, h3, p, secp

img.src = "/images/paul-gilmore-unsplash.jpg"
img.alt = "Image of a mountain in front of a lake."

headerThree.innerText = "Stop Planning"

para.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`


const span = document.createElement("span")
const strong = document.createElement("strong");

strong.innerText = "Read Time:"

span.appendChild(strong)

span.appendChild(document.createTextNode("4 Minutes"));

secPara.append(span)

console.log(article)


const a = document.createElement("a")
a.href = "#"
a.innerHTML = "Read more..."

secPara.append(a)

sections[1].append(article)

const main = document.querySelector("main");
main.append(sections[0])


const link = document.querySelector('a');
link.remove()


span.remove()
article.remove()  


var articles = document.querySelectorAll('article');


for (var i = 0; i < articles.length; i++) {
    if (!articles[i].closest('.featured')) {
        var headers = articles[i].querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (var j = 0; j < headers.length; j++) {
            headers[j].parentNode.removeChild(headers[j]);
        }
    }
}
