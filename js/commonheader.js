// This file was made by Ruben Ruiz 
function makeHeader() {
  // Create the elements
  var header     =  $("<div></div>").attr("class","header");
  var headertext = $("<h1></h1>").attr("class", "header");
  var link1      = $("<a></a>").attr({
    "href" : "https://git.rubenruiz.org",
    "class" : "header"
  });
  var link2      = $("<a></a>").attr({
    "href" : "https://pass.rubenruiz.org",
    "class" : "header"
  });
  
  // Assign Text Values
  headertext.text("Ruben Ruiz");
  link1.text("git repos");
  link2.text("password manager");
  
  // Add the elements to the header
  header.append(headertext);
  header.append(link1);
  header.append(link2);
  
  // Put it in the Body
  $("body").prepend(header);
  
}
