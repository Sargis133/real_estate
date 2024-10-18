import AppRoutes from "./routes/AppRoutes";
import "./assets/styles/reset.css"
import "./assets/styles/global.css"
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init()


function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
