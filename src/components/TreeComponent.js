import React, {useContext, useEffect, useState} from 'react';
import {TreeContext} from "../context/TreeContext";

function TreeComponent(props) {

    const {subchildren, name, id } = props.data
    const depth = props.depth || 1
    const marginLeftSize = 30

    let {componentStatus, forceAction} = useContext(TreeContext)
    let [expanded, setExpanded] = useState(false)

    //this is triggered when button expand/colapse is clicked
    useEffect(() => {
        setExpanded(forceAction.payload)
    }, [forceAction.trigger])

    //sets the component status to true / false expanded
    useEffect(() => {
        if ( subchildren && subchildren.length > 0){
            componentStatus(id ,expanded)
        } else {
            componentStatus(id ,true)
        }
    }, [expanded])

    //render
    return (
        <div className={'treeComponent'}>
            <div className="node"
                style={{marginLeft: depth * marginLeftSize}}
                onClick={() => setExpanded(!expanded)}
            >
                <div className={subchildren && subchildren.length > 0 ? 'directory' : 'file'}>
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

    let symbol = '\u2802 '

    if (props.subchildren) {
        symbol = props.expanded ? '\u25BC ' : '\u2BC8 '
    }

    return <span> {symbol} {props.name} </span>
}

export default TreeComponent;