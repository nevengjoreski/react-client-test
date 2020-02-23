import React, {Component} from 'react';

class TreeComponent extends Component {


    render() {
        const {name, children} = this.props.data;
        let depth =  this.props.depth ?? 1

        return (
            <div>
                {/*{JSON.stringify(root)}*/}
                <div className="node" style={{marginLeft : depth * 30 }}>
                    <div>{name}</div>
                </div>

                {children && children.length > 0 &&
                    children.map((v, i) => {
                        return <TreeComponent depth={depth + 1} key={i} data={v}/>
                    })
                }

            </div>
        );
    }
}

export default TreeComponent;