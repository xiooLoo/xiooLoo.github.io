import React from 'react';
import './index.scss';
import { Hello } from '../../components/TestComp';

interface Person {
  firstName: string,
  lastName: string
}

interface SquareConfig {
  color?: string,
  width?: number
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

class TSZero extends React.Component<Person> {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
      newSquare.color = config.color
    }
    if (config.width) {
      newSquare.area = config.width * config.width
    }
    return newSquare
  }

  keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 200 } = wholeObject
    return a + '=' + b
  }

  greeter(person: Person) {
    return 'Hello ' + person.firstName + person.lastName
  }

  initStudent() {
    let nosure: any = 4
    nosure.toFixed()

    let student = new Student('姓', 'M', '名字')
    return student
  }

  render() {
    return (
      <div>
        <div className="person-box">
          <span>{this.greeter({ firstName: '杨', lastName: 'xiooLoo' })}</span>
          <span>{this.greeter(this.initStudent())}</span>
          <Hello compiler="TypeScript" framework="语法框架" />
          <Hello compiler={this.keepWholeObject({ a: '结构a' })} framework="结构aa" />
          <p>{JSON.stringify(this.createSquare({color: '#efefef'}))}</p>
        </div>
      </div>
    )
  }
}

export default TSZero;
