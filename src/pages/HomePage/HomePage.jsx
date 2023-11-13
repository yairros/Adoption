import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
function HomePage(props) {
  const { activeUser } = useAuth();
  return (
    <div className="p-homepage">
      <Container>
        {activeUser && (
          <>
            <h3 className="display-5 mt-5">Hello {activeUser.name} {activeUser.lastName},</h3>
          </>
        )}
        <h1 className="display-1 mt-5">Welcome to Adoptify! </h1>
        <div className="display-6">
          We hope we can help you find your new fury friend today!{" "}
          <p className="linkToSearch">
            <Link to="/pets"> Search here </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
