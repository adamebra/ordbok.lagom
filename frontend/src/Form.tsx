import React from 'react';

interface IProps{
    text: string;
    age?: number;
}

interface IState{
    email: string;
    name: string;
}

export default class Form extends React.Component<IProps, IState>{
    
    state: IState = {
        email: "",
        name: ""
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) : void => {
        const target: HTMLInputElement = e.currentTarget;
        this.setState({
            "name": target.value
        });
    }

    public render(){
        const {text} = this.props;
        return(
            <div>
                <div>{text}</div>
                <div>{this.props.age}</div>
            </div>
        );
    }
}