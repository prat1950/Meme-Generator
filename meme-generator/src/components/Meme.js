import React from "react";

export default function Meme() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-16 w-4/5 mx-auto">
        <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" />
        <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" />
        <button className="col-span-2 row-span-1 p-2 bg-blue-500 text-white rounded-md bg-gradient font-karla font-bold">Generate A new Meme 🖼 </button>
    </div>

    )
}