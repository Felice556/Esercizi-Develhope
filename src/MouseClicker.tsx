import React from 'react';
export function MouseClicker() {
    
    return (
        <div>
         <button name="one" onClick={(event) => {console.log(event.currentTarget.name)}}>
    <img src="..." alt="mouse" width="100" height="100" 
        onClick={(event) => {
            event.stopPropagation();
           console.log((event.target as HTMLImageElement).src);
        }}/>
</button>
           
        </div>
    );
}

//l'evento risale anche al padre quando clicchi il figlio