import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const list = [
  {
    id: '1',
    name: 'Good',

  },
  {
    id: '2',
    name: 'Boy',

  },
  {
    id: '3',
    name: 'Is A',

  },
  {
    id: '4',
    name: 'Rajeev',

  },

]

function DragAndDrop() {
  const [characters, updateCharacters] = useState(list);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className='lg:w-1/2 md:w-full sm:w-full bg-amber-100 lg:text-lg md:text-sm sm:text-sm lg:h-60 md:h-56 sm:h-96 lg:mt-40 md:mt-32 sm:mt-40 lg:ml-72 md:ml-0 sm:ml-0 '>
      <header  >

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} className="flex justify-around mt-32 h-52">
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index} >
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className=" lg:m-4 md:m-4 sm:m-2 lg:p-4 md:p-2 sm:p-2 mt-10">

                          <p className='text-center pt-2 p-2 border-dashed border-2 border-orange-400 lg:w-20 md:w-20 sm:w-20 lg:h-14 md:h-12 sm:h-12 lg:mt-10 md:mt-10 sm:mt-40 '>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <div>
        <div className='lg:border lg:border-orange-400 lg:w-24 lg:absolute lg:top-80 left-80'></div>
        <div className='lg:border lg:border-orange-400 lg:w-24 lg:absolute lg:top-80 left-96 mx-24'></div>
        <div className='lg:border lg:border-orange-400 lg:w-24 lg:absolute lg:top-80 left-1/2'></div>
        <div className='lg:border lg:border-orange-400 lg:w-24 lg:absolute lg:top-80 left-1/2 mx-40'></div>
      </div>
    </div>
  );
}

export default DragAndDrop;
