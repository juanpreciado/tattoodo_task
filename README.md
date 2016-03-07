# tattoodo_task

A plugin called tattooOfDayPlugin.js has been created in order to generate the widget for the Task #2 about the tattoo
of the day...

Usage is quite simple, in order to create a widget; the only thing needed is to create an empty div with a class name;

f. Eks: <div class="empty-div"></div>

And to render the widget it is only need to call the invoke from the empty div already created,
 so it will be something like:

 <script>
     $(document).ready(function() {
         $(".main-container").tattooOfDayPlugin();
     });
 </script>

 Check index.html to see an example of the usage.

