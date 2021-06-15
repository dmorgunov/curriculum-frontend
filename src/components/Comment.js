import React, {Component} from 'react'

class Comment extends Component {



    render() {
        const {comment} = this.props
        return (
            <div>
                username={comment.username}
                text={comment.text}
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Comment;