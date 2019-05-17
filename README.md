# DOM SCRIPTING

* This app is a tutorial to get familiar with DOM events, listeners, handlers,

### Steps:
1. Build basic html structure in `index.html`
2. create basic to-do form in `index.html`
3. include `app.js` file


### Definitions:

* Event - An Event is something that 'happens' in a web page or web app. Events can be anything from a user clicking, typing, or moving the mouse to the browser loading a file or the web page itself.

* Event Listener - `Specified with the addEventListener or removeEventListener methods on html elements`. An Event Listener is a `JavaScript method` which 'listens' for an Event. An Event Listener is like a `mini-program` that does only one thing: it waits for a specific action to happen, and when that action does, it fires a message saying that it happened.

* Event Handler - `This is the function or block of code btwn {} curly brackets that tells us what we want to happen when event happens that we are listening for.` An Event Handler `receives the message from the Event Listener`, and 'handles' the Event.

* Global Document Object  ( DOM ) - The  document object is the glue that binds a page's JavaScript and HTML together. It has many methods for creating, reading, updating, and destroying elements on the page.  

#### DOM selector methods:

-  __document.getElementById()__: Takes one argument, an element's ID, and returns exactly one matching element.
- __document.getElementsByClassName()__: Takes one argument, a class name, and returns a set of elements as an HTMLCollection.
- __document.getElementsByTagName()__: Takes one argument, a tag name like div or  span, and returns a set of elements as an HTMLCollection.
- __document.querySelector()__: Takes one argument, a query with the same syntax as a CSS selector, and returns the first matching element.
- __document.querySelectorAll()__: Takes one argument, a query with the same syntax as a CSS selector, and returns a set of elements as an HTMLCollection

#### Event Listeners:

* __addEventListener()__ - is a method which takes two arguments: a __type__, and a __listener__ (which is itself a function).

  * Example: below `submit` is the type and the block function is the listener or event handler

  ```
  addToDoForm.addEventListener('submit', (event) => {   // Listener
      event.preventDefault();         // prevents page reload
  });

  ```



  # DOM SCRIPTING PART 2 - ( __for part 2 use `app_2.js in index.html`__)

  Terms:
  * __State__ - term used to describe data at a particular moment in time. The data may be stored in a database or within the app itself.

  * __UI__ - stands for _User Interface_. It's what the user sees, and includes forms, buttons, and other types of inputs which enable the user to interact with the application.

  * __Separation of Concerns__ - A software principle that asserts that separating software into distinct sections, each with a distinct responsibility (a concern), makes it easier to create and __maintain__.
