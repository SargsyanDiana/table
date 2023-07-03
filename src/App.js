import Table from "./components/Table";
import {useEffect, useState} from "react";
import {getDataFromFirebase} from "./database/crud";

function App() {
  const [dataFromDB, setDataFromDB] = useState([])

  useEffect(() => {
    async function data() {
      try {
        const data = await getDataFromFirebase();
        setDataFromDB(data)
      } catch (e) {
        console.error(e);
      }
    }

    data();
  }, []);

  return (
    <section>
<Table data={dataFromDB} />
    </section>
  );
}

export default App;
