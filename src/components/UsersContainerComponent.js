import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import UserComponent from "./UserComponent";
import DetailsComponent from "./DetailsComponent";
import useFetch from "../hooks/useFetch";
import RepositoriesComponent from "./RepositoriesComponent";
import { Link } from "react-router-dom";


const UsersContainerComponent = (props) => {
    let [since, setSince] = useState(0);
    const users = useFetch(`https://shawandpartners-api-backend.onrender.com/api/users?since=${since}`, null);

    const onClickShowMore = () => {
        setSince(since += 30);
    }

    if (!users) {
        return <>Loading...</>
    }

    const onClickShowLess = () => {
        if (since !== 0) {
            setSince(since -= 30)
        }
    }

    return <><Col>

        <div>
            {
                users.map((user, index) => <div><Link to={`/${user.login}/details`} className="user-link">
                    <UserComponent key={index} login={user.login} id={user.id} />
                </Link></div>)
            }
        </div>
        <Button onClick={onClickShowMore}>Show more</Button>
        {since > 0 ?
            <Button onClick={onClickShowLess} variant="secondary">Show Less</Button>
            : ""
        }

    </Col>
    </>

}

export default UsersContainerComponent;