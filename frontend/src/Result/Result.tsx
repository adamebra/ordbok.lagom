import React from 'react';

interface IProps{
}

export default class Result extends React.Component<IProps>{
    
    results : Array<any>;
    
    constructor(props: IProps){
        super(props);
        this.results = [{Swedish: 'Test', Dutch: 'Test'}, {Swedish: 'Test2', Dutch: 'Test2'}];
    }

    createList(){
        
        return this.results.map((item, index) =>
            <div key={index}>
                <h1>{item.Swedish}</h1>
                <p>{item.Dutch}</p>
            </div>
        );
    }

    public render(){
        return(
            <div>
                {this.createList()}
            </div>
        );
    }
}