function App() {
  return (
    <div className={`c ${false ? "a" : "b"}`}>
      {true ? <h1>hello</h1> : <h1>world</h1>}
    </div>
  );
}

export default App;
