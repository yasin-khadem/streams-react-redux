import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
    return (
        <div className='ui container'>
            <Router>
            <Header />
                <div>
                    <Switch>
                        <Route path='/' exact>
                            <StreamList />
                        </Route>
                        <Route path='/stream/new'>
                            <StreamCreate />
                        </Route>
                        <Route path='/stream/edit/:id' component={StreamEdit} />
                        <Route path='/stream/delete/:id' component={StreamDelete} />
                        <Route path='/stream/:id' component={StreamShow}  />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
