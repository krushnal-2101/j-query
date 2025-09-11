
$("document").ready(() =>{
    $("#hide").click(() =>{
        $("#img").hide()
    })

    $("#show").click(() =>{
        $("#img").show()
    })

    $("#toggle").click(() =>{
        $("#img").toggle()
    })

    $("#fade-in").click(() =>{
        $("#img").fadeIn(2000)
    })

    $("#fade-out").click(() =>{
        $("#img").fadeOut(2000)
    })

   $("#fade-toggle").click(() =>{
        $("#img").fadeToggle(2000)
    })

    $("#slide-up").click(() =>{
        $("#img").slideUp(2000)
    })

    $("#slide-down").click(() =>{
        $("#img").slideDown(2000)
    })

    $("#slide-toggle").click(() =>{
        $("#img").slideToggle(2000)
    })

    $("#stop").click(() =>{
        $("#img").stop(2000)
    })
})