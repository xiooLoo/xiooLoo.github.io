import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

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
                <Link to="/tszero">go TypeScript</Link>
                {/* <button onClick={() => this.goTsZero()}>go TypeScript</button> */}
            </div>
        )
    }
}

export default Home;
