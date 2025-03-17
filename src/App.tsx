import Footer from "./components/Footer/footer";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./routes/Router";


function App() {
  return (
    <>
      <Navbar />
      <div className="mt-4">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
