import { useState } from "react";
import type { Patient } from "../types/patient";


interface Props {
  patient: Patient;
}

function PatientCard({ patient }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="patient-card">
      <div className="patient-header">
        <img
          src={patient.avatar}
          alt={patient.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://cdn-icons-png.flaticon.com/512/149/149071.png";
          }}
        />
        <div className="patient-info">
          <h3>{patient.name}</h3>
          <p>ID: {patient.id}</p>
        </div>

        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "▲" : "▼"}
        </button>
      </div>

      {expanded && (
        <div className="patient-details">
          <p>{patient.description}</p>

          <a href={patient.website} target="_blank">
            Website
          </a>

          <p>{patient.createdAt}</p>
        </div>
      )}
    </div>
  );
}

export default PatientCard;