# fizzbuzz-demo
- Server side Home Assignment

#### Game Rules
- The game rules are as following:
    - For multiples of '3' print "Fizz" instead of the number
    - For multiples of '5' print "Buzz" instead of the number
    - For the multiples of both '3' and '5' print "Fizzbuzz" instead of the number
- [Reference (wiki)](https://en.wikipedia.org/wiki/Fizz_buzz)
- Assumption - all numbers are valid input. This applies even if the numbers are '-5' or '0'.  
Simply, in this case, the result will be empty ''

#### API
- An api which includes a single endpoint `/fizzbuzz` that accepts `POST` input
- `POST` accepts `application/json` type and format is `{"count": 10}`
- All other HTTP request methods return a not-supported HTTP error
- All other routes return a 404 error code


- **Examples:**
    - Valid input
        - ```
          curl --header "Content-Type: application/json" \
          --request POST \
          --data '{"count": 10}' \
          http://localhost:3000/fizzbuzz
          ```
        - Output: _`Result for the number 10 is: 12Fizz4BuzzFizz78FizzBuzz`_ | 200 OK

    - Invalid input
        - ```
          curl --header "Content-Type: application/json" \
          --request POST \
          --data '{"count": "10ddd"}' \
          http://localhost:3000/fizzbuzz
          ```
        - Output: _`{"error":"Invalid input!"}`_ | 400 Bad Request


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
- Use **curl** to send an HTTP request
    - ```
      curl -X POST \
      --header "Content-Type: application/json" \  
      --data '{"count": 10}' \  
      https://fizzbuzz-demo-srvc-gbbtnofsga-uc.a.run.app/fizzbuzz
      ```
    - **Output:** _`Result for the number 10 is: 12Fizz4BuzzFizz78FizzBuzz`_
