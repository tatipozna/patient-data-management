import { useEffect, useState } from "react";
import { getPatients } from "./services/patientService";
import type { Patient } from "./types/patient";
import PatientCard from "./components/patient/PatientCard";
import "./styles/global.css";
import Modal from "./components/patient/Modal";
import PatientForm from "./components/patient/PatientForm";

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showModal, setShowModal] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

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

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (sortOrder === "newest") {
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    }

    return (
      new Date(a.createdAt).getTime() -
      new Date(b.createdAt).getTime()
    );
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleAddPatient = (data: {
    name: string;
    website: string;
    avatar: string;
    description: string;
  }) => {
    const newPatient: Patient = {
      id: (patients.length + 1).toString(),
      name: data.name,
      website: data.website,
      avatar: data.avatar,
      description: data.description,
      createdAt: new Date().toISOString(),
    };

    setPatients((prev) => [newPatient, ...prev]);
    setShowModal(false);
  };

  const handleSavePatient = (data: {
    name: string;
    website: string;
    avatar: string;
    description: string;
  }) => {
    if (selectedPatient) {
      setPatients((prev) =>
        prev.map((patient) =>
          patient.id === selectedPatient.id
            ? {
              ...patient,
              ...data,
            }
            : patient
        )
      );
    } else {
      handleAddPatient(data);
    }

    setShowModal(false);
    setSelectedPatient(null);
  };

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>

          <button
            className="add-button"
            onClick={() => {
              setSelectedPatient(null);
              setShowModal(true);
            }}          >
            + Add Patient
          </button>
        </div>
      </div>

      <div className="patients-container">
        {sortedPatients.length === 0 ? (
          <div className="empty-state">
            No patients found
          </div>
        ) : (
          sortedPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onEdit={(patient) => {
                setSelectedPatient(patient);
                setShowModal(true);
              }}
            />
          ))
        )}
      </div>

      <Modal
        isOpen={showModal}
        title={
          selectedPatient
            ? "Edit Patient"
            : "Add Patient"
        }
        onClose={() => setShowModal(false)}
      >
        <PatientForm
          patient={selectedPatient ?? undefined}
          onSubmit={handleSavePatient}
        />
      </Modal>

    </div>
  );
}

export default App;