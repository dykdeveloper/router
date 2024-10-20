import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Post() {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setdata(data);
    })
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>See Post</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data)=>(
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
              <td>
                <Link to={`/post/postdata/${data.id}`}>see post</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
