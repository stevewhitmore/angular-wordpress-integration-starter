# Angular WordPress Integration Starter

## A simple to use Angular app in the form of a WordPress plugin

Sometimes we need a modern, flexibile, and extensible solution to frontend problems in a WordPress project. Some things that need to be handled are too complex or require more reactivity and organization than vanilla JS or jQuery could reasonably accommodate.

Also, Angular is awesome, and not nearly as cumbersome as it may have earned a reputation for in its early days.

You can get more details about how this all works in [this article](https://dev.to/stevewhitmore/take-your-wordpress-site-farther-with-angular-3o6p). 

## Setup

1. `cd app && npm i` to get things started.
2. Once the dependencies are installed, write your app and run `npm run build`. The command will automagically:
  - update the css and js file names in the plugin file
  - paste the dist folder and its contents into the WordPress plugin folder.
3. Take the contents of `/plugin` and upload it to your WordPress project's `/wp-content/plugins` folder.
4. Log into WordPress and activate the plugin.
5. Add the shortchode defined in the plugin file (It's `[ng_wp]` by default) to any WordPress page  or post. Paste `<?php echo do_shortcode("[ng_wp]"); ?>` into a template if you'd prefer to directly embed it in the code.
6. Sit back and contemplate how great life is now.