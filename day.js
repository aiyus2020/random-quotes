const api_url = "https://api.quotable.io/random";
async function getApi(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
}
getApi(api_url);

const quote = document.getElementById("quote");
const author = document.getElementById("author");

// function facebook() {
//   // Encode the content
//   var encodedQuote = encodeURIComponent(quote);

//   // Construct the Facebook share URL
//   var fbShareUrl = `https://facebook.com/sharer/sharer.php?u= ${quote.innerHTML}`;

//   // Open the share dialog
//   window.open(fbShareUrl, "facebook-share-dialog", "width=600,height=300");
// }
function tweet() {
  var quote = document.getElementById("quote"); // Adjust this selector to match your quote element
  var author = document.getElementById("author"); // Adjust this selector to match your author element
  var quoteContent = quote.innerHTML;
  var authorContent = author.innerHTML;

  // Encode the content
  var encodedQuote = encodeURIComponent(quoteContent);
  var encodedAuthor = encodeURIComponent("---- " + authorContent);

  // Construct the Twitter share URL
  var tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    encodedQuote +
    "%20%20%20%20" +
    encodedAuthor;

  // Open the share dialog
  window.open(tweetUrl, "twitter-share-dialog", "width=600,height=300");
}
