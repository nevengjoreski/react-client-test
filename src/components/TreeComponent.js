import React, {Component} from 'react';

class TreeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.data
        }

        this.state.depth = (this.state.depth === undefined) ? 1 : this.state.depth
    }

    render() {
        return (
            <div>
                {/*{JSON.stringify(root)}*/}
                <div className="node" style={{marginLeft: this.state.depth * 30}}>
                    <div>{this.state.name}</div>
                </div>

                {this.state.children && this.state.children.length > 0 &&
                this.state.children.map((v, i) => {
                    v.depth = this.state.depth + 1
                    return <TreeComponent key={i} data={v}/>
                })
                }

            </div>
        );
    }
}

export default TreeComponent;