import React from "react";
// import ToasterContainer from "./components/toasterContainer/toasterContainer";
// import UserListRender from "./components/userListRender/userListRender.component";
// import ListRendering from "./components/ListRendering/ListRendering.component";
// import TransistionList from "./components/transistionList/transistionList.component";
import "./App.css";
import AutoSaveForm from "./components/autoSaveForm.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Calculator from "./components/calculator/calculator.component";
import useServerCall from "./customHooks/useServerCall.ts";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const data = useServerCall(true);
  console.log("Data", data);

  return (
    <Calculator />
    // <QueryClientProvider client={queryClient}>
    //   <AutoSaveForm />
    // </QueryClientProvider>
  );
};

export default App;
