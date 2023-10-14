import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const HomePage = ({id}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((users) => setData(users));
  }, []);

  const Navigate = useNavigate();
  
  return (
    <div className="container">
      <h1>Users Data</h1>
      {data && data.map((e, i) => {
        return (
          <div className="wrapper" key={i}>
            <table>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                <th></th>
              </tr>

              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>
                  <button onClick={()=>Navigate(`/view-details/${id}`)} className="view-details">
                    View Details
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
