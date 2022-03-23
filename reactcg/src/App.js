import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toliet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk(Wooden)",
      amount: 450.0,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Lets Get Started!</h2>
      {/* <ExpenseItem expense={expenses[0]} /> */}
      {expenses.map((item) => (
        <ExpenseItem expense={item} />
      ))}
    </div>
  );
};

export default App;
