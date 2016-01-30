var quotes = [
  {quote:"The aren't the droids you are looking for", author:"Obi-wan kenobi"},
  {quote:"To be, or not to be", author:"William Shakespear"},
  {quote:"Everything should be made as simple as possible, but not simpler", author:"Albert Einstein"}
]

var quotesHTML = document.getElementById("quotes");
quotesHTML.innerHTML = "<ul>"
quotes.map(function(quote){
  quotesHTML.innerHTML +=  "<li>"+quote.author+" says, \""+quote.quote+"\"</li>"
})
  quotesHTML.innerHTML += "</ul>"
