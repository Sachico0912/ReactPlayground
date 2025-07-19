import { useState } from "react";

function MyComponent() {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
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

// state 是React的核心概念之一，用於在組件中存儲和管理狀態。
// useState 會回傳陣列
//1. state 的內容
//2. 更改 state 內容的函數
