
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [user, setUser] = useState([])
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams()

  useEffect(() => {
    loadUser()
  }, []);


  const loadUser = async () => {

    const result = await axios.get("http://localhost:8080/api/v1/users");
    setUser(result.data);
  }
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/user/${id}`)
    loadUser();
  }
  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {

              user.map((user, index) => (

                // eslint-disable-next-line react/jsx-key
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger mx-2'>Delete</button>
                  </td>

                </tr>
              ))



            }

          </tbody>
        </table>
      </div>
    </div>
  )
}
