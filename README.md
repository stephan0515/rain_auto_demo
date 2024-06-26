# rain_auto_demo
WebdriverIO with Typescript &amp; Cucumber
---------------------------------------------------------------

This includes:
* features/pageobjects - pages needed for the excercise
* features/step-definitions - steps definitions for cucumber
* demo.feature - test case in Gherkin that contains the test execution

---------------------------------------------------------------
Node version suggested
* `v16` or higher
* `Java 8` for allure reports generator

To install dependencies
* `npm install`

To run the tests locally
* `npm run wdio`

If you have issues regarding the chromedriver (latest 125.0.0)
* `npm install chromedriver@[chrome_version_here] --save-dev`

---------------------------------------------------------------
If you want to check the docker execution:

To get docker installer
* https://www.docker.com/products/docker-desktop/

To start the docker container
* `docker-compose -f ./docker/docker-compose.yml up -d`

To run the tests in the docker container\n
* `npm run wdio:docker`

To watch the execution through selenium grid/hub, go to the following url
* http://localhost:4444/ui/#

---------------------------------------------------------------
Additional Notes:

To stop the docker container (if you have images already installed)
* `docker-compose -f ./docker/docker-compose.yml down`

If you have issues when trying to see the report, try the following command from terminal
* "C:\Program Files\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files (Windows)
* open -a "Chrome" --args --allow-file-access-from-files (Mac)

Reference: https://www.webmo.net/link/help/AccessingLocalFiles.html

