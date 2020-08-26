// querySelector()
var firstPTag = document.querySelector("body p");
firstPTag.style.color = "blue";

// querySelectorAll()
var articleTags = document.querySelectorAll("body article");
 for ( var index = 0; index < articleTags.length; index++) {
    articleTags[index].style.color = "red";
    articleTags[index].style.textAlign = "center";
    articleTags[index].style.fontSize = "25px";

}

// getElementById()
var fancyHeader = document.getElementById ("fancy-header");
fancyHeader.style.color = "green"; 
fancyHeader.style.textAlign = "center";
fancyHeader.style.fontwidth = "bold";
fancyHeader.style.fontSize = "50px";
fancyHeader.style.border = "solid 5px black";

//getElementsByClassName()
var fancySubHeader = document.getElementsByClassName ("fancy-subheader");
for ( var index = 0; index < fancySubHeader.length; index++) {
    fancySubHeader[index].style.color = "purple";
    fancySubHeader[index].style.textAlign = "center";
}

//getElementsByTagName()
var boldText = document.getElementsByTagName ("b");
for (var index = 0; index < boldText.length; index++) {
    boldText[index].style.fontSize = "25px";
    boldText[index].style.textDecoration = "underline";
}

// createElement()
var addParagraph = document.createElement ("p");
var parentElement = document.getElementById ("container");
parentElement.append(addParagraph)

// createTextNode()
var createText = document.createTextNode("This will put some text in my brand new p tag! This text is not in the HTML only in the Javascript! COOL!");
addParagraph.appendChild(createText);

// removeChild ()
var parentDiv = document.getElementById("cool-div");
var childP = document.getElementById ("child-p");
var deleteText = parentDiv.removeChild(childP);

// classList add()
var owlImage = document.getElementById("owl");
owlImage.classList.add ("floatimage");

//classList remove()
var owlImage = document.getElementById("owl2");
owlImage.classList.add("floatimage");

var owlImage = document.getElementById("owl2");
owlImage.classList.remove("floatimage");

//classList toggle()

var owlImage = document.getElementById("owl3");
owlImage.classList.toggle("floatimageleft");