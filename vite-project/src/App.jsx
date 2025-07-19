function MyComponent(props) {
  console.log(props);

  //{a: 'hello world'}
  //a: "hello world"
  //[[Prototype]]: Object

  return (
    <>
      <div>{props.a}</div>
      <div>{props.b}</div>
    </>
  );
}

function App() {
  return (
    <>
      <MyComponent a="hello world" b="你好" />
    </>
  );
}

export default App;

// MyComponent 是子
// App 是父
// props 是父傳遞資料給子
