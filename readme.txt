***** React JS Best Practices *****

- Keep a component as stateless as possible (dumb component).
- Instead of modifying props inside componentWillReceiveProps or componentWillMount, do more in the render function.
- In component with states, do less setState. Let parent container control that component's state with callbacks.
- Use propTypes and defaultProps when creating components.
- If component takes className, it probably could be it's own component (debatable).
- Make small component to do small things (SRP).
- Use arrow functions where possible.
- Have container fetching and pass the data down as props.
- A container holds component and can also hold another container.


***** Git (VCS) *****

- Always make sure to work from a branch created from the master.
- Make small commits, often.
- Don't mix two different "topics" in the small branch. (Ex: create component A, Fix issue in component B).