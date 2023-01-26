## Is JSX mandatory for React?
### Ans -> JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

## Is ES6 mandatory for React?
### Ans -> No

## How can I write comments in JSX?
### Ans-> same as we write inside the js.

## What is <React.Fragment></React.Fragment> and <></> ?
### Ans-> React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM. This can be useful when rendering multiple child elements/components in a single parent component. React components can only render one element, and if you have multiple elements, the common practice is to wrap them in a single root element, usually a <div> wrapper. This workaround works for most cases, but sometimes adding an extra DOM element is not feasible.  


## What is Virtual DOM ?

### Ans-> Virtaul dom is a virtual represenation of a UI which is kept inside the memory and sync it with the Real DOM .This process is known as `recoincilation`.

### SO bascially react gives us an declarative APIs with the help of this you don’t have to worry about exactly what changes on every update. But how this is implemented inside the React.

## `THE DIFFING ALGORITHM`

### Let's say we have 2 Trees React first compares the two root elements. The behavior is different depending on the types of the root elements.

`If we have an Element of different Types` -> React first compares the roots of two different trees if they both are different than react 

will tear down the old tree and build the new tree from scratch.Going from <a> to <img>, or from <Article> to <Comment>, or from <Button> to <div> - any of those will lead to a full rebuild.When tearing down a tree old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive UNSAFE_componentWillMount() and then componentDidMount(). 

For Example:-

    <div>
    <counter />
    </div>

    <span>
    <counter />
    </span>

`This will destroy the old Counter and remount a new one.`

## DOM Elements Of The Same Type

When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. 

For example:

    <div className="before" title="stuff" />

    <div className="after" title="stuff" />

`By comparing these two elements, React knows to only modify the className on the underlying DOM node.`


## Recursing On Children


Let'say if we have a list of multiple items. React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

For example, when adding an element at the end of the children, converting between these two trees works well:

    <ul>
    <li>first</li>
    <li>second</li>
    </ul>

    <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
    </ul>

`React will match the two <li>first</li> trees, match the two <li>second</li> trees, and then insert the <li>third</li> tree.`    


If we have insert an element at the begining of the list it may cause an performance issue beacuse now the react will render every child and it may slow down the performance.

For Example:-

    <ul>
    <li>Duke</li>
    <li>Villanova</li>
    </ul>

    <ul>
    <li>Connection</li>
    <li>Duke</li>
    <li>Villanova</li>
    </ul>

In the above code we are placing connection on the top of the list so now react will push the other elements also to update the list.


## Keys -> 

In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:

    <ul>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
    </ul>

    <ul>
    <li key="2014">Connecticut</li>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
    </ul

Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.    
That's why react can update the DOM fastly.



## Why do we need keys in react??

### Keys help React identify which items have changed, are added, or are removed and due to this the performance of our app is improved.

## Can we use index as keys in React?

###  Usage of index as key is ok, if you are developing a list of items that isn’t supposed to be changed from one state to another. For example, selector for filter where all items are defined and never changed during user interactions. But if list of items is supposed to have features of deleting, resorting, adding new items— in this case, you have to take care of the key in a proper way to avoid any performance issues and avoid unexpected bugs.

## What is props in React?

### The props are a type of object were we can store our value.In react js the data can be passed from one component to another using these props from child to parent it is similar to how the arguement is passed inside the function.Inside the component, we can add the attributes called props; however, we cannot change or modify props inside the component as they are immutable.


`How to pass props `

*1stWay*

function App(props){
    return (
        <div>Hi {props.name}</div>
    )
}

*2nd Way*

function App({name}){   <!--- here we destructure directly the name and we can use easily now we didn't have to write the props.name -->
    return (
        <div>Hi {name}</div>
    )
}


## What is a Config Driven UI ?


