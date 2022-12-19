import Global from "./styles/global";
import RoutesMain from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <Global />
      <AuthProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
