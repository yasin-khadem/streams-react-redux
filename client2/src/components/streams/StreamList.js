import React from "react";
import {connect} from "react-redux";
import {fetchStreams} from "../../actions";
import streams from "../../apis/streams";
import {Link} from "react-router-dom";

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/stream/edit/${stream.id}`} className='ui button primary'>edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className='ui button negative'>delete</Link>
                </div>
            )
        }
    }
    renderStreams = () => {
        return this.props.streams.map((stream, index) => {
            return (
                <div className='item' key={index}>
                    {this.renderAdmin(stream)}
                    <i className='large middle align icon camera'></i>
                    <div className="content">
                        <Link to={`/stream/${stream.id}`}>
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to='/stream/new' className='ui green button'>
                        create
                    </Link>
                </div>
            )
        }

    }

    render() {
        return (
            <>
                <h2>streams</h2>
                <div className='ui celled list'>
                    {this.renderStreams()}
                </div>
                {this.renderCreate()}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, {fetchStreams})(StreamList)