import { Component } from "react";

function MyComponent() {
  return <h1>你好</h1>;
}

function App() {
  const listItems = [
    { content: "1號", id: 1 },
    { content: "2號", id: 2 },
    { content: "3號", id: 3 },
  ];
  const filterItems = listItems.filter((item) => {
    if (item.content !== "2號") {
      return true;
    }
  });
  return (
    <>
      {filterItems.map((item) => {
        return <div key={item.id}>{item.content}</div>;
      })}
    </>
  );
}

export default App;

// JSX => Vite 裡的編譯工具 => JavaScript
// 執行時 vite 將 JSX 轉譯成 JS 物件 React 轉換物件為Html
// PascalCase 命名，每個單字首字母大寫
// parent component 及 child component
// component 可以重複使用
// <div> 元素可以省略使用 fragment `<>` 包裹
// 利用 {} 可以在 HTML 裡面寫 JS
//  HTML 的 class 在 JSX 中是 className (駝峰)
// HTML 的 for 在 JSX 中是 htmlFor (駝峰)
// 在 JSX 中使用 {{ }} 來使用物件
// 函數後面的 () 是執行的意思
