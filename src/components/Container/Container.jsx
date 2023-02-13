import List from "../List/List";
import Button from "../Button/Button";
import Header from "../Header/Header";
import "./container.css";

function Container({
  list,
  containerID,
  removeContainer,
  addItem,
  deleteItem,
}) {
  return (
    <div className="container">
      <Header addItem={addItem} containerID={containerID} />
      <List list={list} deleteItem={deleteItem} containerID={containerID} />
      <Button
        text={"Remove List"}
        action={() => removeContainer(containerID)}
      />
    </div>
  );
}

export default Container;
