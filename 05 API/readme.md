
## What is a Microservice?

Ans-> MicroServices is an architectural approach for building applications. As an architectural framework microservices are `loosely coupled` which means it allows us to make seperate components which are independent for each other.So if one team changes some code inside the application it won't break the whole app. The benefit of using microservices is that development team are able to rapildy build new component of app to meet the business requirement.

## What is a Monolith Architecture? 

Ans-> Monolith is also an approach for building applications but it is `tightly coupled` which means inside the monolith the different components combined into an single application which results memory leaks type of problem because if we change anything into one place then it can break our entire app and also if we change something then again we have to deployed the whole appliaction.It is one of the reason the applications which builds on monolith provides the updates on year to year.

## What is Optional Chaining?

Ans-> When we are wokring on **APIs** we receive a big JSON object and we have to bascially access those data and functions.To access those data and functions we use `(?.)` operator this is called as optional chaining.If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

## What is Shimmer UI?

Ans-> A shimmer is a version of UI that does not contain the actual data but it mimic the actual representation of how the data should be visible when it comes to the screen.

For example-> when we Calls an API we see in some websites before loading the data onto the screen there is a loader which keeps rotating which describes that the data will come but this is not the great `User Experience` so instead of using loader we can use a **shimmer effect**.

It gives people an idea of what’s about to come and what’s happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.


## What is conditional rendering explain with example ?

Ans-> Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

For example

    function Item({ name, isPacked }) {
    return (
        <li className="item">
        {isPacked ? (
            <del>
            {name + ' ✔'}
            </del>
        ) : (
            name
        )}
        </li>
    );
    }

    export default function PackingList() {
    return (
        <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item 
            isPacked={true} 
            name="Space suit" 
            />
            <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
            />
            <Item 
            isPacked={false} 
            name="Photo of Tam" 
            />
        </ul>
        </section>
    );
    }

## What is CORS ?

Ans-> `CORS stands for cross origin resource sharing` which is a mechanism which tells the browser whether the this web app share the resouces with the other web apps or not. If the origin of both of the web apps is same then they can easily share the resouces with each other otherwise they have to use the CORS mechanism .

What is mean by origin -> Let's say if `jitendersingh.in` has to communicate with `google.com` it would not allow me to share anything also it wouldn't allow me to access `subdomain` and websites which is on different `PORT`.

When this CORS become standardize we can easily access all these things.

## How this CORS work?

Ans-> Let's say we have two different Apps **A and B** on different domains and they want to share resources now the CORS become standarized what happen is **CORS Preflight Mechanism** is followed in these before requesting the actual API call first a preflight call will be made from A to B and the browser uses mechanism of cors which uses extra headers to verify this call first. Now the B took the responsibilty to check whether this call is valid or not if the call is valid then it will send the request back to A then the browser knows that yes this call is valid. Now the actual call is made and the resouce sharing occur between these two apps.

## What are various ways to add images into our App? Explain with code examples ??

Ans -> There are several different ways of inserting images in React.

**Using the image tag**

Using the <img/> tag you will need to provide it with two values:

“src” (source): the URL or the path of the image.

“alt” (alternate): an alternate text in case of the image not being available.

`<img src="https://reactjs.org/logo-og.png" alt="React Image" />`

**Adding an image from your computer**


    import reactLogo from "./reactLogo.png";

    export default function App() {
    
    return <img src={reactLogo} alt="react logo" />
    }

**Inserting a local background image**

    import reactLogo from './reactLogo.png'

    export default function App() {
    return <div style={{ backgroundImage: reactLogo }}>Overlay text</div>
    }

## What is SPA ?

Ans -> Single page application is a single page where all the info are kept in only one only some of the few pieces need to updated at a time.

If we click on a button and the button has some of the functionality so the in case of normal website the whole page wil get render but in **SPA** only that thing is changed rest of the things will remain same.

Let’s say you visit a website and view a painting of a house and a tree. Traditional multi-page websites paint the entire picture for you on the server and send it over to your browser.

The SPA send all the raw data and the components which is required so now the SPA chooses how to display the right pieces and render it on the browser.

But the speed of single page applications comes in when you request new content — like clicking on “next,” filtering results, opening an email, or in our case, asking to see a different tree.

**On a traditional website, your request for a new tree would cause the server to repaint the entire picture and send it back.**

A portrayal of a traditional application needing to request a full rendering for every change whenever there is new data to input.

**With a single page application, the server says, “Hey, I’ve got a new tree for you, but you’ve already got the house so just leave that the same.” Then, it sends the page updated instructions for a new tree and the paint to make it.**

By transferring the painting work (or page rendering) from the server to the client (you), the page can be dynamically rewritten instead of going through an entire reload. This makes things a whole lot faster.



