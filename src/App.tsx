import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    // min-h-screen tətbiq etdik ki, fon rəngi bütün ekranı tutsun
    <div className="w-full min-h-screen flex flex-col dark:bg-[#0a192f] dark:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
