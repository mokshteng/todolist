import "./App.css";
import { useState } from "react";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import uuid from "react-uuid";

function App() {
  const [containers, setContainers] = useState({});
  const createContainer = () => {
    let isNewContainerValid = true;
    for (const key in containers) {
      if (containers[key].length === 0) {
        isNewContainerValid = false;
        break;
      }
    }
    if (!isNewContainerValid) return;
    const id = uuid();
    const newContainer = {};
    newContainer[id] = [];
    setContainers({ ...containers, ...newContainer });
  };
  const removeContainer = (id) => {
    const newContainer = {};
    for (const [key, value] of Object.entries(containers)) {
      if (key === id) {
        continue;
      }
      newContainer[key] = value;
    }
    setContainers({ ...newContainer });
  };
  const addItem = (text, containerID) => {
    const newList = containers[containerID];
    newList.push({ itemID: uuid(), text })
    setContainers({ ...containers, [containerID]: newList });
  };
  const deleteItem = (itemID, containerID) => {
    const newList = containers[containerID].filter((val) => {
      return val.itemID !== itemID;
    });
    setContainers({ ...containers, [containerID]: newList });
  };
  const containerList = [];
  for (const [key, value] of Object.entries(containers)) {
    console.log(value);
    containerList.push(
      <Container
        key={key}
        containerID={key}
        list={value}
        removeContainer={removeContainer}
        addItem={addItem}
        deleteItem={deleteItem}
      />
    );
  }
  return (
    <>
      <Button text={"New List"} action={() => createContainer()} />
      <div className="app">{containerList}</div>
    </>
  );
}

export default App;
