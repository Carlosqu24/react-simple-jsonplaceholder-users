import React, { useState, useEffect } from 'react'

import axios from 'axios';

import { Link } from 'react-router-dom'

export const Card = (props) => {
      const [user, setUser] = useState([]);

      const getUser = async id => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

            console.log(res.data);

            setUser(res.data)
      };

      useEffect(() => {

            getUser(props.match.params.id)

      }, []);

      return (

            <div className="col-md-6 m-auto">
                  <div className="card">
                        <div className="card-body">
                              <h2 className="card-title">{user.name}</h2>
                              <h3>{user.username}</h3>
                              <p>{user.phone}</p>
                              <p>{user.website}</p>
                              
                              <Link to={user.website} className="btn btn-primary">Go to website</Link>
                        </div>
                  </div>
            </div>
      )
}
