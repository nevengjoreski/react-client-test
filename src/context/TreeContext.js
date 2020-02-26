import React, {createContext, useState} from "react";
import {json_data} from "../assets/data.json";

export const TreeContext = createContext()

export const TreeProvider = (props) => {

    // props
    const [statuses] = useState(new Map())
    let [expandedStatus, setexpandedStatus] = useState(false);
    let [forceAction, setforceAction] = useState({trigger: false, payload: false});
    const [data] = useState(json_data)

    //methods
    const componentStatus = (id, data) => {

        statuses.set(id, data)
        updateStatus()
    }

    const updateStatus = () => {

        // steps . destruct statuses Map to array => get values => check if there is false status element => set expandedAll to true/false
        if (([...statuses.values()].filter((element) => element === false).length) === 0) {

            setexpandedStatus(true)
            //forces colapse when root is clicked
            setforceAction({...forceAction, payload: false})
        } else {

            setexpandedStatus(false)
        }
    }

    return (
        <TreeContext.Provider value={{data, statuses, componentStatus, expandedStatus, forceAction, setforceAction}}>
            {props.children}
        </TreeContext.Provider>
    )
}