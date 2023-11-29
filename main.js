document.querySelector('section').classList.add('featured');

// creating a new article element
const articleNew = document.createElement('article');

// the inner HTML for the new article
articleNew.innerHTML = `
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
      <a href="#">Read more...</a>
    </p>
  </aside>
`;

// adding the new article to the end of section.posts
document.querySelector('.posts').appendChild(articleNew);


const postsSection = document.querySelector('.posts');

// get ALL the articles from inside .posts section
const articles = postsSection.querySelectorAll('article');

// first article to become second article
postsSection.insertBefore(articles[1], articles[0]);

// second article to become first article
postsSection.insertBefore(articles[0], articles[2]);

// removing "All Posts" header
const allPostsLink = document.querySelector('nav ul li a');
allPostsLink.parentNode.removeChild(allPostsLink);

// removing span element "Read Time" in featured post
const featuredPost = document.querySelector('.featured');
const readTimeSpan = featuredPost.querySelector('span');
readTimeSpan.parentNode.removeChild(readTimeSpan);

// removing the last post "Stop Planning"
const lastPost = postsSection.lastElementChild;
lastPost.parentNode.removeChild(lastPost);

// removing titles from all non-featured posts
const nonFeaturedPosts = document.querySelectorAll('.posts article:not(.featured) h3');
nonFeaturedPosts.forEach(title => title.parentNode.removeChild(title));

