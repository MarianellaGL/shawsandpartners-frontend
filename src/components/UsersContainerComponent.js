import React, { useState } from "react";
import {  Col,Button } from "react-bootstrap";
import UserComponent from "./UserComponent";
import DetailsComponent from "./DetailsComponent";
import useFetch from "../hooks/useFetch";
import RepositoriesComponent from "./RepositoriesComponent";


const UsersContainerComponent = (props) => {
    const users = useFetch('https://shawandpartners-api-backend.onrender.com/api/users', null);
    const[showMore, setShowMore] = useState();


    if (!users) {
        return <>Loading...</>
    }

    const onClickSetShowMore = () =>{
        
    }

    return <><Col md={4} sm={12} className="user-separator">
        <div>
            {
                users.map((user, index) => <UserComponent key={index} login={user.login} id={user.id} />)
            }
        </div>
        <Button onClick={onClickSetShowMore}> Show more</Button>
        
        <hr />
        <DetailsComponent login={users[0].login} />

        <hr />
        <RepositoriesComponent login={users[0].login} />

    </Col>
    </>
} 

export default UsersContainerComponent;