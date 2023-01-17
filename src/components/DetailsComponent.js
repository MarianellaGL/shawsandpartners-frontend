import React from "react";
import { Card } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import * as dayjs from 'dayjs'
import { useParams } from 'react-router-dom';
import RepositoriesComponent from "./RepositoriesComponent";
import Spinner from 'react-bootstrap/Spinner';


const DetailsComponent = () => {
    let { login } = useParams();
    const user = useFetch(`https://shawandpartners-api-backend.onrender.com/api/users/${login}/details`, null);

    if (!user) {
        return <><Spinner animation="grow" variant="primary" /> Loading user details...</>
    }

    return <Card className="container">
        <Card.Img variant="top" src={user.avatar_url} className="img-thumbnail rounded-circle" />
        <Card.Body>
            <Card.Title><span className="text-muted">#{user.id}</span> {login}</Card.Title>
            <Card.Text>
                 <a href={user.url} target="_blank" rel="noreferrer">{user.url}</a>{}
            </Card.Text>
            <Card.Text>
            Joined: {dayjs(user.created_at).format("MM/DD/YYYY")}
            </Card.Text>
            <RepositoriesComponent login={login} />
        </Card.Body>
    </Card>

}

export default DetailsComponent;

