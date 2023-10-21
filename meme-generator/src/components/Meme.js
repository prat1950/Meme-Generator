import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    


    const [img, func]=React.useState("");

    

    function getMeme(){
        const memesArray=memesData.data.memes;
        const randNum=Math.floor(Math.random()*memesArray.length);
        func(memesArray[randNum].url)
    }
    
    
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-16 w-4/5 mx-auto">
            <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" placeholder="Top Text" />
            <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" placeholder="Bottom Text"/>
            <button className="col-span-2 row-span-1 p-2 mx-auto bg-blue-500 text-white rounded-md bg-gradient font-karla font-bold w-4/5" onClick={getMeme}>Generate A new Meme 🖼 </button>
            </div>
            <div>
                <img src={img} alt="your meme" className="w-4/5 mx-auto mt-12"/>
            </div>
        </div>

    )
}