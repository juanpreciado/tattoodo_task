(function($) {
    $.fn.discoverPlugin = function () {
        var classMainContainer = "." + this.attr("class");
        $(classMainContainer).load("/tattoodo_task/html/discover.html");
        var arrayData = [];
        $.getJSON(
            "http://app.api.sta.tattoodo.com/v1/app/hashtags?search=&length=40",
            function (data) {
                var arrayDataAux = data.data;
                arrayDataAux.forEach(function(current) {
                    arrayData.push(current.name);
                });
            }
        ).done(function () {
            jsonSuccess();
        });

        function jsonSuccess() {
            $(".input-search").autocomplete({
                minLength: 3,
                source: arrayData

            });
        }
    }
})(jQuery);