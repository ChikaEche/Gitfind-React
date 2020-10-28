import axios from 'axios';

let url = 'https://api.github.com/users/';

let getProfile = (username) => {
    const profile = `${url}${username}`
    return axios.get(profile)
    .then(res => res.data)
    .catch(err => console.log(err))
}

let getRepositories = (username) => {
    const repo = `${url}${username}/repos`
    return axios.get(repo)
    .then(res => res.data)
    .catch(err => console.log(err))
}

let getLanguages = (username, repo) => {
    const languages = `${url}/repos/${username}/${repo}/languages`
    return axios.get(languages)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default getProfile;