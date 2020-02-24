import React, {useContext, useEffect, useState} from 'react';
import {v4 as uuid} from "uuid";
import {TreeContext} from "../context/TreeContext";

function TreeComponent(props) {

    //state
    let [expanded, setExpanded] = useState(false)
    // const [id] = useState(uuid())

    const subchildren = props.data.subchildren
    const name = props.data.name
    const depth = props.depth || 1

    let {componentStatus, forceAction, expandedStatus} = useContext(TreeContext)

    //observers
    useEffect(() => {
        setExpanded(!expandedStatus)
    }, [forceAction])

    useEffect(() => {
        if ( subchildren && subchildren.length > 0){
            componentStatus(name ,expanded)
        } else {
            componentStatus(name ,true)
        }
    }, [componentStatus, expanded, name, subchildren])

    //render
    return (
        <div>
            <div className="node"
                style={{marginLeft: depth * 30}}
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <SymbolSpan expanded={expanded} subchildren={subchildren} name={name}/>
                </div>
            </div>

            {
                subchildren
                && subchildren.length > 0
                && expanded
                && subchildren.map((v, i) => {
                    return <TreeComponent depth={depth + 1} key={i} data={v} />
                })
            }

        </div>
    );
}


const SymbolSpan = (props) => {
    let symbol

    if (props.subchildren) {
        symbol = props.expanded ? '\u25BC' : '\u2BC8'
    } else {
        symbol = '\u2802 '
    }
    return <span> {symbol} {props.name} </span>
}

export default TreeComponent;