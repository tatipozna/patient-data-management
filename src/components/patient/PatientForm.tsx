import { useState } from "react";
import Button from "../ui/Button";
import type { Patient } from "../../types/patient";

interface PatientFormData {
  name: string;
  website: string;
  avatar: string;
  description: string;
}

interface Props {
  onSubmit: (data: PatientFormData) => void;
  patient?: Patient;
}

function PatientForm({
  onSubmit,
  patient,
}: Props) {
  const [name, setName] = useState(patient?.name ?? "");
  const [website, setWebsite] = useState(patient?.website ?? "");
  const [avatar, setAvatar] = useState(patient?.avatar ?? "");
  const [description, setDescription] = useState(patient?.description ?? "");

  const [errors, setErrors] = useState({
    name: "",
    website: "",
    description: "",
  });

  const handleSubmit = () => {
    const newErrors = {
      name: "",
      website: "",
      description: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!website.trim()) {
      newErrors.website = "Website is required";
    } else if (
      !website.startsWith("http://") &&
      !website.startsWith("https://") &&
      !website.startsWith("www.")
    ) {
      newErrors.website =
        "Website must start with http://, https:// or www.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.website ||
      newErrors.description
    ) {
      return;
    }

    onSubmit({
      name,
      website,
      avatar,
      description,
    });
  };

  return (
    <>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <span className="error-message">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Website</label>
        <input
          type="text"
          placeholder="https://example.com or www.example.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        {errors.website && (
          <span className="error-message">
            {errors.website}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Avatar URL</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <span className="error-message">
            {errors.description}
          </span>
        )}
      </div>

      <div className="modal-actions">
        <Button variant="secondary">
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Save Patient
        </Button>
      </div>
    </>
  );
}

export default PatientForm;