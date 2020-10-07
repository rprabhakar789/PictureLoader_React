import React from 'react';

class ImageCard extends React.Component{

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load',this.setSpans);
       // console.log(this.imageRef);
       // console.log(this.imageRef.current.clientHeight);
    };

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans:spans});
    }
    render(){
        
   // console.log(this.props.image.id);

        return (
            <div style = {{ gridRowEnd :`span ${this.state.spans}`}}>
            <img
                key={this.props.image.id}
                ref = {this.imageRef}
                alt={this.props.image.discription}
                src={this.props.image.urls.regular}
            />
            </div>

            );
    }
};
export default ImageCard;