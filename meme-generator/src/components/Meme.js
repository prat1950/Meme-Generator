import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    



    const [meme, setMeme ]=React.useState({
        topText:"",
        bottomText:"",
        randImg:"http://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemes, setAllMemes]=React.useState(memesData);


    function getMeme(){
        const memesArray=memesData.data.memes;
        const randNum=Math.floor(Math.random()*memesArray.length);
        const url=memesArray[randNum].url
        setMeme(prevMeme=> ({
            ...prevMeme,
            randImg:url
        }))
        } ;
    
    function handleChange(event){
        const {name, value}=event.target;
        setMeme((prevMeme)=>({
            ...prevMeme,
            [name]:value
        }))
    } 

    
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-16 w-4/5 mx-auto">
            <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" placeholder="Top Text"
            name="topText"
            value={meme.topText} 
            onChange={handleChange}
            />
            <input type="text" className="col-span-1 row-span-1 p-2 border border-gray-300 rounded-md" placeholder="Bottom Text" 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            
            />
            <button className="col-span-2 row-span-1 p-2 mx-auto bg-blue-500 text-white rounded-md bg-gradient font-karla font-bold w-4/5" onClick={getMeme}>Generate A new Meme 🖼 </button>
            </div>
            <div className="relative">
                <h2 className="absolute inset-x-0 top-5 text-center font-karla text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{meme.topText}</h2>
                <h2 className="absolute inset-x-0 bottom-5 text-center font-karla text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{meme.bottomText}</h2>
                <img src={meme.randImg} alt="your meme" className="w-4/5 mx-auto mt-12"/>
            </div>
        </div>

    )
}
