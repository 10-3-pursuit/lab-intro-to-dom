// Add a class of "featured" to the first section element on the page.
const firstSection = document.querySelector("section");
firstSection.classList.add("featured");


//Create the following article element with JavaScript and add at the end of the section.posts element.
const newArticle = document.createElement('article');
newArticle.innerHTML = `
  <img
    src="./images/paul-gilmore-unsplash.jpg"
    alt="Image of a mountain in front of a lake."
  />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span>
      <a href="#">Read more...</a>
    </p>
  </aside>
`;

// Select the section.posts element and append the new article
const sectionPosts = document.querySelector('section.posts');
sectionPosts.appendChild(newArticle);


/* Move the first article from inside the section.posts element to become the 
 second article and move the second article so that it is the first article. */
// Selecting the first and second article and swapping their values with outerHTML
const articles = sectionPosts.querySelectorAll('article');
[articles[0].outerHTML, articles[1].outerHTML] = [articles[1].outerHTML, articles[0].outerHTML];

// Remove the "All Posts" link from the header
const allPostsParent = document.querySelector('header ul');
const allPostsLink = document.querySelector('header li');
allPostsParent.removeChild(allPostsLink);

// Remove the span element that contains the "Read Time" 
//in the featured post. The featured post is the first post on the page.
const firstSpanParent = document.querySelector('aside p');
const firstSpan = document.querySelector('span');
firstSpanParent.removeChild(firstSpan)


// Remove the last post from the page, titled "Stop Planning".
const lastPost = sectionPosts.querySelector('article:last-child');
lastPost.remove();

//  Remove all titles from all non-featured posts.
const nonFeaturedArticles = sectionPosts.querySelectorAll('article:not(.featured)');
nonFeaturedArticles.forEach((article) => {
  const title = article.querySelector('h3');
  title.remove();
});

