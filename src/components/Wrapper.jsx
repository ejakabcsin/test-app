const Wrapper = ({ children }) => { //handles the children that the prop creates
    return (
      <div className="section">
        <div className="container">{children}</div>
      </div>
    );
  };
  
  export default Wrapper;