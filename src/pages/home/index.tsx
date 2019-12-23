import React from 'react';
import { Calendar, Icon } from 'antd';
import './index.scss';

interface Props {
}

interface States {
}

const leftMenus: any[] = [
    {clazzName: 'home-nav-home'},
    {clazzName: 'home-nav-alarm'},
    {clazzName: 'home-nav-book'},
    {clazzName: 'home-nav-earth'},
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
                    {leftMenus.map(item => {
                        return (
                            <span className={item.clazzName}></span>        
                        );
                    })}
                </div>
                <div className="home-content">
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
