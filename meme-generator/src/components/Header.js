import React from 'react';

export default function Header() {
    return(
        <header>
            <div className='flex flex-row bg-gradient h-44 items-center '>
                <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" className="mx-auto h-16 my-auto sm:ml-4 mr-0" />
                <p className='flex font-bold text-white font-karla text-2xl mx-auto xm:text-4xl h-24 pr-2 my-auto ml-2 items-center sm:text-5xl  sm:text-left'>Meme Generator</p>
            </div>
            
        </header>
    )
}
