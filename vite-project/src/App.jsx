import ChildComponent from "./ChildComponent";

function MyComponent() {
  return <ChildComponent />;
}

function App() {
  return (
    <div>
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default App;

// JSX => Vite 裡的編譯工具 => JavaScript
// 執行時 vite 將 JSX 轉譯成 JS 物件 React 轉換物件為Html
// PascalCase 命名，每個單字首字母大寫
// parent component 及 child component
