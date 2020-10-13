# fizzbuzz-demo
- Server side Home Assignment

#### Game Rules
- The game rules are as following:
    - For multiples of '3' print "Fizz" instead of the number
    - For multiples of '5' print "Buzz" instead of the number
    - For the multiples of both '3' and '5' print "Fizzbuzz" instead of the number
- [Reference (wiki)](https://en.wikipedia.org/wiki/Fizz_buzz)

#### API
- An api which includes a single endpoint `/fizzbuzz` that accepts `POST` input
- `POST` accepts `application/json` type and format is `{"count": 10}`
- All other HTTP request methods return a not-supported HTTP error with 405 error code
- All other routes return a 404 error code


- **Examples:**
    - Valid input
        - ```
          curl --header "Content-Type: application/json" \
          --request POST \
          --data '{"count": 10}' \
          http://localhost:3000/fizzbuzz
          ```
        - Output: _`{"response":"1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz","error":null}`_ | 200 OK

    - Invalid input
        - ```
          curl --header "Content-Type: application/json" \
          --request POST \
          --data '{"count": "10ddd"}' \
          http://localhost:3000/fizzbuzz
          ```
        - Output: _`{"error":"Invalid input!","response":""}`_ | 400 Bad Request


#### Docker
- Pull Docker image
    - _`docker pull borab/fizzbuzz-demo`_
- Build an image
    - _`docker build -t buzz .`_
        - `-t buzz ` - assign a name to the container
        - `.` - the location of the Dockerfile
- Run the image  
    - _`docker run -p 3000:3000 --name=fizzbuzz buzz`_
        -  `-p 3000:3000` - exposing the ports [(further info.)](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose)
        - `--name=fizzbuzz` - assign a name to the container [(further info.)](https://docs.docker.com/engine/reference/commandline/run/#assign-name-and-allocate-pseudo-tty---name--it)
        - `buzz` - the image we've built above
        - Note: `-d` flag - optional if you want to run container in background and print container ID 

#### Google Cloud Run
- Building Containers using Cloud Build
    - You can build your image on Google Cloud. [Instructions link.](https://cloud.google.com/run/docs/building/containers#builder)
    - For example: _`gcloud builds submit -t gcr.io/do-it-292020/fizzbuzz-demo`_
    - You need to be able to see the image in [Container Registry](https://console.cloud.google.com/gcr)
- Deploying container images
    - You can deploy a container using the Cloud Console, the gcloud command line or from a YAML configuration file.
        - My recommendation is using the Cloud Console, which is very intuitive. [Instructions link.](https://cloud.google.com/run/docs/deploying#service)
    - You need to be able to see the container image in [Services](https://console.cloud.google.com/run)
- Running the service
    - I chose to use **curl** in order to send HTTP request:
        - ```
          curl -X POST \
          --header "Content-Type: application/json" \  
          --data '{"count": 10}' \  
          https://fizzbuzz-demo-srvc-gbbtnofsga-uc.a.run.app/fizzbuzz
          ```
    - **Expected Output:** _`{"response":"1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz","error":null}`_