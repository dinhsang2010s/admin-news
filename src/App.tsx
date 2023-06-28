import { useContext, useState } from "react";
import { Button, ConfigProvider, Layout } from "antd";
import "./App.less";
import { Main } from "./layouts";
import { ThemeContext, ThemeContextProvider } from "./themes";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4254ba",
            borderRadius: 4,
          },
          components: {
            Table: {
              colorBorderSecondary: "#dee2e6",
              colorFillAlter: "#ffffff",
              colorFillContent: "#ffffff",
              colorFillSecondary: "#49526b",
              colorBgContainer: "#ffffff",
            },
          },
        }}
      >
        <div className="App">
          <Main />
        </div>
      </ConfigProvider>
    </ThemeContextProvider>
  );
}

export default App;
