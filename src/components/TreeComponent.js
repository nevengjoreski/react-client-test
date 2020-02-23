import React, {Component, useEffect, useState} from 'react';

function TreeComponent(props) {

    let [expanded, setExpanded] = useState(false)
    const children = props.data.children
    const name = props.data.name

    useEffect(() => {
        setExpanded(props.forceExpanded)
    }, [props.forceExpanded])

    let depth = props.depth || 1

    return (
        <div>
            <div className="node"
                style={{marginLeft: depth * 30}}
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <SymbolSpan expanded={expanded} children={children}/> {name}
                </div>
            </div>

            {
                children
                && children.length > 0
                && expanded
                && children.map((v, i) => {
                    return <TreeComponent depth={depth + 1} key={i} data={v}
                        expanded={expanded} forceExpanded={props.forceExpanded}/>
                })
            }

        </div>
    );
}


const SymbolSpan = (props) => {
    let symbol = props.expanded ? '\u25BC' : '\u2BC8'
    if (!props.children) {
        symbol = '\u2802 '
    }
    return <span> {symbol} </span>
}

export default TreeComponent;