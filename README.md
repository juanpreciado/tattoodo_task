# tattoodo_task

I have created 4 js plugins corresponding to each one of the 4 tasks; they are discoveryPlugin.js, recentUploads.js,
tattooOdDayPlugin.js, and timelinePlugin.js (Task#4).

Example about usage:

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

 Check index.html to see an example of the usage for the 4 plugins.


 Plugings are very re-usable, widgets can be added wherever is needed only by definig a div and invoking the plugin

#TASK4
For the task #4, I have implemented sort of a timeline which shows the lates tattoos from the app, using the same feed
as in the task #3.