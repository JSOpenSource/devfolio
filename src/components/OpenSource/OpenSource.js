import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { github as user } from '../../data.json';

import './OpenSource.scss';

export default function OpenSource() {
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
        )
    } else {
        return (
            <>
                <Spinner color="primary"></Spinner>
            </>
        )
    }
}
