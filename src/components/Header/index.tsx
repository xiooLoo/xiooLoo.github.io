import React from 'react';
import './index.scss';
import { RouteComponentProps, Link } from 'react-router-dom';

interface Props {
    className?: String;
    readonly name: String;
}

interface States {
    readonly date: String
}
interface TopProps extends RouteComponentProps {
    name: ''
}

class Header extends React.Component<Props, States, TopProps> {
    constructor(props: TopProps) {
        super(props);
        this.state = {
            date: new Date().toDateString()
        };
    }

    render () {
        return (
            <div className="header-content">
                <div className="logo">
                    <a href="#home">
                        <img src={require("../../public/assets/logo_large.png")} className="logo-img" alt="logo"/>
                    </a>
                    <div className="tabs">
                        {[{name: '|', path: '/'}, {name: 'HOME', path: 'home'}, {name: 'BIRTH', path: 'birth'}, {name: 'QUILL', path: 'quill'}, {name: 'MKDown', path: 'mkdown'}].map(item => {
                            return (
                                <Link className="tabs-item" to={item.path} onClick={() => this.handleQuillEditor(item)} key={item.name}>{item.name}</Link>
                            );
                        })}
                    </div>
                </div>
                <div className="user-info">
                    <span>{this.props.name}</span>
                    <span>{this.state.date}</span>
                </div>
            </div>
        )
    }

    handleQuillEditor = (item: any) => {
        console.log('跳转:', item)
        // this.props.history.push('/quill');
    }
}

// function Header(props: any) {
//     return (
//         <div className="header-content">
//             <h2>Hello, {props.name}</h2>
//             <div className="user-info">
//                 <span>{props.name}</span>
//                 <span>subs</span>
//             </div>
//         </div>
//     )
// }

export default Header