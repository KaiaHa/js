function hello(){
    console.log("works")
}
var heading = document.querySelector('h2');
var customHeader ="something";
heading.textContent= customHeader;

var number1 = 2;
var number2 = 3;
var text = 'fancy shit du ikke kan forstå';
var myList = ["zero", "one", "two"];
var myObject ={};

function multiplyByTwo(n1, n2) {
    var val = n2 + n1;
   return val * 2;
}

function add_dickbutt() {
    var src = "https://media.giphy.com/media/L9QkVPAni1v3i/giphy.gif";
    show_image("https://media.giphy.com/media/L9QkVPAni1v3i/giphy.gif", 276,110, "dickbutt");
    

}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}

function addText(){
    var el = document.getElementById('addText');
        if (el.innerHTML === "rofl"){
            (el.innerHTML = null)
    }
    else{
        el.innerHTML = "rofla"
    }
}