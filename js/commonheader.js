// This file was made by Ruben Ruiz 
function makeHeader() {
  var header =  $("<div></div>").attr("class","header");
  var link1 = $("<a></a>").attr({
    "href" : "https://git.rubenruiz.org",
    "class" : "header"
  }).text("git repos");
  $("body").prepend(header);
  $("div.header").append(link1);
}
