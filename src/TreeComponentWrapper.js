import React, {useContext} from 'react';
import TreeComponent from "./components/TreeComponent";
import {TreeContext} from "./context/TreeContext";


function TreeComponentWrapper() {

    let {data, forceAction, setforceAction, expandedStatus} = useContext(TreeContext)

    return (
            <div className="App">
                <button className="btn"
                    onClick={() => setforceAction(!forceAction)}> {expandedStatus ? 'Colapse All' : 'Expand All'}
                </button>
                <TreeComponent data={data} />
            </div>
    );
}

export default TreeComponentWrapper;