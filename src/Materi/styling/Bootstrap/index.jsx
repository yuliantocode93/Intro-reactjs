import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default class Bootstrap extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Yulianto</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Biodata</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="p-5 text-center bg-image" style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 500 }}>
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-white">Biodata Saya</h1>
            <h3 class="d-flex justify-content-center align-items-center h-100 text-white">Tenaga Pendidik & Tenaga Administrasi Sekolah</h3>
            <button class="btn btn-primary btn-lg" type="button">
              LikedIn Profile
            </button>
          </div>
        </div>
        <div className="text-center">
          <h3>My Bio</h3>
          <p> Saya Yulianto berasal dari Lampung.Saya 1 tahun lalu berprofesi sebagai Guru Swasta, Tenaga Admanistrasi Di Sekolah Swasta Selama lebih dari 3 tahun.</p>
        </div>
      </>
    );
  }
}
