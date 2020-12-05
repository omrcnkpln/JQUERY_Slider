var i = 0;

$(function () {
    // <!-- _____________________________ main _____________________________________________________________ -->
    $yaziItems = $('.content-wrapper .content');
    $imageItems = $('.image-wrapper li');
    $header = $('header');

    $("#btnUp").click(function () {
        $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");
        addClassesToTop();
        if(i==0){
            $header.removeClass().addClass("bg-1");
        }else if(i==1){
            $header.removeClass().addClass("bg-2");
        }else if(i==2){
            $header.removeClass().addClass("bg-3");
        }else if(i==3){
            $header.removeClass().addClass("bg-4");
        }else if(i==4){
            $header.removeClass().addClass("bg-3");
        }
    })

    $("#btnDown").click(function () {
        $($yaziItems).removeClass("comeFromBottom comeFromTop goToTop goToBottom");
        addClassesToDown();
        if(i==0){
            $header.removeClass().addClass("bg-1");
        }else if(i==1){
            $header.removeClass().addClass("bg-2");
        }else if(i==2){
            $header.removeClass().addClass("bg-3");
        }else if(i==3){
            $header.removeClass().addClass("bg-4");
        }else if(i==4){
            $header.removeClass().addClass("bg-3");
        }
    })
});

// <!-- _____________________________ yazıların hareketi _____________________________________________________________ -->
function addClassesToTop() {
    if (i == 4) {
        $yaziItems.eq(0).addClass("show comeFromBottom");
        $yaziItems.eq(4).removeClass("comeFromBottom").addClass("goToTop");
        $yaziItems.eq(3).removeClass("show comeFromBottom goToTop");
    } else {
        $yaziItems.eq(i + 1).addClass("show comeFromBottom");
        $yaziItems.eq(i).addClass("goToTop").removeClass("comeFromBottom");
        $yaziItems.eq(i - 1).removeClass("show comeFromBottom goToTop");
    }

    $imageItems.each(function () {
        if ($(this).hasClass("image-from-top") || $(this).hasClass("image-from-top-reverse")) {
            // alert("1");
            $(this).addClass("image-to-bottom-reverse").removeClass("image-from-top image-from-top-reverse");
        }
        else if ($(this).hasClass("image-to-bottom") || $(this).hasClass("image-to-bottom-reverse")) {
            // alert("2");
            $(this).addClass("next-reverse").removeClass("image-to-bottom image-to-bottom-reverse");
        }
        else if ($(this).hasClass("next") || $(this).hasClass("next-reverse")) {
            // alert("3");
            $(this).addClass("present-reverse").removeClass("next next-reverse");
        }
        else if ($(this).hasClass("present") || $(this).hasClass("present-reverse")) {
            // alert("4");
            $(this).addClass("previous-reverse").removeClass("present present-reverse");
        }
        else if ($(this).hasClass("previous") || $(this).hasClass("previous-reverse")) {
            // alert("5");
            $(this).addClass("image-from-top-reverse").removeClass("previous previous-reverse");
        }
    });

    i++;
    if (i == 5) {
        i = 0;
    }
}

function addClassesToDown() {
    if (i == 0) {
        $yaziItems.eq(4).addClass("show comeFromTop");
        $yaziItems.eq(0).removeClass("comeFromTop").addClass("goToBottom");
        $yaziItems.eq(1).removeClass("show comeFromTop goToBottom");
    } else {
        $yaziItems.eq(0).removeClass("show");
        $yaziItems.eq(i - 1).addClass("show comeFromTop");
        $yaziItems.eq(i).addClass("goToBottom").removeClass("comeFromTop");
        $yaziItems.eq(i + 1).removeClass("show comeFromTop goToBottom");
    }

    // <!-- _____________________________ for images _____________________________________________________________ -->
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

    i--;
    if (i == -1) {
        i = 4;
    }
}
