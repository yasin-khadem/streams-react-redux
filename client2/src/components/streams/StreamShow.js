import React from "react";
import {connect} from "react-redux";
import flv from 'flv.js'
import {fetchStream} from "../../actions";

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        this.buildPlayer()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.buildPlayer()
    }
    componentWillUnmount() {
        this.player.destroy()
    }

    buildPlayer () {
        const {id} = this.props.match.params
        if(this.player || !this.props.stream ){
            return;
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `ws://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        // this.player.play();

    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        let {title,description} = this.props.stream
        return (
            <>
                <video ref={this.videoRef} style={{width:'100%'}} controls />
                <h2>{title}</h2>
                <h2>{description}</h2>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream})(StreamShow)