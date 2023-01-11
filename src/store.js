import { createStore } from "redux";
import counterReducer from "./services/reducer/CounterReducer";

const store= createStore(counterReducer);

export default store;