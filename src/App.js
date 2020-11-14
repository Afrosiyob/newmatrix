// import { useTranslation } from "react-i18next";
// import { Link, useHistory } from "react-router-dom";

// import { useAuth } from "./components/auth/Auth";

import Routes from "./routes/Routes";

function App() {
  // const { t } = useTranslation();

  // function AuthButton() {
  //   let history = useHistory();
  //   let auth = useAuth();

  //   return auth.user ? (
  //     <p>
  //       Welcome!{" "}
  //       <button
  //         onClick={() => {
  //           auth.signout(() => history.push("/"));
  //         }}
  //       >
  //         Sign out
  //       </button>
  //     </p>
  //   ) : (
  //     <p>You are not logged in.</p>
  //   );
  // }
  return (
    <div className="App">
      {" "}
      {/* <AuthButton />
                    <h1> {t(`msg`)} </h1>
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link> */}
      <Routes />
    </div>
  );
}

export default App;
