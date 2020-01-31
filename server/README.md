##### Getting Started
* Ensure NodeJS 13.7.0+ is installed (NVM is recommended)
* 13.7.0+ due to better ECMAScript handling [Read Here](https://nodejs.org/dist/latest-v13.x/docs/api/esm.html)
* Run `yarn install`
* Copy `.env-model` to `.env` & and update with real API keys
* Run `yarn postinstall` once to create top-level `modules` alias
* Top-level alias used for absolute module imports
* Ensure `./client/README` instructions were followed
##### Start the app
* Run `yarn run dev`
###### IBM API Keys are REQUIRED for Rose-Watson (Chat) to work.
[IBM: Managing User API Keys](https://cloud.ibm.com/docs/iam?topic=iam-userapikey)
