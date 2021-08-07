import Userfront from "@userfront/react";
// import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Characters from "./Characters";

const Dashboard = () => {
  // const [privateData, setPrivateData] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await fetch(process.env.REACT_APP_API_BASE + "/data", {
  //         headers: {
  //           authorization: `Bearer ${Userfront.accessToken()}`,
  //         },
  //       }).then((response) => response.json());
  //       setPrivateData(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // If the user is not logged in, redirect to login
  if (!Userfront.accessToken()) {
    return (
      <Redirect
        to={{
          pathname: "/",
          // state: { from: location },
        }}
      />
    );
  }

  // If the user is logged in, show the dashboard
  // const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <Characters />
      {/* <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <h2>Private Data</h2>
      <pre>{JSON.stringify(privateData, null, 2)}</pre>
      <button onClick={Userfront.logout}>Logout</button> */}
    </div>
  );

  // return (
  //   <div>
  //     <h1>Dashboard Page</h1>
  //   </div>
  // );
};

export default Dashboard;
