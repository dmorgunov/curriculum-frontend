import React, {Component} from 'react'
import response from "../response";
import ArticleList from "./ArticleList";

class App extends Component {
    render() {

        return (
            <div>
                <ArticleList list={response}/>
            </div>

        );

    }

}

export default App;