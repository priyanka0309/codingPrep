import { useState } from "react";
import "./styles.css";

const grid = [
  { id: 1, color: "blue", isOpen: false },
  { id: 2, color: "blue", isOpen: false },
  { id: 3, color: "blue", isOpen: false },
  { id: 4, color: "blue", isOpen: false },
  { id: 5, color: "blue", isOpen: false },
  { id: 6, color: "blue", isOpen: false },
  { id: 7, color: "blue", isOpen: false },
  { id: 8, color: "blue", isOpen: false },
  { id: 9, color: "blue", isOpen: false }
];
export default function ToDoList() {
  const [gridData, setGridData] = useState([...grid]);
  // const [currentTask, setCurrentTask] = useState("");
  const onGridUpdate = (id) => {
    setGridData((gridData) => {
      let updatedgrid = gridData.map((eachElement) => {
        return eachElement.id === id
          ? { ...eachElement, isOpen: !eachElement.isOpen }
          : { ...eachElement };
      });
      return updatedgrid;
    });
  };

  return (
    <div className="grid-container">
      {gridData.map((gridElement) => {
        return (
          <div
            className="grid-item"
            style={{
              backgroundColor: gridElement.isOpen ? "red" : gridElement.color
            }}
            onClick={() => onGridUpdate(gridElement.id)}
          >
            {gridElement.isOpen ? gridElement.id : null}
          </div>
        );
      })}
    </div>
  );
}
