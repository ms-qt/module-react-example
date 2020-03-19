import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>如果在下方能看见 test:: app_access_token,test:: user_access_token, test:: user_id ，说面成功运行插件</p>
                    <p>
                        {window.app_access_token}
                    </p>
                    <p>
                        {window.user_access_token}
                    </p>
                    <p>
                        {window.user_id}
                    </p>

                </header>
            </div>
        );
    }
}

export default App;
