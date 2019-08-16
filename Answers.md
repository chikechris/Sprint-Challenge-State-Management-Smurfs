What problem does the context API help solve?
Answer: It solves the problem of passing props around "prop drilling" and makes use of provider and customer to pass props to even grandchildren components.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Answer: It houses the data that is needed to make change in the application, usually actions have an action type and some data that we want connect with that action type. Reducers are where actions are sent to update the state and the reducer knows how to update the state according to what the action has provided. The store is simply a giant object containing everything needed to change the state of the application, it's the ONLY place where the application gets all the state changes.

What is the difference between Application state and Component state? When would be a good time to use one over the other?
Answer: The difference between application state and component state is that, application state is immutable, it can only be copied and that copy can be changed. This is makes it easy to manage state without worrying about corruption of the state. But component state is localized to the component and keeping track of the changes can be nightmare in a large scale. Application state is perfect for large applications and component state is good for very small application.

Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
Answer: Redux Thunk is a middleware, it allows us to intercept the actions dispatched from the action to reducers. It can modify and stop any actions from reaching the reducer.

What is your favorite state management system you've learned and this sprint? Please explain why!
Answer: I like Redux. Redux gives flexibility. It also shows everything clearly, for example, you have the actions, you know what your action are suppose to do. You also have the reducers and you know exactly what your reducers are doing.