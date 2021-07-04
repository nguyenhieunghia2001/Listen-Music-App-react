# React Js
### Project 3: App listen music Basic
### Server link:   
### Infomation of the application: 
- Page: Home and music love
- Function: 
  - Play - Pause - Next - Pre - Loop - Radom music
  - Add and remove to love list
  - Listen music when redirect page :3
# Component Lifecycle

**DidMount**
```
class Example extends React.Component {
  componentDidMount() {
    console.log('I am mounted!');
  }
  render() {
    return null;
  }
}
```
```
function Example() {
  useEffect(() => console.log('mounted'), []);
  return null;
}
```

**DidUpdate**
```
- componentDidMount() {
  console.log('mounted or updated');
}
componentDidUpdate() {
  console.log('mounted or updated');
}
```
```
- useEffect(() => console.log('mounted or updated'));
```

**WillUnMount**
```
componentWillUnmount() {
  console.log('will unmount');
}
```
```
useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);
```