import React, {useEffect, useState} from 'react';

function TreeComponent(props) {

    //state
    let [expanded, setExpanded] = useState(false)
    const children = props.data.children
    const name = props.data.name
    const depth = props.depth || 1

    //observers
    useEffect(() => {
        setExpanded(props.forceExpanded)
    }, [props.forceExpanded])

    //render
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
    let symbol

    if (props.children) {
        symbol = props.expanded ? '\u25BC' : '\u2BC8'
    } else {
        symbol = '\u2802 '
    }
    return <span> {symbol} </span>
}

export default TreeComponent;