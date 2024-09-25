const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4 text-secondary">{title}</h1>
      <p className="text-lg text-tertiary">{description}</p>
    </div>
  );
};

export default ErrorMessage;
