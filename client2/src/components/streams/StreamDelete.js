import Modal from "../Modal";
import {Link, withRouter} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {fetchStream, deleteStream} from "../../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    redirectBack = () => {
        const {history} = this.props
        if (history) history.push('/')
    }
    delete = () => {
        this.props.deleteStream(this.props.match.params.id)
        this.redirectBack();
    }
    renderActions = () => {
        return (
            <>
                <button
                    onClick={this.delete}
                    className="ui negative button">
                    Delete
                </button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </>
        );
    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        return `Are you sure you want to delete this stream with title ${this.props.stream.title}?`
    }

    render() {
        if (!this.props.stream) {
            return (
                <div>loading...</div>
            )
        }
        return (
            <div>
                <Modal actions={this.renderActions()}
                       onDismiss={this.redirectBack}
                       title='delete stream' content={this.renderContent()}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}
export default withRouter(connect(mapStateToProps,
    {
        fetchStream, deleteStream
    }
)(StreamDelete))
