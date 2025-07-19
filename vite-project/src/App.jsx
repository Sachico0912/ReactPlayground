function MyComponent({ a, b, c }) {
  c();
  return (
    <>
      <div>{a}</div>
      <div>{b}</div>
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

// 物件的解構賦值是以屬性名來取用資料
// 順序不重要，名字很重要
