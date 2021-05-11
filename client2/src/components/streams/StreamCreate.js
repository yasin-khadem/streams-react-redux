import React from "react";
// import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
// import {withRouter} from 'react-router-dom'
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
    // renderErrorMeta = ({touched, error}) => {
    //     if (touched && error) {
    //         return (
    //             <div className='ui error message'>
    //                 <p>{error}</p>
    //             </div>
    //         )
    //     }
    // }
    // titleInput = ({input, label, meta}) => {
    //     const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    //     return (
    //         <div className='field'>
    //             <div className={className}>
    //             <label>{label}</label>
    //                 <div className='ui input'>
    //                     <input {...input} autoComplete='off'/>
    //                 </div>
    //                 <div style={{margin: '20px 0px'}}>
    //                     {this.renderErrorMeta(meta)}
    //                     {/*{meta.touched && meta.error}*/}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // };
    // redirectToHome = () => {
    //     const { history } = this.props;
    //     if(history) history.push('/');
    // }
    onSubmit = (formValue) => this.props.createStream(formValue)

    render() {
        return (
            <div>
                <h2>create stream</h2>
                {/*<form className='ui error form' onSubmit={this.props.handleSubmit(this.onSubmit)}>*/}
                {/*    <Field name='title' component={this.titleInput} label='title'/>*/}
                {/*    <Field name='description' component={this.titleInput} label='description'/>*/}
                {/*    <button type='submit'>submit</button>*/}
                {/*</form>*/}
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

// const validate = (formvalue) => {
//     const errors = {}
//     if (!formvalue.title) {
//         errors.title = 'title is required'
//     }
//     if (!formvalue.description) {
//         errors.description = 'description is required'
//     }
//     return errors
// }

// const formWrapped = reduxForm({form: 'StreamCreate', validate})(StreamCreate)
// export default reduxForm({
//     form: 'StreamCreate', validate
// })(StreamCreate)

export default connect(null,{createStream})(StreamCreate)