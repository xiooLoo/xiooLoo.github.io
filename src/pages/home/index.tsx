import React from 'react';
import { Calendar, Icon } from 'antd';
import './index.scss';

interface Props {
}

interface States {
}

const leftMenus: Object = [
    {icon: 'test', title: ''}
]

class Home extends React.Component<Props, States> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    onPanelChange(value: any, mode: any) {
        console.log('value:', value);
        console.log('mode:', mode);
    }

    render() {
        return (
            <div className="home">
                <div className="home-nav">
                    <span className="home-nav-icon"></span>
                </div>
                <div className="home-left">
                    left
                </div>
                <div className="home-calendar">
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>
        )
    }
}

export default Home;
