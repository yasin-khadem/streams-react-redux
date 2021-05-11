import React from "react";
import ReactDOM from "react-dom"

class Modal extends React.Component {



    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active" onClick={this.props.onDismiss}>
                <div className="ui standard modal visible active"
                     onClick={(e) => e.stopPropagation()}>
                    <div className="header">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="actions">{this.props.actions}</div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    }
}

export default Modal;
