
# Q what is the Diff b/w Library and a Framework ?

## Library -> Library is like building your home from the ground up. The house can be made in any style you prefer and the rooms can be arranged and decorated however you like.

 A library is a collection of prewritten code that can be used to simplify tasks. The term library simply refers to a collection of code that is reused repeatedly. It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the development process.

`By using a library, you control the flow of the program. The library can be invoked whenever and wherever you like.`

**Example -> React js,JQuery**

## Framework -> Framework, on the other hand, is like buying a new home. The house is already built, so you don’t have to worry about building problems, but you can’t choose how the rooms are arranged.

A framework is the foundation in which the developer build the applications for specific platforms.A framework is itself an application, it has a wider scope and includes almost everything necessary to make a user application as per his own needs.It includes reusable pieces of code written to perform common tasks and uses code provided by a developer for custom functionality.

`when you use a framework, the flow is controlled by the framework. The framework instructs you where to put your code, but it will call your code as required.`

**Example -> VueJs, Angular JS**


# Q What is CDN? Why do we use it?

## CDN -> Content delievery network is bascially a group of servers which is distributed geographically that speeds up the delievery of web content by bringing it closer to the user.Across the globe data centers uses a caching process that temporarily stores copies and files so that you can access web content more quickly.

`You could think of a CDN like an ATM. Having a cash machine on practically every corner makes it fast and efficient to get money. There’s no wait time in long bank lines, and the ATMs are placed in many convenient locations for immediate access.`

**Example**

Suppose you are form INDIA and you want to access a particular website of USA which is running on their server
 you would experience slow content load times if the request had to travel all the way across the Country. To remove this, a CDN would store a cached version of the USA website content in multiple geographical locations around the world, also called **“points of presence” (PoPs)**. These PoPs contain their own caching servers and are responsible for delivering that content close to where you’re located in INDIA.


 # Why is React known as React?

 React was designed to be a flexible and efficient Javascript library to make the user interfaces.

 React is named react because of its ability to **react** to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create user interfaces that always look up-to-date.


 # What is Cross Origin in Script Tag ?

 The crossorigin attribute on a script tag specifies that **CORS** is supported when loading an external script file from a third party server or domain.

**CORS** is a standard mechanism used to retrieve files from other domains.

## Syntax

**tagname crossorigin**

`Note:  This attribute is only relevant when the file is retrieved from a third party server. Do not use this attribute when the file is on your own server.`