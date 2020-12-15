var yaziItems = $('.content-wrapper .content');
var imageItems = $('.image-wrapper li');
$header = $('header');

var imageWrapper = $("#image-wrapper");
var itemNumber = imageWrapper.find("li").length;
var progressAdd = $("#progressBar").width() / (itemNumber - 1);
var currentProgress = 0;
var r = yaziItems.length;

$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->
    var interval;

    $("#btnUp").click(function () {
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
var i = 1;
var j = 3;
function addClassesToTop() {
    // bir anda diğer yöne tıklanırsa diye
    yaziItems.removeClass("comeFromBottom comeFromTop goToTop goToBottom");

    yaziItems.eq(i - 2).removeClass("show comeFromBottom goToTop");
    yaziItems.eq(i - 1).addClass("goToTop").removeClass("comeFromBottom");
    yaziItems.eq(i).addClass("show comeFromBottom");

    // yazılarla ters yönlü
    imageItems.eq(j - 4).addClass("previous").removeClass("previous-reverse").siblings().removeClass("previous previous-reverse");
    imageItems.eq(j - 3).addClass("present").removeClass("present-reverse").siblings().removeClass("present present-reverse");
    imageItems.eq(j - 2).addClass("next").removeClass("next-reverse").siblings().removeClass("next next-reverse");
    imageItems.eq(j - 1).addClass("down").removeClass("down-reverse").siblings().removeClass("down down-reverse");


    i++;
    if (i == yaziItems.length) {
        i = 0;
    }

    j--;
    if (j == -1) {
        j = yaziItems.length-1;
    }

    progressBarRight();
}

function addClassesToDown() {
    // bir anda diğer yöne tıklanırsa diye
    yaziItems.removeClass("comeFromBottom comeFromTop goToTop goToBottom");

    yaziItems.eq(i - 2).addClass("show comeFromTop");
    yaziItems.eq(i - 1).addClass("goToBottom").removeClass("comeFromTop");
    yaziItems.eq(i).removeClass("show comeFromTop goToBottom");

    // yazılarla aynı yönlü
    // imageItems.eq(i - 4).addClass("next").siblings().removeClass("next next-reverse");
    // imageItems.eq(i - 3).addClass("image-to-bottom").siblings().removeClass("image-to-bottom image-to-bottom-reverse");
    // imageItems.eq(i - 2).addClass("image-from-top").siblings().removeClass("image-from-top image-from-top-reverse");
    // imageItems.eq(i - 1).addClass("previous").siblings().removeClass("previous previous-reverse");
    // imageItems.eq(i).addClass("present").siblings().removeClass("present present-reverse");

    // yazılarla ters yönlü 
    imageItems.eq(j - 3).addClass("previous-reverse").removeClass("previous").siblings().removeClass("previous previous-reverse");
    imageItems.eq(j - 2).addClass("present-reverse").removeClass("present").siblings().removeClass("present present-reverse");
    imageItems.eq(j - 1).addClass("next-reverse").removeClass("next").siblings().removeClass("next next-reverse");
    imageItems.eq(j).addClass("down-reverse").removeClass("down").siblings().removeClass("down down-reverse");


    i--;
    if (i == -1) {
        i = yaziItems.length - 1;
    }

    j++;
    if (j == yaziItems.length) {
        j = 0;
    }

    progressBarLeft();
}

function progressBarRight() {
    var w = $(window).width();


    progressAdd = $("#progressBar").width() / (itemNumber - 1);
    currentProgress = currentProgress + progressAdd;


    if (currentProgress - 10 > $("#progressBar").width()) {
        currentProgress = 0;
    }

    $("#progressBar .progress-bar").animate({ width: currentProgress });

    $(".count").removeClass("animate__fadeInRight animate__fadeInUp");
    if (w >= 576) {
        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            if (i == 0) {
                $("#count").text('0' + (itemNumber));
            } else {
                $("#count").text('0' + (i));
            }
        }, 1000);
    } else {
        setTimeout(() => {
            $(".count").addClass("animate__fadeInUp");
            if (i == 0) {
                $("#count").text('0' + (itemNumber));
            } else {
                $("#count").text('0' + (i));
            }
        }, 1000);
    }
};

function progressBarLeft() {
    var w = $(window).width();

    progressAdd = $("#progressBar").width() / (itemNumber - 1);
    currentProgress = currentProgress - progressAdd;


    if (currentProgress < -10) {
        currentProgress = $("#progressBar").width();
    }

    $("#progressBar .progress-bar").animate({ width: currentProgress });

    $(".count").removeClass("animate__fadeInRight animate__fadeInUp");

    if (w >= 576) {
        setTimeout(() => {
            $(".count").addClass("animate__fadeInRight");
            if (i == 0) {
                $("#count").text('0' + (itemNumber));
            } else {
                $("#count").text('0' + (i));
            }
        }, 1000);
    } else {
        setTimeout(() => {
            $(".count").addClass("animate__fadeInUp");
            if (i == 0) {
                $("#count").text('0' + (itemNumber));
            } else {
                $("#count").text('0' + (i));
            }
        }, 1000);
    }
};

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