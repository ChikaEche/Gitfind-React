import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'

let url = 'https://api.github.com/users/';

export default function Profile(props) {
    const [profile, setProfile] = useState();

    let getProfile = () => {
        url = `${url}${props.username}`
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
                <h6>{profile.name}</h6>
                <h6><a href={profile.html_url} target="_blank">@{profile.login}</a></h6>
                <h6>Joined on : {profile.created_at.split('T')[0]}</h6>
            </div>
            : 
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    </div>
    
}