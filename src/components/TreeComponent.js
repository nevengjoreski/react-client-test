import React, {useEffect, useState} from 'react';
import {v4 as uuid} from "uuid";

function TreeComponent(props) {

    //state
    let [expanded, setExpanded] = useState(false)
    // const [id] = useState(uuid())

    const subchildren = props.data.subchildren
    const name = props.data.name
    const depth = props.depth || 1

    //observers
    useEffect(() => {
        if(props.forceExpanded.forced){
            setExpanded(props.forceExpanded.value)
        }
    }, [props.forceExpanded])

    useEffect(() => {
        if ( subchildren && subchildren.length > 0){
            props.componentStatus(name ,expanded)
        } else {
            props.componentStatus(name ,true)
        }
    }, [subchildren, expanded, name, props])

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

    if (props.subchildren) {
        symbol = props.expanded ? '\u25BC' : '\u2BC8'
    } else {
        symbol = '\u2802 '
    }
    return <span> {symbol} {props.name} </span>
}

export default TreeComponent;