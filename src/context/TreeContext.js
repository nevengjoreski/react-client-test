import React, {createContext, useState} from "react";
import { v4 as uuid } from 'uuid';
export const TreeContext = createContext()


export const TreeProvider = (props) => {

    const [statuses] = useState(new Map())
    let [expandedStatus, setexpandedStatus] = useState(false);
    let [forceAction, setforceAction] = useState({trigger : false , payload : false});

    
    const componentStatus = (id, data) => {

        statuses.set(id, data)
        updateStatus()
    }
    
    const updateStatus =  () => {

        // steps . destruct statuses Map to array => get values => check if there is false status element => set expandedAll to true/false
        if (([...statuses.values()].filter((element) => element === false).length) === 0) {
            setexpandedStatus(true)
        } else {
            setexpandedStatus(false)
        }
    }

    const [data] = useState({
        name: '/root',
        id : uuid(),
        subchildren: [
            {
                name: 'music',
                id : uuid(),
                subchildren: [
                    {
                        name: 'Bellyache.mp3',
                        id : uuid(),
                    },
                    {
                        name: 'Mamma Mia.mp3',
                        id : uuid(),
                    },
                    {
                        name: 'After Dark.mp3',
                        id : uuid(),
                    },
                    {
                        name: 'Two Steps From Hell',
                        id : uuid(),
                        subchildren: [
                            {
                                name: 'hero.mp3',
                                id : uuid(),
                            },
                            {
                                name: 'victory.mp3',
                                id : uuid(),
                            }
                        ]
                    }
                ]
            },
            {
                name: 'movies',
                id : uuid(),
                subchildren: [
                    {
                        name: 'Lord Of The Rings.avi',
                        id : uuid(),
                    },
                    {
                        name: 'Mamma Mia.avi',
                        id : uuid(),
                    },
                ]
            },
            {
                name: 'series',
                id : uuid(),
                subchildren: [
                    {
                        name: 'Gossip Girl.avi',
                        id : uuid(),
                    },
                    {
                        name: 'Narcos.avi',
                        id : uuid(),
                    },
                    {
                        name: 'Game of Thrones.avi',
                        id : uuid(),
                    },
                    {
                        name: 'Favourites',
                        id : uuid(),
                        subchildren: [
                            {
                                name: 'Stranger Things.avi',
                                id : uuid(),
                            },
                            {
                                name: 'La Casa De Papel.avi',
                                id : uuid(),
                            }
                        ]
                    }
                ]
            }
        ]
    })

    return (
        <TreeContext.Provider value={{data, statuses, componentStatus, expandedStatus, forceAction, setforceAction}}>
            {props.children}
        </TreeContext.Provider>
    )
}