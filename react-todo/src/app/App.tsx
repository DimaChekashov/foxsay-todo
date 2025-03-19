import { TodosPage } from "../pages/todos";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <div className="max-w-lg mx-auto py-12">
        <h1 className="font-bold text-3xl mb-6">React Todos</h1>
        <TodosPage />
      </div>
    </Providers>
  );
}

export default App;
