import React from 'react';
import './index.scss';

interface Props {
}

interface States {
}

class Home extends React.Component<Props, States> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div className="home">
                Home
            </div>
        )
    }
}

export default Home;
