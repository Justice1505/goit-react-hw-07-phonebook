import "./App.css";
import Phonebook from "./Components/Phonebook/Phonebook"
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <div className="block">
    <Provider store={store}>
        <Phonebook />
    </Provider>
    </div>
  );
}

export default App;
