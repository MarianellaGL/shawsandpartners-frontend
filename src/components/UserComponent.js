import React from "react"
import { Card } from "react-bootstrap"

const UserComponent = ({login, id}) =>
    <Card className="user">
        <Card.Title>
            <span className="text-muted">#{id}</span> <span className="text-primary">{login}</span>
        </Card.Title>
    </Card>

export default UserComponent