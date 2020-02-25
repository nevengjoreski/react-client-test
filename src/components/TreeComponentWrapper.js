import React, {useContext} from 'react';
import TreeComponent from "./TreeComponent";
import {TreeContext} from "../context/TreeContext";


function TreeComponentWrapper() {

    const {data, forceAction, setforceAction,  expandedStatus} = useContext(TreeContext)

    return (
            <div className="App">
                <button className="btn"
                    onClick={() => setforceAction({ trigger : !forceAction.trigger, payload : !expandedStatus})}>
                    {expandedStatus ? 'Colapse All \u25BC' : 'Expand All \u2BC8'}
                </button>
                <TreeComponent data={data} />
            </div>
    );
}

export default TreeComponentWrapper;