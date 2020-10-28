import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'

const url = 'https://api.github.com/users/chikaEche';

export default function Profile() {
    const [profile, setProfile] = useState();

    let getProfile = () => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setProfile(data)
        })
        .catch(e => console.error(e))
    }

    useEffect(() => {
        getProfile()
    }, [])

    return <div>
        {
            profile ?
            <div className="profile__container">
                <Image className="image" src={profile.avatar_url} roundedCircle/>
                <h4>{profile.name}</h4>
                <h4><a href={profile.html_url} target="_blank">@{profile.login}</a></h4>
                <h4>Joined on : {profile.created_at.split('T')[0]}</h4>
            </div>
            : 
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    </div>
    
}