import React from 'react';
import './index.scss';

interface Props {
    className?: String;
    readonly name: String;
}

interface States {
    readonly date: String
}
class Header extends React.Component<Props, States> {
    constructor(props: any) {
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
                        {['|', '首页', '倒计时', '留言'].map(item => {
                            return (
                                <span className="tabs-item" key={item}>{item}</span>
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