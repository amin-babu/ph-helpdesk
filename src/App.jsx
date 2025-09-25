import { Suspense } from "react";
import Footer from "./components/Footer"
import IssuesManagement from "./components/IssuesManagement";
import Navbar from "./components/Navbar"

const fetchIssues = async () => {
  const result = await fetch('/data.json');
  return result.json();
}

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar/>
      <Suspense fallback={'LOading...'}>
        <IssuesManagement fetchPromise={fetchPromise}/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
