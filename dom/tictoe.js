var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");


one.addEventListener("click", function(){
    one.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

two.addEventListener("click", function(){
    two.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

three.addEventListener("click", function(){
    three.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

four.addEventListener("click", function(){
    four.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

five.addEventListener("click", function(){
    five.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

six.addEventListener("click", function(){
    six.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

seven.addEventListener("click", function(){
    seven.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

eight.addEventListener("click", function(){
    eight.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

nine.addEventListener("click", function(){
    nine.innerHTML = "<strong style='font-size:40px;'>x</strong>";
})

// .........................................

one.addEventListener("dblclick", function(){
    // one.textContent= "o";
    one.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

two.addEventListener("dblclick", function(){
    two.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

three.addEventListener("dblclick", function(){
    three.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

four.addEventListener("dblclick", function(){
    four.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

five.addEventListener("dblclick", function(){
    five.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

six.addEventListener("dblclick", function(){
    six.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

seven.addEventListener("dblclick", function(){
    seven.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

eight.addEventListener("dblclick", function(){
    eight.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

nine.addEventListener("dblclick", function(){
    nine.innerHTML = "<strong style='font-size:40px;'>O</strong>";
})

// restart

var restarty = document.querySelector(".restart");
restarty.addEventListener("click", function(){
    one.textContent = "";
    two.textContent = "";
    three.textContent ="";
    four.textContent = "";
    five.textContent = "";
    six.textContent = "";
    seven.textContent = "";
    eight.textContent ="";
    nine.textContent = "";

})