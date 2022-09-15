import React from "react";
const Grid = () => {
    return ( 

/*
        we can also use gap-y- for the horizontal spacing
         and gap-x- for vertical spacging
        to make it responsive for example on tany screen you want signle (1)col 
        and larger screen 3 col

        grid grid-cols-1 sm:grid-cols-3

        increasing the row-span 
        increasing the col-span
        with the number of grid layout

        property
        1. grid-flow-row-dense
        
*/
        <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 gap-2">
            <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px] col-span-3"></div>
            <div className="bg-yellow-500 rounded-lg shadow-xl min-h-[50px] row-span-2"></div>
            <div className="bg-green-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-teal-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-indigo-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-purple-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-pink-500 rounded-lg shadow-xl min-h-[50px]"></div>
            <div className="bg-slate-500 rounded-lg shadow-xl min-h-[50px]"></div>
        </div>
     );
}
 
export default Grid;
