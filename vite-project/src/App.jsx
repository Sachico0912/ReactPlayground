function SecondCompoenet() {
  return <h1>hello world</h1>;
}

function MyComponent({ children }) {
  return <>{children}</>;
}

function App() {
  return (
    <>
      <MyComponent>
        <SecondCompoenet />
      </MyComponent>
    </>
  );
}

export default App;
