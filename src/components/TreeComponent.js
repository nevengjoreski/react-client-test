import React, {useEffect, useState} from 'react';
import {v4 as uuid} from "uuid";

function TreeComponent(props) {

    //state
    let [expanded, setExpanded] = useState(false)
    // const [id] = useState(uuid())

    const children = props.data.children
    const name = props.data.name
    const depth = props.depth || 1

    //observers
    useEffect(() => {
        if(props.forceExpanded.forced){
            setExpanded(props.forceExpanded.value)
        }
    }, [props.forceExpanded])

    useEffect(() => {
        if ( children && children.length > 0){
            props.componentStatus(name ,expanded)
        } else {
            props.componentStatus(name ,true)
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
                    <SymbolSpan expanded={expanded} children={children} name={name}/>
                </div>
            </div>

            {
                children
                && children.length > 0
                && expanded
                && children.map((v, i) => {
                    return <TreeComponent depth={depth + 1} key={i} data={v}
                        expanded={expanded} forceExpanded={props.forceExpanded}
                        componentStatus={props.componentStatus}/>
                })
            }

        </div>
    );
}


const SymbolSpan = (props) => {
    let symbol

    if (props.children) {
        symbol = props.expanded ? '\u25BC' : '\u2BC8'
    } else {
        symbol = '\u2802 '
    }
    return <span> {symbol} {props.name} </span>
}

export default TreeComponent;