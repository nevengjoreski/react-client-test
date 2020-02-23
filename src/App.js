import React from 'react';
import './App.css';
import TreeComponent from "./components/TreeComponent";

const data = {
    name: '/',
    children: [
        {
            name: 'music',
            children: [
                {
                    name: 'song.mp3'
                }
            ]
        },
        {
            name: 'movies',
            children: [
                {
                    name: 'lotr.avi'
                }
            ]
        }
    ]
}


function App() {
    return (
        <div className="App">
            <TreeComponent data={data}/>
        </div>
    );
}

export default App;
