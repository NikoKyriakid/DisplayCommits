
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

Create an SPA that does the following:
- On load, display a login page with an email and password field, and a "login" button. (No implementation of any kind of validation on the email and password yet)
- When clicking on this button, the app should send a `POST` request to `http://localhost:4000/data` and with the username and password in the body in the JSON format.
- The server doesn't do any kind of verification on the payload, and always returns the results.
- After the user has submitted their username and password, the app displays the results returned by the server, ranking the results by relevancy (from highest relevancy to lowest relevancy).
- Once results are displayed, users can rank the results by relevancy, or by timestamp. The default should be by relevancy.


### Set-up instructions
- Clone this repository
- Run `npm install` to install dependencies
- `npm start` This will bundle the source and boot a mock server at the following URL: `http://localhost:4000` (Node version 8.9.4 was used)
