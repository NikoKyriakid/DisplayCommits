This is the technical task for the front-end / full-stack position at Stepsize. Please spend a maximum of 4 hours on this task. Email me at matt@stepsize.com if you have any questions, comments or feedback. This is also the first time we run this, so if you think the task is significantly too difficult to finish in 4 hours, please let me know.

The goal of this task is to implement an SPA which displays a set of data. The data is served by a mock server (instructions on how to get it running later in the document).

### Data to display

The data returned by the mock server can be found in the `data.json` file. It is a JSON-formatted JS object consisting of mock GitHub pull request objects. Each of these pull requests contain the following fields:


| Field  | Type | Description |
| ------------- | ------------- | ------------- |
| title  | `string`  | Title of the pull request |
| body  | `string`  | Body of the pull request |
| tags | `Array<string>` | Tags of the pull request |
| timestamp | `Date` | Timestamp of the pull request |
| author | `{ avatarUrl: string; username: string }` | Author's username & url to avatar |
| relevancy | `number` | Relevancy score of this PR to the user's search |


### Requirements

You should create an SPA that does the following:
- On boot, the results should not be displayed. Instead you should display a login page with an email and password field, and a "login" button. There is no need to implement any kind of validation on the email and password.
- When clicking on this button, the app should send a `POST` request to `http://localhost:4000/data` and with the username and password in the body. Make sure that the mock server is running first, see the set-up instructions further down.
- The server doesn't do any kind of verification on the payload, and always returns the results.
- After the user has submitted their username and password, the app should display the results returned by the server, ranking the results by relevancy (from highest relevancy to lowest relevancy).
- Once results are displayed, users should be able to rank the results by relevancy, or by timestamp. The default should be by relevancy.

### Design
For your inspiration i've uploaded a screenshot of an old app we built in this repository (see `results-screen.png`). This should serve as a general guideline to help you choose how to display the data, and how to style the login screen. You will have noticed that the data sent to you is only a very small subset of the data that was displayed in the old app.

### Set-up instructions
- Clone this repository
- Run `npm install` (or use `yarn` if you are familiar with it) to install dependencies
- To run the mock server, run `npm run boot-server` (or `yarn boot-server`). This will boot a mock server at the following URL: `http://localhost:4000`

### Hand-in instructions
- Send in a zip file with all the code required to run your solution
- Please provide all instructions to be able to run your solution. Note that your solution will be tested on MacOS or Linux

### Other instructions
- If you have React experience, please use React to implement this solution, if you don't, feel free to use another technology.
- Other than that, feel free to use whichever library or technology you are familiar with
- Feel free to use Google & other online resources
