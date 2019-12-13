1. What problem does the context API help solve?
  Prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Store holds state for everything(single source of truth), reducer tells the store how to update state, and actions tell state when to use the reducer
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state is free for all components to use at any time, whereas component state is only for one component that may be passed through props to another component, but is not very widely accessible. Application state = larger projects and Component state = smaller projects
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Allows us to asyncronously do things to our code
1. What is your favorite state management system you've learned and this sprint? Please explain why!
  REDUX! It was so much fun to figure it out when everyone said it would be hard. It was hard, but understanding it better made it that much more fun to learn!
