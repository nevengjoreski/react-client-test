import React, {Component} from 'react';

class TreeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.data,
            expanded: false
        }

        this.state.depth = (this.state.depth === undefined) ? 1 : this.state.depth
    }

    render() {
        return (
            <div>

                <div className="node"
                    style={{marginLeft: this.state.depth * 30}}
                    onClick={ () => this.setState({expanded : !this.state.expanded})}
                >
                    <div>
                        {/*<span>{this.state.expanded ? '\u25BC' : '\u2BC8'}</span>*/}
                        <SymbolSpan expanded={this.state.expanded} children={this.state.children} />
                        {this.state.name}
                    </div>
                </div>

                {
                    this.state.children
                    && this.state.children.length > 0
                    && this.state.expanded
                    && this.state.children.map((v, i) => {
                        v.depth = this.state.depth + 1
                        return <TreeComponent key={i} data={v} expanded={this.state.expanded}/>
                    })
                }

            </div>
        );
    }
}

const SymbolSpan = (props) => {
    let symbol = props.expanded ? '\u25BC' : '\u2BC8'
    if( !props.children ){
        symbol = '\u2802 '
    }
    return <span> {symbol} </span>
}

export default TreeComponent;