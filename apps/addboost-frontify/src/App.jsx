import { RouterProvider } from "react-router";
import { router } from "./router";
import { ContextProvider } from "./Components/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}

export default App;
