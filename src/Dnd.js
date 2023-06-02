import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css"

export default function App() {

    const defaultList = ["Good", "Boy", "Is A", "Rajeev"];
    // React state to track order of items
    const [itemList, setItemList] = useState(defaultList);

    // Function to update list on drop
    const handleDrop = (droppedItem) => {
        // Ignore drop outside droppable container
        if (!droppedItem.destination) return;
        var updatedList = [...itemList];
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // Update State
        setItemList(updatedList);
    };

    return (
        <div className="border-2 border-neutral-200 lg:w-1/2 md:w-full sm:w-screen m-auto lg:mt-10 sm:mt-0 lg:h-72 sm:h-1/2 bg-amber-100">
            <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="list-container">
                    {(provided) => (
                        <div
                            className="lg:flex md:flex justify-center text-center mt-10"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {itemList.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                    {(e) => (
                                        <div
                                            className="border-dashed border-2 border-orange-400 lg:w-32 sm:w-10 lg:h-16 m-3 p-4 "
                                            ref={e.innerRef}
                                            {...e.dragHandleProps}
                                            {...e.draggableProps}
                                        >
                                            {item}
                                            <div className='lg:border-2 lg:border-orange-400 lg:w-24 lg:relative lg:top-20'></div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}

                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}