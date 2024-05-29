import Todo from "./components/Todo";
import { AppProvider } from "./context/Context";

function App() {
  return (
    <AppProvider>
      <Todo />
    </AppProvider>
  );
}

export default App;
