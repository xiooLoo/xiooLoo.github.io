import React from 'react';
import { Calendar } from 'antd';
import './index.scss';
import Header from '../../components/Header';

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
            <>
            <Header className="App-header" name="零壹"/>
            <div className="home">
                <div className="home-nav">
                    {leftMenus.map(item => {    
                        return (
                            <span className={item.clazzName} key={item.clazzName}></span>        
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
            </>
        )
    }
}

export default Home;
