import React, {Component} from 'react'
import Comment from './Comment'

class Article extends Component {
    state = {
        isOpened: false
    }


    render() {
        const {data} = this.props

        console.log(data)
        const commmentsItems = this.state.isOpened && data.comments
            .map(c => <Comment comment={c}/>);

        return (
            <div>
                <h1>Article</h1>
                <h2>date = {data.date}</h2>
                <h2>title = {data.title}</h2>
                <button onClick={this.handleClick}>CLOSE</button>

                {commmentsItems}
            </div>
        );
    }


    handleClick = () => {
        console.log(this.state.isOpened)
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

}


export default Article;