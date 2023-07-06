import './index.scss';
import React, { useState } from 'react';
import { Button } from 'antd';

export default function Birthday()  {
    const [userName, setUserName] = useState('xiooLoo')

    return (
        <div id="root" className="birthday-base">
            {/* <img src="http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20171109/f22e29ca22654f6d96803f8243060686.gif" alt="生日快乐"/> */}
            <img src="./static/100.png" alt="test"/>
            <Button onClick={() => {
                setUserName('testName')
            }}>修改名称为：{ userName }</Button>
        </div>
    )
}
