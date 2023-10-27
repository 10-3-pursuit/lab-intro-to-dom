const sections = document.querySelectorAll("section");

// Add a class of "featured" to the first section element on the page.
sections[0].classList.add("featured")

// Create the following article element with JavaScript and add at the end of the section.posts element.
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

// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
const main = document.querySelector("main");
main.append(sections[0])

//Remove the "All Posts" link from the header.
const link = document.querySelector('a');
link.remove()

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
span.remove()

// Remove the last post from the page, titled "Stop Planning".
article.remove()  

// Remove all titles from all non-featured posts.
var articles = document.querySelectorAll('article');


for (var i = 0; i < articles.length; i++) {
    if (!articles[i].closest('.featured')) {
        var headers = articles[i].querySelectorAll('h1, h2, h3, h4, h5, h6');
        for (var j = 0; j < headers.length; j++) {
            headers[j].parentNode.removeChild(headers[j]);
        }
    }
}
