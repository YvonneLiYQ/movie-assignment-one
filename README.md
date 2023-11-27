# movie-assignment-one
# Assignment 1 - ReactJS app.

Name: Yangqing Li

## Overview.

Web movies app Assignment 1

### Features. 
+ Upcoming Movies Page
+ top Rated Page
+ popularMovies page
+ now Playing Page
+ actor pages
+ actor filter
+ can return homepage from movie details page
+ can return actor page from movie details page
+ login page 
+ must watch button to add to must watch page

## API endpoints.
- https://api.themoviedb.org/3/movie/${id}/credits  -get actors info in the movie details screen
- https://api.themoviedb.org/3/person/popular - get a list of popular actors.
- https://api.themoviedb.org/3/person/${id}/images -get images for actors
- https://api.themoviedb.org/3/movie/upcoming -get upcoming movies
- https://api.themoviedb.org/3/movie/now_playing -get now_playing movies
- https://api.themoviedb.org/3/movie/top_rated -get top_rated movies
- https://api.themoviedb.org/3/movie/popular -get popular movies
- https://api.themoviedb.org/3/authentication/token/new -Create a temporary request token that can be used to validate a TMDB user login
- https://api.themoviedb.org/3/authentication/token/validate_with_login -Validate a request token by entering a username and password.
- https://api.themoviedb.org/3/authentication/session/new -Create a fully valid session ID once a user has validated the request token



### Component catalogue.
![ ](./images/homepage.png)


> Shows what I can display on my current home page, basically in the header_site. The interface can be jumped through buttons.

![ ](./images/loginPage.png)

> The login page is shown in the figure above.

![ ](./images/redbutton.png) 

> when click the add to favourite or add to must watch button it will turn red.

![ ](./images/favouritepage.png)

> Show movies which had been add to favourite.

![ ](./images/mustwatchpage.png)

> Show movies which had been add to mustwatch.

![ ](./images/Review.png)

> Review is still displayed as a drop-down menu

![ ](./images/nowplaying.png)

> Shows what I can display on my current hnowplaying page


![ ](./images/upcomepage.png)

> A list of upcoming movies.

![ ](./images/popularpage.png)

> A list of popular movies.

![ ](./images/topratedPage.png)

> A list of top rated movies.

![ ](./images/searchbylitter.png)

> Search movies by name this example is search which name contains 'm'.


![ ](./images/searchbygenre.png)

>Search movies by genre this example is search which name contains 'm' and which genre is action.

![ ](./images/twobuttons.png)

>Two buttons in moviedetails page one can turn to home page another one can turn to actor page.

![ ](./images/actor.png)

>It is a list of actor.

![ ](./images/actorsearch.png)

>It is a filter witch can search actor by name.

# agile-movie-assignment1

Name:Yangqing Li

This repository contains React applications and contains Cypress tests and GitLab CI pipelines.

## React App Features.

+ Upcoming Movies Page
+ top Rated Page
+ popularMovies page
+ now Playing Page
+ actor pages
+ actor filter
+ can return homepage from movie details page
+ can return actor page from movie details page
+ login page 
+ must watch button to add to must watch page


### Unique functionality testing (if relevant).


![ ](./images/upcoming.png)

+ cypress/e2e/upComing-Page.cy.js

![ ](./images/review.png)

+ cypress/e2e/review-page.cy.js

![ ](./images/actorpagetest.png)

+ cypress/e2e/actor-page.cy.js

![ ](./images/homepagetest.png)

+ cypress/e2e/home-page.cy.js

![ ](./images/morelist.png)

+ cypress/e2e/morelist.cy.js

![ ](./images/nowplaying.png)

+ cypress/e2e/nowplaying-page.cy.js

![ ](./images/toprated.png)

+ cypress/e2e/topRated-page.cy.js

### Code Splitting.

+ src/index.js
+ src/pages/homePage.js
+ src/components/templatePage/templateActorListPage/index.js
+ src/components/templatePage/templateMovieListPage/index.js
+ src/components/actor/actorList/index.js
+ src/components/movie/filterMoviesCard/index.js
+ src/components/movie/movieList/index.js

### Build 
![ ](./images/build.png)






















