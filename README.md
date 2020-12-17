# Nathan Ellerton's Portoflio Website

This website was made using [Gridsome](https://gridsome.org/) and [TailwindCSS](https://tailwindcss.com/), using 
[Strapi](https://strapi.io/) ([see here](https://github.com/MattJarman/nathan-cms)) as the data source.

## Development

To run this project, you'll need [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/), and the
accompanying [CMS](https://github.com/MattJarman/nathan-cms) 

### 1. Clone the project and CMS
```s
$ git clone https://github.com/MattJarman/nathan-website.git
$ git clone https://github.com/MattJarman/nathan-cms.git

```

### 2. Set up the CMS
```
$ cd nathan-cms 
$ npm i
```

### 3. Run the CMS
```
$ npm run develop
```

You should eventually see something similar to the following:
```
> nathan-cms@0.1.0 develop /home/user/dev/nathan-cms
> strapi develop


 Project information                                                          

┌────────────────────┬──────────────────────────────────────────────────┐
│ Time               │ Thu Nov 26 2020 18:03:17 GMT+0000 (Greenwich Me… │
│ Launched in        │ 1353 ms                                          │
│ Environment        │ development                                      │
│ Process PID        │ 175333                                           │
│ Version            │ 3.3.3 (node v15.2.1)                             │
│ Edition            │ Community                                        │
└────────────────────┴──────────────────────────────────────────────────┘

 Actions available                                                            

Welcome back!
To manage your project, go to the administration panel at:
http://localhost:1337/admin

To access the server ⚡️, go to:
http://localhost:1337
```

### 4. Create the collections

You'll need to create at least one item in each collection for the site to build, so visit http://localhost:1337/admin,
create an admin account, and create items for each collection you can see (for more information, see [here](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start-tutorial.html#_6-manage-and-add-content-to-a-restaurant-collection-type)).

### 5. Set up the website
```
$ cd ../nathan-website 
$ npm i
$ cp .env.example .env
```

### 6. Run the website
```
$ npm run develop
```

If you created the items correctly, then you should see something similar to the following:
```
 DONE  Compiled successfully in 156ms  


  Site running at:                                         
  - Local:                 http://localhost:8080/ 
  - Network:               http://192.168.0.32:8080/
                                                           
  Explore GraphQL data at: http://localhost:8080/___explore
```

If you see that message, then you can visit http://localhost:8080/ to view the website. 
