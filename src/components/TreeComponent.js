import React, {useContext, useEffect, useState} from 'react';
import {TreeContext} from "../context/TreeContext";

function TreeComponent(props) {

    const {subchildren, name, id } = props.data
    const depth = props.depth || 1

    let {componentStatus, forceAction} = useContext(TreeContext)
    let [expanded, setExpanded] = useState(false)

    useEffect(() => {
        setExpanded(forceAction.payload)
    }, [forceAction.trigger])

    useEffect(() => {
        if ( subchildren && subchildren.length > 0){
            componentStatus(id ,expanded)
        } else {
            componentStatus(id ,true)
        }
    }, [expanded])

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
                    return <TreeComponent depth={depth + 1} key={v.id} data={v} />
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