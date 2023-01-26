
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
