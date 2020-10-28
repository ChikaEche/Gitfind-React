import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories';
import './layout.css';
import {withRouter} from 'react-router-dom';
import Header from './header'

function Layout(props) {
    return (
        <div>
        <Header />
        <div className="flex content justify-content-md-center">
            <div className="content__wrapper">
                <div
                className="flex profile justify-content-md-center"
                >
                    <Profile username={props.match.params.username} />
                </div>
                <div className="divide"></div>
                <div className="repository">
                    <Repositories username={props.match.params.username}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Layout)