function MyComponent() {
  let clicks = 0;
  const handleClick = () => {
    clicks++;
    console.log(clicks);
  };
  return (
    <>
      <button onClick={handleClick}>點擊次數:{clicks}</button>
    </>
  );
}

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
