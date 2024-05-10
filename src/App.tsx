import { BudgetProvider } from "./context/budget-context";
import { HomePage } from "./pages/home";

function App() {
  return (
    <BudgetProvider>
      <HomePage />
    </BudgetProvider>
  );
}

export default App;
