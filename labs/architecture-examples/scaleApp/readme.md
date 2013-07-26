# scaleApp TodoMVC Example

scaleApp is a tiny JavaScript framework for scalable
One-Page-Applications / Single-Page-Applications.
The framework allows you to easily create complex web applications.

[scaleApp.org](http://www.scaleapp.org)

## Learning scaleApp

The [scaleApp.org](http://www.scaleapp.org) is a great resource
for getting started.

Here are some links you may find helpful:

* [Documentation](http://www.scaleapp.org)
* [API Reference](http://www.scaleapp.org/readme.html#api)
* [scaleApp on GitHub](https://github.com/flosse/scaleApp)

Articles and guides from the community:

describes the basic ideas.

* ["Scalable JavaScript Application Architecture (Talk)"](https://www.youtube.com/watch?v=vXjVFPosQHw)
  ([Slides](http://www.slideshare.net/nzakas/scalable-javascript-application-architecture)).
* ["Scalable JavaScript Application Architecture (Article)"](http://www.ubelly.com/2011/11/scalablejs/)

## Implementation

[scaleApp](http://www.scaleapp.org) is based on a decoupled, event-driven
architecture that is inspired by the talk of Nicholas C. Zakas -
["Scalable JavaScript Application Architecture"](https://www.youtube.com/watch?v=vXjVFPosQHw)

The architecture consists of a Core, Modules, Sandboxes, and Plugins.

![scaleApp architecture](https://raw.github.com/flosse/scaleApp/master/architecture.png)

### Module

A module is a completely independent part of your application.
It has absolutely no reference to another piece of the app.
The only thing the module knows is the sandbox.
The sandbox is used to communicate with other parts of the application.

### Sandbox

The main purpose of the sandbox is to use the
[facade pattern](https://en.wikipedia.org/wiki/Facade_pattern).
In that way you can hide the features provided by the core and only show
a well defined (static) API to your modules.
For each module a separate sandbox will be created.

### Core

The core is responsible for starting and stopping your modules.
It also handles the messages by using the
[Publish/Subscribe (Mediator) pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)

### Plugin

Plugins can extend the core or the sandbox with additional features.
For example you could extend the core with basic functionalities
(like DOM manipulation) or just aliases the features of a base library (e.g. jQuery).

## Running

    git clone https://github.com/flosse/todomvc
    cd todomvc
    git checkout origin/scaleapp
    cd labs/architecture-examples/scaleApp/
    bower install

To run the app, spin up an HTTP server and visit
`http://localhost:PORT` or if you choose the todomvc root directory
`http://localhost:PORT/labs/architecture-examples/scaleApp/`.

## Credit

This TodoMVC application was created by [Markus Kohlhase](https://github.com/flosse).
