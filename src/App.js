import React, {useState} from 'react';
import './App.css';
import TreeComponent from "./components/TreeComponent";

let statuses = new Map();

function App() {

    let [forceExpanded, setforceExpanded] =  useState({forced : false, value : false});
    let [expandedAll, setexpandedAll] =  useState(false);
    let [data] = useState({
        name: '/root',
        subchildren: [
            {
                name: 'music',
                subchildren: [
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
                        subchildren : [
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
                subchildren: [
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
                subchildren: [
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
                        subchildren : [
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
    })
    const componentStatus = ( id, data ) => {

        statuses.set(id , data)

        if( ([...statuses.values()].filter((element) => element === false ).length ) === 0) {
            setexpandedAll(true)
        } else {
            setexpandedAll(false)
        }

    }

    const forceAction = () => {
        setforceExpanded({ forced : true, value : !expandedAll });
    }

    return (
        <div className="App">
            <button className="btn"
                    onClick={forceAction}> { expandedAll ? 'Colapse All' : 'Expand All'}
            </button>
            <TreeComponent
                forceExpanded={forceExpanded}
                data={data}
                componentStatus={componentStatus}
            />
        </div>
    );
}

export default App;
