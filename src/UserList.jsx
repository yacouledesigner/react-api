import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userList.css'


const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // handle success
            console.log(response);
            setListOfUser(response.data)
          })
          .catch(function (error) {
            // handle error
            //console.log(error);
          })
    },[])

    return (
      <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>userId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {listOfUser.map(user => {
          return <tr>
            <td>{user.userId}</td>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
          </tr>
        })}
      </tbody>
    </Table>
        </>
    );
};

export default UserList;