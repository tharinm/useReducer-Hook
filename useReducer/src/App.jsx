import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "setName") {
    return{...state, name:action.data}
  }
  else if (action.type === "setAge") {
    return { ...state, age: action.data };
  }
  else if (action.type === "setCity") {
    return { ...state, city: action.data };
  }
  else {
    return state
  }
};

function App() {
  const [state, setState] = useReducer(reducer, {
    name: '',
    age: '',
    city:''
  });
  console.log(state);
  return (
    <div>
      <input
        type="text"
        placeholder="name"
       // value={state.name}
        onChange={(e) => {
          setState({
            type: "setName",
            data: e.target.value,
          });
        }}
      />

      <input
        type="text"
        placeholder="age"
     //   value={state.age}
        onChange={(e) => {
          setState({
            type: "setAge",
            data: e.target.value,
          });
        }}
      />
      <input
        placeholder="city"
        type="text"
       // value={state.city}
        onChange={(e) => {
          setState({
            type: "setCity",
            data: e.target.value,
          });
        }}
      />
    </div>
  );
}

export default App;
