// Another DND built by using React Hooks only


import React, { useState, useRef } from 'react';
import './App.css';

const Testfile = () => {
//locate the item to be dragged
    const dragItem = useRef();
    const dragOverItem = useRef();

    const [list, setList] = useState(['Good', 'Boy', 'Is A', 'Rajeev']);

    //Track items being dragged
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
            <div className='lg:flex lg:w-1/2 md:w-full sm:w-full text-center lg:justify-center md:justify-center lg:h-72 md:h-auto sm:h-96 border lg:mx-72 lg:my-20 bg-amber-50'>
                {list &&
                    list.map((item, index) => (
                                   
                        <div className='border-dashed border-2 border-orange-400 m-4 p-4 bg-orange-100 h-14 w-1/2 lg:my-20 md:my-20 sm:my-20'
                            onDragStart={(e) => dragStart(e, index)}
                            onDragEnter={(e) => dragEnter(e, index)}
                            onDragEnd={drop}
                            key={index}
                            draggable>
                            <div>{item}</div>
                            <div className='lg:border-2 lg:border-orange-400 lg:w-24 lg:relative lg:top-20'></div> 
                        </div>
                         
                    ))}

            </div>
        </>
    );
};

export default Testfile;

 