## Athira, LLC

### About the Project
Athira is a business solutions company for early-stage businesses that need help understanding how to build their brand, develop administrative infrastructure and create a market strategy. They asked me to build them a website that they could easily maintain, i.e. Wordpress.

At first, I cringed at the idea of building a Wordpress site. I hadn't used the platform in years and I was never a very sturdy PHP developer...

### Wordpress REST API to the Rescue

Lo and behold, Wordpress now offers developers an API that delivers all Wordpress content as JSON, and it's a prebuilt feature of the vanilla Wordpress download that you'll find at Wordpress.org. I decided to move forward with a 'headless CMS' site that featured a React Frontend and a Wordpress (MyPHP, Apache Server) backend. 

### Delivering Wordpress to React

I wanted to bring the single-page app experience to a wordpress site, and I wanted all media and content in the site to be delivered from the Wordpress server after uploading it in the CMS admin panel. Stylesheets and page structure (my 'Wordpress Theme' so to speak') would be maintained on the frontend; React would inject the appropriate images, text and other content after loading it from the Wordpress API. 

### Fun and Challenges

1. I had never realized how gnarly it was to use a CSS preprocessor outside of the Rails environment. I picked up Sass a few years ago and I had a real culture shock when I realized that Rails was providing a lot of magic to compiling process for Sass files. I resolved this by adding a watch script in my package.json file that auto-compiled all of my stylesheets into CSS whenever a change was made in my site.

2. This was the first project where I discovered the joys of hotloading with Webpack. You might be laughing as you read this, but I spent way too many hours hitting the refresh button in the browser to get my changes to load. 

### Current Progress

The project is currently at the following stages: 
- Backend: development of specific calls to Wordpress API for more effective communication with Wordpress Pages, Posts
- Frontend: awaiting decisions on final UI design from business owner, designer


