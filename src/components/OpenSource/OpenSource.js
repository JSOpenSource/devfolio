import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { github as username } from '../../data.json';

import './OpenSource.scss';

export default function OpenSource() {
    const [user, setUser] = useState(username)
    const [repos, setRepos] = useState([])
    const baseURL = `https://api.github.com/users/` + user + `/repos`;

    const getData = () => {
        axios.get(baseURL)
            .then(res => setRepos(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    if (repos) {
        return (
            <>
                <center>
                    <form>
                        <input type="text" placeholder="Enter a github username" onChange={(e) => setUser(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setRepos(undefined)
                            getData()
                        }}>Update</button>
                    </form>
                </center>

                <div className="openSource">

                    {
                        repos.map(el => (
                            <div key={el.id}>
                                <ListGroup>
                                    <ListGroupItem className="item">
                                        <span className="repoName"><a href={el.html_url}>{el.full_name}</a></span>
                                        <br />
                                        <span>- {el.description}</span>
                                        <br />
                                        <span className="language">🟡 {`${el.language}`}</span>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    } else {
        return (
            <>
                <center><Spinner color="primary"></Spinner></center>
            </>
        )
    }
}
