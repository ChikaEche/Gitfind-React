import React, { useEffect, useState } from "react";
import {Doughnut} from 'react-chartjs-2';
import Spinner from 'react-bootstrap/Spinner'

let url = 'https://api.github.com/users/chikaEche/repos';


export default function Repositories() {
    const [repositoryState, setRepositoryState] = useState();
    let labels = [];
    let datasets = {
        datasets : [
            {
                label: "Top 5 Starred Repositories",
                backgroundColor: 'rgba(75,192,192,1)',
                data: []
            }
        ]
    };

    let getRepositories = () => {
        let repositories = [];
        fetch(url)
        .then(res => res.json())
        .then(data => data.map(eachRepo => {
            repositories.push({
                repo: eachRepo.name,
                stars: eachRepo.stargazers_count
            })
        }))
        .then(() => {
             repositories = repositories.sort((a,b) => b.stars - a.stars )
             repositories = repositories.splice(0,5)
        })
        .then(() => {
            let data = [];
            repositories.forEach(element => {
                labels.push(element.repo)
                data.push(element.stars)
            })
            datasets.datasets[0].data = [...data]
            setRepositoryState({labels: labels, datasets: datasets.datasets})
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getRepositories();
    }, [])

    return (
        <div>
            {
                repositoryState ? 
                <Doughnut
                className="doughnut"
                data= {repositoryState}
                options = {{
                    title : {
                        display: true,
                        text: 'Top 5 starred repositories'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
                >
                </Doughnut>
                :
                <Spinner className="spin" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner> 
            }
        </div>
    )
}