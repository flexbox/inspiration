$(document).ready ->
  $.get "quotes.json", (data) ->
    quotes = data
    console.log data
    random = Math.floor(Math.random() * quotes.length)
    citation = quotes[random]
    $("#js-author").html citation.author
    $("#js-title").html citation.title
    if citation.twitter isnt "" or citation.twitter isnt `undefined`
      lien = "<a href=\"" + citation.url + "\">" + citation.twitter + "</a>"
      $("#js-twitter").append lien
    $("#js-content").fadeIn()
