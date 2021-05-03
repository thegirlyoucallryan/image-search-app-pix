import React from 'react'


class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef()
    }
    componentDidMount(){
        // console.log(this.imageRef.current.clientHeight)//returns zero because image is not loaded yet//so use an image load callback:

        this.imageRef.current.addEventListener('load', this.setSpans )
    }
setSpans = () =>{
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 15 + 1)

    this.setState({ spans})
}
    render() {

     const{description, urls} =this.props.image;//destructuring image information from the props object

        return(
        <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
        )
    }
}

export default ImageCard