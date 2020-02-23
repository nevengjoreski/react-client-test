import React, {Component} from 'react';

class TreeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.data,
            expanded : false
        }

        this.state.depth = (this.state.depth === undefined) ? 1 : this.state.depth
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.forceExpanded === true && this.state.expanded !== true){
            console.log(1)
            this.setState({expanded : true})
        }
    }

    render() {
        return (
            <div>
                <div className="node"
                    style={{marginLeft: this.state.depth * 30}}
                    onClick={ () => this.setState({expanded : !this.state.expanded})}
                >
                    <div>
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
                        return <TreeComponent forceExpanded={this.props.forceExpanded} key={i} data={v} expanded={this.state.expanded}/>
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