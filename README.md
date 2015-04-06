# spa-example

A skeletal single page app, implemented with Express, Backbone, and Bootstrap,
that includes cookie-based mock authentication (username to log in is "name"
and password is "password"). Use for testing web scraping or for
static/unhosted apps.

## Installation

Enter the following to install dependencies and bundle them for client-side
use:

    sudo npm install -g browserify # If it's not already installed
    npm install
    make

Running while specifying a port:

    PORT=8001 npm start
