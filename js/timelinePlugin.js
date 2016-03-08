(function($) {
    $.fn.timelinePlugin = function() {
        var classMainContainer = "." + this.attr("class");
        $(classMainContainer).load("/tattoodo_task/html/timeline.html");

        var arrayData = "";
        $.getJSON(
            "http://app.api.sta.tattoodo.com/v1/app/images?length=9",
            function (data) {
                arrayData = data.data;
                arrayData.sort(sortBy("updated_at"));
            }
        ).done(function () {
            jsonSuccess();
        });

        function jsonSuccess() {
            var count = 0;
            arrayData.forEach(function(current){
                var listContainer = $(classMainContainer).find("ul");
                //listContainer.load("/tattoodo_task/html/timeline_item.html");
                var currentImg = "<img src='"+current.url+"'/>";
                var clase = "";
                if(count % 2 != 0) {
                    clase = "class='timeline-inverted'";
                }
                var liElement = "<li "+clase+">" +
                    "<div class='timeline-badge'><i class='fa fa-money fa-fw'></i></div>" +
                    "<div class='timeline-panel'>" +
                    "<div class='timeline-body'>" +
                        currentImg +
                    "</div></div></li></li>";
                listContainer.append(liElement);
                count++;
            })
        }

        function sortBy(prop){
            return function(a,b){
                if( a[prop] < b[prop]){
                    return 1;
                }else if( a[prop] > b[prop] ){
                    return -1;
                }
                return 0;
            }
        }
    }
})(jQuery);