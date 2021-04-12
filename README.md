# Building the image
```docker build -t <your username>/viwit-api .```
# Running the image
``` docker run -p 3000:8080 -d <your username>/viwit-api ```

## Important Reminder 
``` For deploying the app, the package.json script <<start>> has to be changed from nodemon to node```
