import React from "react";
import { Card } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import * as dayjs from 'dayjs'

const DetailsComponent = ({ login }) => {
    const user = useFetch(`https://shawandpartners-api-backend.onrender.com/api/users/${login}/details`, null);

    if (!user) {
        return <>Loading...</>
    }

    return <Card>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
            <Card.Title><span className="text-muted">#{user.id}</span> {login}</Card.Title>
            <Card.Text>
                 <a href={user.url} target="_blank" rel="noreferrer">{user.url}</a>{}
            </Card.Text>
            <Card.Text>
            Joined: {dayjs(user.created_at).format("MM/DD/YYYY")}
            </Card.Text>
        </Card.Body>
    </Card>

}

export default DetailsComponent;

