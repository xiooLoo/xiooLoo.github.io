import React from 'react';
import { Calendar } from 'antd';
import './index.scss';
import Header from '../../components/Header';

interface Props {
}

interface States {
}

const leftMenus: any[] = [
    {clazzName: 'root-nav-home'},
    {clazzName: 'root-nav-alarm'},
    {clazzName: 'root-nav-book'},
    {clazzName: 'root-nav-earth'},
]

class Root extends React.Component<Props, States> {
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
            <div className="root">
                <div className="root-nav">
                    {leftMenus.map(item => {    
                        return (
                            <span className={item.clazzName} key={item.clazzName}></span>        
                        );
                    })}
                </div>
                <div className="root-content">
                    {this.props.children}
                </div>
                <div className="root-calendar">
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
            </div>
            </>
        )
    }
}

export default Root;
