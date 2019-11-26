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
            date: new Date().toLocaleDateString()
        };
    }

    render () {
        return (
            <div className="header-content">
                <h2>Hello, {this.props.name}</h2>
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