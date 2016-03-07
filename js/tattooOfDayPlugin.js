(function ($) {
    console.log(jQuery("main-container"));
    $.fn.tattooOfDayPlugin = function () {
        console.log($("main-container"));
        var classMainContainer = "." + this.attr("class");
        var likeCount = "";
        var tattooImageUrl = "";
        var imageOwnerImageUrl = "";
        var imageOwnerName = "";
        $.getJSON(
            "http://app.api.sta.tattoodo.com/v1/app/images?length=1&includes=user", function (data) {
                console.log(data);
                likeCount = data.data[0].like_count;
                tattooImageUrl = data.data[0].url;
                imageOwnerImageUrl = data.data[0].user.data.image_url;
                imageOwnerName = data.data[0].user.data.name;
            }
        ).done(function () {
            jsonSuccess();
        });

        function jsonSuccess() {

            $(classMainContainer).css("background-image", "url(" + tattooImageUrl + ")");
            $auxDiv = $(classMainContainer).find(".aux-div");
            var tattooOfDayHeader = "<div class='tattoo-of-day-header'><h1>Tattoo of the day</h1><div><i class='fa fa-heart-o fa-fw'></i>" + likeCount + " likes</div></div>";
            var winnerTeaser = "<div class='winner-teaser'><img src='"+imageOwnerImageUrl+"'/><span>"+imageOwnerName+"<span></span></span></div>";
            var viewButton = "<a href='' target='_blank'>View</a>";
            var bottomContainer = "<div class='bottom-container'>"+winnerTeaser+viewButton+"</div>";
            $(classMainContainer).html(tattooOfDayHeader+bottomContainer);


        }
    };
})(jQuery);