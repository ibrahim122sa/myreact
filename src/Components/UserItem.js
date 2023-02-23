import React from "react";

function UserItem(props){
    return (
      <tr className="row-user" onClick={props.onClick}>
        <th scope="row" className="table-body">
          <div className="row-user-info">
            <img src={props.img} />
            <div className="row-user-contact">
              <p>{props.media}</p>
              <span>{props.media2}</span>
            </div>
          </div>
        </th>
        <td className="table-body">
          <div className="row-user-contact">
            <p>{props.email}</p>
            <span>{props.phone}</span>
          </div>
        </td>
        <td className="table-body">
          <div className="row-user-contact">
            <p>{props.date}</p>
            <span>{props.time}</span>
          </div>
        </td>
        <td className="table-body">
          <div className="row-user-contact">
            <p>{props.country}</p>
            <span>{props.zip}</span>
          </div>
        </td>
      </tr>
    );
}
export default UserItem;