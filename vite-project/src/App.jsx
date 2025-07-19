function App() {
  return (
    <div className={`c ${false ? "a" : "b"}`}>{true && <h1>hello</h1>}</div>
  );
}

export default App;

// AND 邏輯運算的左邊的值是真值的時候，會回傳右邊的值；反之則回傳左邊
// JSX 會忽略false 跟 undefined 的值
