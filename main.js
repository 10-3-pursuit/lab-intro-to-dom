const section = document.querySelector('section')
section.classList.add('featured')

const article = document.createElement('article')

const image = document.createElement('img')
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."
article.append(image)

const headerThree = document.createElement('h3')
headerThree.innerText = 'Stop Planning'
article.append(headerThree)

const paragraph = document.createElement('p')
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph)

const aside = document.createElement('aside')
const paragraph2 = document.createElement('p')
const span = document.createElement('span')
const strong = document.createElement('strong')
span.innerText = ' 4 Minutes'
strong.innerText = 'Read Time:'
span.prepend(strong)
paragraph2.append(span)
const anchor = document.createElement('a')
anchor.href = '#'
anchor.innerText = 'Read more...'
paragraph2.append(anchor)
aside.append(paragraph2)
article.append(aside)

const posts = document.querySelector('.posts')
posts.append(article)

// const secondArticle = posts.splice(1, 1)
// posts.prepend(secondArticle)
// console.log(post)