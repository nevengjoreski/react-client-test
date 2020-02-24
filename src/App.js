import React from 'react';
import './App.css';
import {TreeProvider} from "./context/TreeContext"
import TreeComponentWrapper from "./TreeComponentWrapper";



function App() {

    return(
        <TreeProvider>
            <TreeComponentWrapper />
        </TreeProvider>
    )
}

export default App;
