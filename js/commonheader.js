// This file was made by Ruben Ruiz 
function makeHeader() {
  var header =  $("<div></div>").attr("class","header");
  var headertext     = $("<h1></h1>").attr("class", "header");
  $(headertext).text("Ruben Ruiz");
  var link1  = $("<a></a>").attr({
    "href" : "https://git.rubenruiz.org",
    "class" : "header"
  }).text("git repos");
  $("body").prepend(header);
  $("div.header").append(headertext);
  $("div.header").append(link1);
}
