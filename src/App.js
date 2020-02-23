import React, {useState} from 'react';
import './App.css';
import TreeComponent from "./components/TreeComponent";

const data = {
    name: '/root',
    children: [
        {
            name: 'music',
            children: [
                {
                    name: 'Bellyache.mp3'
                },
                {
                    name: 'Mamma Mia.mp3'
                },
                {
                    name: 'After Dark.mp3'
                },
                {
                    name: 'Two Steps From Hell',
                    children : [
                        {
                            name : 'hero.mp3'
                        },
                        {
                            name : 'victory.mp3'
                        }
                    ]
                }
            ]
        },
        {
            name: 'movies',
            children: [
                {
                    name: 'Lord Of The Rings.avi'
                },
                {
                    name: 'Mamma Mia.avi'
                },
            ]
        }
    ]
}


function App() {
    let [forceExpanded, setforceExpanded] =  useState(false);

    return (
        <div className="App">
            <button onClick={() => {setforceExpanded(true)}}> Click </button>
            <TreeComponent forceExpanded={forceExpanded} data={data}/>
        </div>
    );
}

export default App;
