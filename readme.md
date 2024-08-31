# New Api
## There are three endpoints as below
    1. http://localhost:8080/article?max=10
        1. It fetches top N articles max limit is 100 by deafult, and min limit is 10 if value not passed
        2. We can pass max as query param
    2. http://localhost:8080/article/search/title?title=Kevin Thelwell explains
        1. This is the endpoint to search articles by title
        2. Need to pass title as query param
    3. http://localhost:8080/article/search/keyword?keyword=The Chief Executive
        1. This endpoint is for searching articles by keyword
        2. Need to pass keyword as query param
## Cache
    1. Also used cache based to keep it in local cache so we do not have to query the api.
    2. It keeps the articles in cache based on query param

## Few ignored things
    1. For simplicity i have kept api key in constant file it self.
    2. It should be added as ENV
## How to run application
    1. npm install
    2. npm run start