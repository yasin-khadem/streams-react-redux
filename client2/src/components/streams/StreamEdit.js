import React from "react";
import _ from 'lodash'
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    formSubmit = (formValue) => {
        this.props.editStream(this.props.match.params.id,formValue)
    }

    render() {
        if (!this.props.stream) {
            return (<div>loading...</div>)
        }
        return (
            <div>
                <h3>edit stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')}
                            onSubmit={this.formSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit)
