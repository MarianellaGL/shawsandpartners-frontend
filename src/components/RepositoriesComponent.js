import useFetch from "../hooks/useFetch"
import { Table } from 'react-bootstrap';

const RepositoriesComponent = ({ login }) => {
    const repos = useFetch(`https://shawandpartners-api-backend.onrender.com/api/users/${login}/repos`, null);

    if (!repos) {
        return <>Loading...</>
    }

    return <>
        <h1>{login}'s repositories</h1>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
            </tr>
        </thead>
        <tbody>
            {repos.map((repo, index) => {
                return <tr key={index}>
                    <td>{repo.id}</td>
                    <td>{repo.full_name}</td>
                    <td><a href={repo.url} target="_blank" rel="noreferrer">{repo.url}</a></td>
                </tr>
            })}
        </tbody>
    </Table></>

}

export default RepositoriesComponent