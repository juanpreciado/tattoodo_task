(function($) {
    $.fn.recentUploadsPlugin = function() {
        var classMainContainer = "." + this.attr("class");
        $(classMainContainer).load("/tattoodo_task/html/recent_uploads.html");
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
            var count = 1;
            arrayData.forEach(function(current){
                var currentDiv = $(classMainContainer).find("[name=pic-"+count+"]");
                var currentImg = "<a target='_blank' href='http://www.tattoodo.com/discover?imageid="+current.id+"'><img src='"+current.url+"'/>";
                currentDiv.append(currentImg);
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