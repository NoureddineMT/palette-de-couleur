$(document).ready(function () {

    // RECTANGLES
    for (let i = 1; i <= 16; i++) {
        $(".container").append("<div class='color'> </div>");
    }

    // RESULT
    $(".container").append("<div class='result'> </div>");
    // BUTTON
    $(".container").append("<button id='search'> Changer les couleurs </button>");

    function changeColors() {

        $(".color").each(function (index) {

            $(".color").removeClass("border");
            $(".result").html("");

            let colorR = Math.floor((Math.random() * 256));
            let colorG = Math.floor((Math.random() * 256));
            let colorB = Math.floor((Math.random() * 256));

            $(this).css("background-color", "rgba(" + colorR + ", " + colorG + ", " + colorB + ", 1)");
            $(this).html(colorR + ", " + colorG + ", " + colorB);
        });


    }

    changeColors();

    // CLICK

    $("button").click(function () {
        changeColors();
    });

    $(".color").click(function () {

        $(".color").removeClass("border");
        $(this).addClass("border");

        let color = $(this).html();
        let opacity = $("#opacity").val() / 10;

        $(".result").html("La couleur sélectionnée est le&nbsp;<span style='color:rgba(" + color + ",1" + ")'> rgba(" + color + ", " + "<span id='currentOpacity'>" + opacity + "</span>" + " " + ") </span>");

    });

    $("#opacity").change(function () {

        // opacity
        let opacity = $(this).val() / 10;
        $(".color").css("opacity", opacity);
        $(".result span").css("opacity", opacity);

        $(".opacity span").html(opacity);
        $(".result #currentOpacity").html(opacity);

    });

});