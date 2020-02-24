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
        },
        {
            name: 'series',
            children: [
                {
                    name: 'Gossip Girl.avi'
                },
                {
                    name: 'Narcos.avi'
                },
                {
                    name: 'Game of Thrones.avi'
                },
                {
                    name: 'Favourites',
                    children : [
                        {
                            name : 'Stranger Things.avi'
                        },
                        {
                            name : 'La Casa De Papel.avi'
                        }
                    ]
                }
            ]
        }
    ]
}


function App() {

    let [forceExpanded, setforceExpanded] =  useState(false);
    let [expandedAll, setexpandedAll] =  useState(false);
    let statuses = new Map();

    const componentStatus = ( name, data ) => {

        statuses.set(name , data)
        // TODO not status by name , by uuid
        //will return 0 if all are expanded
        if( ([...statuses.values()].filter((el) => el === false ).length ) === 0) {
            setexpandedAll(true);
        } else {
            setexpandedAll(false);
        }

    }

    return (
        <div className="App">
            <button className="btn" onClick={() => {setforceExpanded(!forceExpanded)}}> { expandedAll ? 'Colapse All' : 'Expand All'} </button>
            <TreeComponent
                forceExpanded={forceExpanded}
                data={data}
                componentStatus={componentStatus}
            />
        </div>
    );
}

export default App;
