import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import UserComponent from "./UserComponent";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";


const UsersContainerComponent = (props) => {
    let [since, setSince] = useState(0);
    const users = useFetch(`https://shawandpartners-api-backend.onrender.com/api/users?since=${since}`, null);

    const onClickNext = () => {
        setSince(since += 30);
    }

    if (!users) {
        return <>Loading...</>
    }

    const onClickPrev = () => {
        if (since !== 0) {
            setSince(since -= 30)
        }
    }

    return <><Col>

        <div>
            {
                users.map((user, index) => <Link to={`/${user.login}/details`} className="user-link" key={index}>
                    <UserComponent key={index} login={user.login} id={user.id} />
                </Link>)
            }
        </div>
        {since > 0 ?
            <Button onClick={onClickPrev} variant="secondary">← Previous</Button>
            : ""
        }
        <Button onClick={onClickNext}>Next →</Button>
    </Col>
    </>

}

export default UsersContainerComponent;