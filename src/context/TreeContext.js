import React, {createContext, useState} from "react";

export const TreeContext = createContext()

export const TreeProvider = (props) => {

    let statuses = new Map();

    let [forceAction, setforceAction] = useState(false);
    let [expandedStatus, setexpandedStatus] = useState(true);

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
                        subchildren: [
                            {
                                name: 'hero.mp3'
                            },
                            {
                                name: 'victory.mp3'
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
                        subchildren: [
                            {
                                name: 'Stranger Things.avi'
                            },
                            {
                                name: 'La Casa De Papel.avi'
                            }
                        ]
                    }
                ]
            }
        ]
    })

    return (
        <TreeContext.Provider value={{data, statuses, componentStatus, expandedStatus, setforceAction, forceAction}}>
            {props.children}
        </TreeContext.Provider>
    )
}