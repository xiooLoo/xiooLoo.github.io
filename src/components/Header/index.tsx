import React from 'react';

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }

//     render () {
//         return (<p>Hello, {this.props.name}</p>)
//     }
// }

function Header(props: any) {
    return (<p>Hello, {props.name}</p>)
}

export default Header