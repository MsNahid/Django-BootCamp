// $('h1').click(function(){
//     console.log("There was a click!")
// })

// $('li').click(function(){
//     console.log("Any li was clicked!")
// })

// $('input').eq(0).keypress(function(){
//     // $('h3').toggleClass("turnBlue");
//     console.log(event);
// })

// $('h1').on("dblclick", function(){
//     $(this).toggleClass("turnBlue");
// })

// $('h1').on('mouseenter', function(){
//     $(this).toggleClass('turnBlue'); 
// })

// $('input').eq(1).on('click', function(){
//     $('.container').fadeOut(3000)
// })


$('input').eq(1).on('click', function(){
    $('.container').slideUp(3000);
})

