import { useContext, useState } from "react";
import { Button, ConfigProvider, Layout, Table } from "antd";
import "./App.less";
import { Main } from "./layouts";
import { ThemeContext, ThemeContextProvider } from "./themes";

function App() {
  const { theme: themeContext } = useContext(ThemeContext);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4254ba",
          borderRadius: 0,
          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <div className="App">
        <Main />
      </div>
    </ConfigProvider>
  );
}

export default App;
