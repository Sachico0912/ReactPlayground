function App() {
  return (
    <div className={false ? "a c" : "b c"}>
      {true ? <h1>hello</h1> : <h1>world</h1>}
    </div>
  );
}

export default App;
