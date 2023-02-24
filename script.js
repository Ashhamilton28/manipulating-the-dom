let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.getElementById("main-title")
  mainTitle.innerHTML = "Welcome to the DOM Homepage"



  // Part 2
  let theBody = document.querySelector('body')
  theBody.style.backgroundColor = '#3A1078'

  // Part 3
  // let domsFavoriteThings = document.querySelector('ul.last-child')
  let domsFavoriteThings = document.getElementById('favorite-things');

  domsFavoriteThings.removeChild(domsFavoriteThings.lastElementChild)
  console.log(domsFavoriteThings)

  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')
  console.log(specialTitle)
  specialTitle.forEach(element => {
    element.style.fontSize = '2rem'
  })

  // Part 5
  let pastRaces = document.getElementById("past-races")
  let chi = pastRaces.children[3].remove
  console.log(chi)


  // Part 6
  let newLiForPastRaces = document.createElement('li')
  pastRaces.append(newLiForPastRaces)
  newLiForPastRaces.innerText = "NYC"

  // Part 7
  let mainDivWithBlogPosts = document.querySelector(".main")
  console.log(mainDivWithBlogPosts)
  const newDivForBlogPost = document.createElement('div')
  console.log(newDivForBlogPost)
  mainDivWithBlogPosts.appendChild(newDivForBlogPost)
  newDivForBlogPost.className = ".blog-post"
  const newH2ForBlogPost = document.createElement('h2')
  // console.log(newH2ForBlogPost)
  newDivForBlogPost.appendChild(newH2ForBlogPost)
  newH2ForBlogPost.innerHTML = "NYC"
  const newPForBlogPost = document.createElement('p')
  // console.log(newPForBlogPost)
  newDivForBlogPost.appendChild(newPForBlogPost)
  newPForBlogPost.innerHTML = "Drifted through the concrete jungle."



  // Part 8
  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
  let quoteOfTheDay = document.querySelector("#quote-of-the-day")
  console.log(quoteOfTheDay)
  quoteOfTheDay.addEventListener('click',function(){
    console.log('clicked')
  })



  // Part 9
  // Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

  // The mouseout handler should toggle the class .purple
  // The mouseenter handler should toggle the class .red


const blogPosts = document.querySelectorAll('.blog-post')
console.log(blogPosts)
for(let blogPost of blogPosts){
  console.log(blogPost)
  blogPost.addEventListener('mouseenter', function(){
    blogPost.classList.toggle("red")

  })
  blogPost.addEventListener('mouseout', function(){
   blogPost.classList.toggle("purple")

  })
}





});
