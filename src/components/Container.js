export const Container = ({ children }) => {
  return (
    <div className="container p-4">
      <div className="col-md-6 offset-md-3">{children}</div>
    </div>
  );
};
