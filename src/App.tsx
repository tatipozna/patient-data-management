import { useEffect, useState } from "react";
import { getPatients } from "./services/patientService";
import type { Patient } from "./types/patient";
import PatientCard from "./components/PatientCard";
import "./styles/global.css";

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Patient Data Management</h1>

      <div className="toolbar">
        <p className="patient-count">
          {patients.length} patients
        </p>

        <div className="search-row">
          <input
            className="search-bar"
            placeholder="Search patient..."
          />

          <select>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className="patients-container">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
          />
        ))}
      </div>
    </div>
  );
}

export default App;