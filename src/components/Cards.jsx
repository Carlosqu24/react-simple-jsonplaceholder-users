import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'

export const Cards = () => {
      const [users, setUsers] = useState([]);

      const getUsers = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

            setUsers(res.data);
      };

      useEffect(() => {

            getUsers();

      }, []);

      return (
            <div className="row container m-auto">
                
                  {
                        users.map(user => (
                              <div className="col-md-6 p-2" key={user.id}>
                                    <div className="card">
                                          <div className="card-header">
                                                <h1>{user.name}</h1>
                                          </div>
                                          <div className="card-body">
                                                <h5 className="card-title">{user.email}</h5>
                                                <Link to={`/${user.id}`} className="btn btn-primary">See more</Link>
                                          </div>
                                    </div>
                              </div>
                        ))
                  }

            </div>
      )
}
