import React, {Component} from "react";
import {signIn,signOut} from "../actions";
import {connect} from "react-redux";

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '242003518784-2l6dul768flspi463sa41h1m36csu61a.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onChangeAuth(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onChangeAuth)
            })
        })
    }

    onChangeAuth = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignOut = () => {
        this.auth.signOut();
    }
    onSignIn = () => {
        this.auth.signIn();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return <button className='ui red google button' onClick={this.onSignOut}>
                <i className='google icon' />
                sign out
            </button>
        } else {
            return <button className='ui red google button' onClick={this.onSignIn}>
                <i className='google icon' />
                sign in
            </button>
        }
    }

    render() {
        // console.log(this.props.userId)
        return (
            <>
                {this.renderAuthButton()}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,userId: state.auth.userId
    }
}
export default connect(mapStateToProps,{signOut,signIn})(GoogleAuth)