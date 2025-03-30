import Footer from "./components/Footer/footer";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            style: {
              background: "#7CBDEEFF",
              color: "#fff",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "#ff4b4b",
              color: "#fff",
            },
          },
        }}
      />
      <Navbar />
      <div className="mt-4">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
