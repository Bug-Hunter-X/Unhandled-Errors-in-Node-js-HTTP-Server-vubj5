# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common yet easily overlooked error in Node.js: improper error handling within an HTTP server's request listener.  The bug showcases a scenario where an unhandled error silently fails without providing any indication to the developer.

## Bug Description
The `bug.js` file contains a basic Node.js HTTP server.  The problem lies in the `requestListener` function; it lacks proper error handling.  If an unexpected error occurs during request processing, the server will not report it, leading to debugging difficulties.

## Solution
The `bugSolution.js` demonstrates how to improve error handling by using a try-catch block within the `requestListener` to gracefully handle exceptions and log errors for easier debugging.