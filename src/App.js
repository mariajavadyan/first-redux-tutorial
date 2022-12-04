import { useState } from "react";
import { createStore } from "redux";

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click {count} times</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />

      <h1>Redux in console</h1>
    </div>
  );
}

const initialState = {
  name: "Karen",
  secondName: "Javadian",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ChangeName":
      return { ...state, name: action.payload };

    case "ChangeSecondName":
      return { ...state, secondName: action.payload };
    default:
      return { ...state };
  }
}

const store = createStore(reducer);

console.log(store.getState());

const changeName = {
  type: "ChangeName",
  payload: "Maria",
};

const changeSecondName = {
  type: "ChangeSecondName",
  payload: "Javadyan",
};

store.dispatch(changeName);
console.log(store.getState());
store.dispatch(changeSecondName);
console.log(store.getState());
