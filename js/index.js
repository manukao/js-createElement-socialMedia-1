console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// Create the post container element
const postContainer = document.createElement("article");
const postContent = document.createElement("p");
const postFooter = document.createElement("footer");
const postUsername = document.createElement("span");
const postButton = document.createElement("button");

postContainer.className = "post";
postContent.className = "post__content";
postContent.textContent = "So würde ich das niemals machen, glaube ich.";
postFooter.className = "post__footer";
postUsername.className = "post__username";
postUsername.textContent = "@unam";
postButton.className = "post__button";
postButton.setAttribute("type", "button");
postButton.setAttribute("data-js", "like-button");
postButton.textContent = "♥ Like";
postFooter.appendChild(postUsername);
postFooter.appendChild(postButton);
postContainer.appendChild(postContent);
postContainer.appendChild(postFooter);
document.body.appendChild(postContainer);
postButton.addEventListener("click", handleLikeButtonClick);
