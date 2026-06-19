import "../../styles/toast.css";

interface Props {
  message: string;
}

function Toast({ message }: Props) {
  if (!message) return null;

  return (
    <div className="success-toast">
      {message}
    </div>
  );
}

export default Toast;