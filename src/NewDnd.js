import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const listItems = [
    { id: "1", label: "Good" },
    { id: "2", label: "Boy" },
    { id: "3", label: "Is A" },
    { id: "4", label: "Rajeev" },
  ];
  const [dragDropList, setDragDropList] = useState(listItems);

  const onDragComplete = (result) => {
    if (!result.destination) return;

    const arr = [...dragDropList];

    //Changing the position of Array element
    let removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    //Updating the list
    setDragDropList(arr);
  };

  return (
    <div className="container">
      <div className="card">
      

        <DragDropContext onDragEnd={onDragComplete}>
          <Droppable droppableId="drag-drop-list" direction="horizontal">
            {(provided) => (
              <div
                className="drag-drop-list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {dragDropList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.label}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="item-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                      
                        <p className="label">{item.label}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;