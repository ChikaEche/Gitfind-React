import axios from 'axios';
import { useEffect, useState } from 'react';
import getProfile from '../../Util/profile-grabber';

const url = 'https://api.github.com/users/chikaEche';

export default function Profile() {
    const [profile, setProfile] = useState();

    let getProfile = () => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
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
            <div>
                <h1>{profile.login}</h1>
            </div>
            : <h1>Loading...</h1>
        }
    </div>
    
}

// let GetProfile = async () => {
//     try {
//         let res = await axios.get(url);
//         let profile = res.data;
//         return <p>{profile.login}</p>
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

// function Profile() {

//     const[state, SetState] = useState({
//         profile: {}
//     })

//     return <h3>{GetProfile()}</h3>
// }

// export default Profile;