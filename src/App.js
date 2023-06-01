import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {

    const dragItem = useRef();
    const dragOverItem = useRef();

    //adding items inside list~
    const [list, setList] = useState(['Good', 'Boy', 'Is A', 'Rajeev']);

    const dragStart = (e, position) => {
        dragItem.current = position;

    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;

    };

    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };

    return (
        <>
            <div className='lg:flex lg:w-1/2 md:w-full text-center lg:justify-center md:justify-center lg:h-72 md:h-auto sm:h-full border lg:mx-72 lg:my-20 bg-amber-50 '>
                {
                    list &&
                    list.map((item, index) => (
                        <div className='border-dashed border-2 border-orange-400 m-4 p-4 bg-orange-100 h-14 w-1/2 lg:my-20 md:my-20 sm:my-16'
                            onDragStart={(e) => dragStart(e, index)}
                            onDragEnter={(e) => dragEnter(e, index)}
                            onDragEnd={drop}
                            key={index}
                            draggable>
                            {item}
                            <div className='lg:border-2 lg:border-orange-400 lg:w-24 lg:relative lg:top-20'></div>
                        </div>
                    ))}

            </div>
        </>
    );
};

export default App;
