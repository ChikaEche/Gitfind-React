import Profile from './Profile/Profile'
import Repositories from './Repositories/Repositories';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './layout.css';

export default function Layout() {
    return (
        <div className="flex content justify-content-md-center">
            <div className="content__wrapper">
                <div
                className="flex profile justify-content-md-center"
                >
                    <Profile />
                </div>
                <div className="divide"></div>
                <div className="repository">
                <Repositories />
                </div>
            </div>
        </div>
    )
}