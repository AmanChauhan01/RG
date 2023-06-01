$(document).ready(function(){
    $(".about-wrap4 .row .col-md-4 a").click(function(e){
        e.preventDefault();
        var x=$(this).attr("href");
        $("body,html").animate({
            "scrollTop":$(x).offset().top
        })
    })
})


document.querySelector(".wrap2 .row .col-md-10 ul .log").addEventListener("click", function(){
    document.querySelector(".log-in").style.display="block";
})
document.querySelector(".cuts").addEventListener("click", function(){
    document.querySelector(".log-in").style.display="none";
})

$(document).ready(function(){
    $(".icon-but").click(function(){
        $(".wrap2 ul").toggle(500)
    })
})