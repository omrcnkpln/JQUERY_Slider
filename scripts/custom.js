$yaziItems = $('.content-wrapper .content');
$imageItems = $('.image-wrapper li');
$header = $('header');
var i = 0;
r = $yaziItems.length;
$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->
    var interval;

    $("#btnUp").click(function () {
        // $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");
        addClassesToDown();
        clearInterval(interval);
        timer();
        changeHeaderBg();
        $("#stop").addClass("show").siblings().removeClass("show");
    })

    $("#stop").click(function () {
        clearInterval(interval);
        $("#play").addClass("show").siblings().removeClass("show");
        $("#time-bar").removeClass("time-bar-ani");
    });

    $("#play").click(function () {
        timer();
        $("#stop").addClass("show").siblings().removeClass("show");
    });

    $("#btnDown").click(function () {
        // $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");
        addClassesToTop();
        clearInterval(interval);
        timer();
        changeHeaderBg();
        $("#stop").addClass("show").siblings().removeClass("show");
    })

    setTimeout(() => {
        $("#time-bar").addClass("time-bar-ani");
    }, 1000);

    var timer = function () {
        interval = setInterval(function () {
            changeHeaderBg();
            addClassesToTop();

            $("#time-bar").removeClass("time-bar-ani");

            setTimeout(() => {
                $("#time-bar").addClass("time-bar-ani");
            }, 1000);
        }, 4000);

    };

    timer();


});

// <!-- _____________________________ yazıların hareketi _____________________________________________________________ -->
function addClassesToTop() {
    progressBar();
    $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");

    if (i == r - 1) {
        $yaziItems.eq(0).addClass("show comeFromBottom");
        $yaziItems.eq(r - 1).removeClass("comeFromBottom").addClass("goToTop");
        $yaziItems.eq(r - 2).removeClass("show comeFromBottom goToTop");
    } else {
        $yaziItems.eq(i + 1).addClass("show comeFromBottom");
        $yaziItems.eq(i).addClass("goToTop").removeClass("comeFromBottom");
        $yaziItems.eq(i - 1).removeClass("show comeFromBottom goToTop");
    }
    // if (i == 4) {
    //     $yaziItems.eq(0).addClass("show comeFromBottom");
    //     $yaziItems.eq(4).removeClass("comeFromBottom").addClass("goToTop");
    //     $yaziItems.eq(3).removeClass("show comeFromBottom goToTop");
    // } else {
    //     $yaziItems.eq(i + 1).addClass("show comeFromBottom");
    //     $yaziItems.eq(i).addClass("goToTop").removeClass("comeFromBottom");
    //     $yaziItems.eq(i - 1).removeClass("show comeFromBottom goToTop");
    // }


    $imageItems.each(function () {
        if ($(this).hasClass("image-from-top") || $(this).hasClass("image-from-top-reverse")) {
            $(this).addClass("previous").removeClass("image-from-top image-from-top-reverse");
        } else if ($(this).hasClass("previous") || $(this).hasClass("previous-reverse")) {
            $(this).addClass("present").removeClass("previous previous-reverse");
        } else if ($(this).hasClass("present") || $(this).hasClass("present-reverse")) {
            $(this).addClass("next").removeClass("present present-reverse");
        } else if ($(this).hasClass("next") || $(this).hasClass("next-reverse")) {
            $(this).addClass("image-to-bottom").removeClass("next next-reverse");
        } else if ($(this).hasClass("image-to-bottom") || $(this).hasClass("image-to-bottom-reverse")) {
            $(this).addClass("image-from-top").removeClass("image-to-bottom image-to-bottom-reverse");
        }
    });

    i++;
    if (i == r) {
        i = 0;
    }
    // if (i == 5) {
    //     i = 0;
    // }
}

function addClassesToDown() {
    progressBar();
    $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");

    if (i == 0) {
        $yaziItems.eq(r - 1).addClass("show comeFromTop");
        $yaziItems.eq(0).removeClass("comeFromTop").addClass("goToBottom");
        $yaziItems.eq(1).removeClass("show comeFromTop goToBottom");
    } else {
        $yaziItems.eq(0).removeClass("show");
        $yaziItems.eq(i - 1).addClass("show comeFromTop");
        $yaziItems.eq(i).addClass("goToBottom").removeClass("comeFromTop");
        $yaziItems.eq(i + 1).removeClass("show comeFromTop goToBottom");
    }
    // if (i == 0) {
    //     $yaziItems.eq(4).addClass("show comeFromTop");
    //     $yaziItems.eq(0).removeClass("comeFromTop").addClass("goToBottom");
    //     $yaziItems.eq(1).removeClass("show comeFromTop goToBottom");
    // } else {
    //     $yaziItems.eq(0).removeClass("show");
    //     $yaziItems.eq(i - 1).addClass("show comeFromTop");
    //     $yaziItems.eq(i).addClass("goToBottom").removeClass("comeFromTop");
    //     $yaziItems.eq(i + 1).removeClass("show comeFromTop goToBottom");
    // }

    // <!-- _____________________________ for images _____________________________________________________________ -->
    $imageItems.each(function () {
        if ($(this).hasClass("image-from-top") || $(this).hasClass("image-from-top-reverse")) {
            $(this).addClass("image-to-bottom-reverse").removeClass("image-from-top image-from-top-reverse");
        }
        else if ($(this).hasClass("image-to-bottom") || $(this).hasClass("image-to-bottom-reverse")) {
            $(this).addClass("next-reverse").removeClass("image-to-bottom image-to-bottom-reverse");
        }
        else if ($(this).hasClass("next") || $(this).hasClass("next-reverse")) {
            $(this).addClass("present-reverse").removeClass("next next-reverse");
        }
        else if ($(this).hasClass("present") || $(this).hasClass("present-reverse")) {
            $(this).addClass("previous-reverse").removeClass("present present-reverse");
        }
        else if ($(this).hasClass("previous") || $(this).hasClass("previous-reverse")) {
            $(this).addClass("image-from-top-reverse").removeClass("previous previous-reverse");
        }
    })
    i--;
    if (i == -1) {
        i = r - 1;
    }
    // if (i == -1) {
    //     i = 4;
    // }
}

function changeHeaderBg() {
    if (i == 0) {
        $header.removeClass().addClass("bg-4");
    } else if (i == 1) {
        $header.removeClass().addClass("bg-5");
    } else if (i == 2) {
        $header.removeClass().addClass("bg-1");
    } else if (i == 3) {
        $header.removeClass().addClass("bg-2");
    } else if (i == 4) {
        $header.removeClass().addClass("bg-3");
    }
}

function progressBar() {
    var w = $(window).width();
    if (i == 0) {
        $("#progressBar").addClass("progress-2");

        $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

        if(w >= 576){
            setTimeout(() => {
                $(".count").addClass("animate__fadeInRight");
                $("#count").text("02");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".count").addClass("animate__fadeInUp");
                $("#count").text("02");
            }, 1000);
        }
    }
    else if (i == 1) {
        $("#progressBar").addClass("progress-3").removeClass("progress-2");

        $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

        if(w >= 576){
            setTimeout(() => {
                $(".count").addClass("animate__fadeInRight");
                $("#count").text("03");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".count").addClass("animate__fadeInUp");
                $("#count").text("03");
            }, 1000);
        }
    } else if (i == 2) {
        $("#progressBar").addClass("progress-4").removeClass("progress-3");

        $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

        if(w >= 576){
            setTimeout(() => {
                $(".count").addClass("animate__fadeInRight");
                $("#count").text("04");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".count").addClass("animate__fadeInUp");
                $("#count").text("04");
            }, 1000);
        }
    } else if (i == 3) {
        $("#progressBar").addClass("progress-5").removeClass("progress-4");

        $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

        if(w >= 576){
            setTimeout(() => {
                $(".count").addClass("animate__fadeInRight");
                $("#count").text("05");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".count").addClass("animate__fadeInUp");
                $("#count").text("05");
            }, 1000);
        }
    }else if (i == 4) {
        $("#progressBar").removeClass().addClass("progress-bar animate__animated progress-1");

        $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

        if(w >= 576){
            setTimeout(() => {
                $(".count").addClass("animate__fadeInRight");
                $("#count").text("01");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".count").addClass("animate__fadeInUp");
                $("#count").text("01");
            }, 1000);
        }
    }
    //  else if (i == 4) {
    //     $("#progressBar").addClass("progress-6").removeClass("progress-5");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if(w >= 576){
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("06");
    //         }, 1000);
    //     }else{
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("06");
    //         }, 1000);
    //     }
    // } 
    // else if (i == 5) {
    //     $("#progressBar").removeClass().addClass("progress-bar animate__animated progress-1");

    //     $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    //     if(w >= 576){
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInRight");
    //             $("#count").text("01");
    //         }, 1000);
    //     }else{
    //         setTimeout(() => {
    //             $(".count").addClass("animate__fadeInUp");
    //             $("#count").text("01");
    //         }, 1000);
    //     }
    // }
};