
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import routes from "./Routes/Routes";
import { UserProvider } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={routes} />
        </div>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
