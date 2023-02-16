import "@/global";
import "@/global.scss";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useGetStoreData } from "./Hooks";

const App = () => {
  const [data, setData, delLocal] = useGetStoreData("userId");
  useEffect(() => {
    setData({ name: "jack", age: 18 });
  }, []);
  console.log(data);
  return (
    <div
      onClick={() => {
        delLocal('userId');
      }}>
      webpack5+react+ts
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

