import React from "react";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
const Dashboard = () => {
  return (
    <div className="tables p-5 ">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Create</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <div className="d-flex gap-2">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
              />
              <td>Micheal Holz</td>
            </div>
            <td>04/10/2013</td>
            <td>Admin</td>
            <td>Active</td>

            <td>
              <SettingsIcon className="text-info" />
              <CloseIcon
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  marginLeft: "1rem",
                }}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <div className="d-flex gap-2">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
              />
              <td>Poula Wilson</td>
            </div>
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td>Active</td>
            <td>
              <SettingsIcon className="text-info" />
              <CloseIcon
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  marginLeft: "1rem",
                }}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <div className="d-flex gap-2">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
              />
              <td>Antonio Moreno</td>
            </div>
            <td>11/05/2015</td>
            <td>Publisher</td>
            <td>Suspended</td>
            <td>
              <SettingsIcon className="text-info" />
              <CloseIcon
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  marginLeft: "1rem",
                }}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <div className="d-flex gap-2">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
              />
              <td>Mary Seveley</td>
            </div>
            <td>06/09/2016</td>
            <td>Reviewer</td>
            <td>Active</td>
            <td>
              <SettingsIcon className="text-info" />
              <CloseIcon
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  marginLeft: "1rem",
                }}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <div className="d-flex gap-2">
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
              />
              <td>Martin Sommer</td>
            </div>
            <td>12/08/2017</td>
            <td>Modertor</td>
            <td>Inactive</td>
            <td>
              <SettingsIcon className="text-info" />
              <CloseIcon
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  marginLeft: "1rem",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
