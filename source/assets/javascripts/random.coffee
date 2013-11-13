burnOldQuote = ->
  $("#js-author").html ''
  $("#js-title").html ''
  $("#js-twitter").html ''
  $("#js-url").html ''

getMyQuote = ->
  $.get "quotes.json", (data) ->
    quotes = data
    random = Math.floor(Math.random() * quotes.length)
    citation = quotes[random]
    $("#js-author").html citation.author
    $("#js-title").html citation.title
    if citation.twitter != ""
      link = "<a href=\"http://twitter.com/" + citation.twitter + "\">" + "@" + citation.twitter + "</a>"
      $("#js-twitter").append link
    if citation.url != ""
      url = "<a href=\"" + citation.url + "\">Site internet</a>"
      $("#js-url").append url
    $("#js-content").fadeIn()


$(document).ready ->
  getMyQuote()
  $('.js-get-lucky').click ->
    burnOldQuote()
    getMyQuote()
