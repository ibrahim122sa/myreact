import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import ShowUserInfo from "./ShowUserInfo";
import UserItem from "./UserItem";

function Users({ gender, nationality }) {
  const [users, setUsers] = useState(null);
  const [fetchedUsers,setFetchedUsers]=useState(null);
 const { setShowUSerInfo, setUserInfo } = useContext(UserContext);
 console.log(users)

  useEffect(() => {
    const getUsersByNationality = async () => {
      let usersRes = await fetchData(
        `https://randomuser.me/api/?results=8&nat=${nationality}`
      );
      usersRes && setUsers(usersRes);
    };
   if(nationality){
     getUsersByNationality();
   }else{
      fetchedUsers && setUsers(fetchedUsers);
   }
  }, [nationality]);



  useEffect(() => {
   const getUsersByGender = async () => {
     let usersRes = await fetchData(
       `https://randomuser.me/api/?gender=${gender}`
     );
     usersRes && setUsers(usersRes);
   };
   if (gender) {
     getUsersByGender();
   }else{
      fetchedUsers&&setUsers(fetchedUsers)
   }


  }, [gender]);
  useEffect(() => {
    const getUsers = async () => {
      let usersRes = await fetchData("https://randomuser.me/api?results=8");
      usersRes && setUsers(usersRes);
      usersRes && setFetchedUsers(usersRes);
    };
    getUsers();
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("something went wrong");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {}
  }
  return (
    <>
      <div className="table-content">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="table-header user">
                User
              </th>
              <th scope="col" className="table-header">
                Contact Information
              </th>
              <th scope="col" className="table-header">
                Registration Date
              </th>
              <th scope="col" className="table-header">
                Country/Post Code
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <UserItem
                    key={user.id.value}
                    id={user.id.value}
                    img={user.picture.thumbnail}
                    media={user.name.first + " " + user.name.last}
                    country={user.location.country}
                    zip={user.location.postcode}
                    time={user.registered.date.substring(11, 16)}
                    date={user.registered.date.substring(0, 10)}
                    phone={user.phone}
                    email={user.email}
                    media2={
                      user.location.street.number +
                      " " +
                      user.location.street.name +
                      ", " +
                      user.location.state +
                      " " +
                      user.location.postcode
                    }
                    onClick={(e) => {
                      setShowUSerInfo(true);
                      setUserInfo({
                        name: user.name.first + " " + user.name.last,
                        image: user.picture.thumbnail,
                        location:
                          user.location.street.number +
                          " " +
                          user.location.street.name +
                          ", " +
                          user.location.state +
                          " " +
                          user.location.postcode,
                      });
                    }}
                  ></UserItem>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td className="table-footer" colSpan={4}>
                <div className="footer-content">
                  <span>Rows per page:</span>
                  <span>
                    8 <i class="fa-solid fa-caret-down"></i>
                  </span>
                  <div className="arrow">
                    <i class="fa-solid fa-angle-left"></i>
                    &nbsp; &nbsp;
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
export default Users;
