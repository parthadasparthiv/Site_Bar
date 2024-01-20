// document.querySelector('button').addEventListener('click', ()=> {
//     alert()
// })

// $('button').click(()=> {
//     alert('I am functioned from JQ Code')
// })



$(document).ready(function() {
    // $('.hide').click(function() {
    //     $('.box').hide();
    // })

    // $('.show').click(function(){
    //     $('.box').show()
    // })

    // $('.toggle').click(function(){
    //     $('.box').toggle()
    // })

    // $('.fadeIn').click(function() {
    //     $('.box' ).fadeIn()
    // })
    // $('.fadeOut').click(function(){
    //     $('.box').fadeOut()
    // })


    $('.menuActive').click(function(){
        $('.dropMenu').slideToggle()
    })

    $('.collapse').click(function(){
        $('.menu').slideToggle()
    })

    $('.sidebarbtn').click(()=> {
        $('.sidebar').toggleClass('ml0')
    })

})

