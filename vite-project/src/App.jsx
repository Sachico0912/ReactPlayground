function MyComponent(props) {
  console.log(props);

  //{a: 'hello world'}
  //a: "hello world"
  //[[Prototype]]: Object

  props.c(); //呼叫父傳遞過來的函式

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
      <MyComponent
        a="hello world"
        b="你好"
        c={() => {
          console.log("hi");
        }}
      />
    </>
  );
}

export default App;

// MyComponent 是子
// App 是父
// props 是父傳遞資料給子
