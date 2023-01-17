import React from "react"
import { Card } from "react-bootstrap"

const UserComponent = ({login, id}) =>
    <Card className="user">
        <Card.Title>
            <span className="text-muted">#{id}</span> {login}
        </Card.Title>
    </Card>



export default UserComponent