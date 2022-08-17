import React from "react";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className="section_title">
        <h1>{loading ? "Loading..." : "Profile"}</h1>
      </div>
    </main>
  );
}

export default App;
