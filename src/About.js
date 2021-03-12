import React, { Component } from 'react';
// it is a class component here life cycle method is used..
class About extends React.Component{
    constructor()
    {
        super();
    }
    componentDidMount()
    {
        //console.warn("did mount...jab chalega tab component bna hoga..")
        console.warn("props..->",this.props.name); // yahan pr starting vala that is parag roy
    }
    componentDidUpdate()
    {
        console.warn("props..->",this.props.name); // yahan pr update hone ke baad that is parag pramod roy
    }
    render()
    {
        return(<div>
            <h1> About Us Page....</h1>
            <h1>{this.props.name}</h1>
            </div>)
    }
}
export default About; // it is basically the name of the component...
/*
constructor()
{

}
componentDidMount()
{

}
componentDidUpdate()
{

}
componentWillUnmount()
{

}*/