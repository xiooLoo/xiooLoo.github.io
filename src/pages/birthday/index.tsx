import React from 'react';
import './index.scss';

class Birthday extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
             
        }
    }

    render() {
        return (
            <div id="root" className="birthday-base">
                <img src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171109/f22e29ca22654f6d96803f8243060686.gif" alt="生日快乐"/>
            </div>
        )
    }
}

export default Birthday;