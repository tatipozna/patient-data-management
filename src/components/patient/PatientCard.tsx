import { useState } from "react";
import type { Patient } from "../../types/patient";
import Button from "../ui/Button";

interface Props {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

function PatientCard({ patient, onEdit }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="patient-card"
      onClick={() => setExpanded(!expanded)}
    >
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
          <div className="patient-meta">
            <p>
              <span>ID:</span> {patient.id}
            </p>

            <p>
              <span>Created:</span> {new Date(patient.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="patient-actions">
          <button
            className="edit-button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(patient);
            }}
          >
            Edit
          </button>

          <button
            className="expand-button"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="patient-details">

          <div className="detail-group">
            <span>Description</span>
            <p>{patient.description}</p>
          </div>

          <div className="detail-group">
            <a href={patient.website} target="_blank">
              Visit website
            </a>
          </div>

        </div>
      )}
    </div>
  );
}

export default PatientCard;