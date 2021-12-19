// import React, { useState } from "react"

// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"
// import logo from './image/logo.png';
// import './login.css';
// import {
//   Card, Button, Alert, Navbar, Container, Nav, Modal, 
//   InputGroup,
//   FormControl,
//   DropdownButton,
//   Dropdown,
//   NavDropdown,
//   Form,

// } from "react-bootstrap"

// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }
  
//   return (
//     <div>
//     <Navbar bg="none" expand="lg" className="navb">
//     <Container fluid>
//       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//           <Nav.Link href="#action1">Home</Nav.Link>
//           <Nav.Link href="#action2">Link</Nav.Link>
//           <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">
//               Something else here
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#" disabled>
//             Link
//           </Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// <h1><p className="h1">
//    <b className="profile">Welcome To Food App (Khana Sab Ky Lia) </b> 
// <div className="h2">
//   <h5 className="profile">Profile</h5>
// Email: {currentUser.email}<p>
//          <Button > <Link to="/update-profile" className="Btn">
//             Update Profile
//           </Link></Button></p>
//           <Button  className="Btn" onClick={handleLogout}>
//           Log Out
//         </Button>
//           </div>
//  <Card>
        
//       </Card>
     
       
      
//         </p>
//       </h1>
//       <Button variant="success" onClick={handleShow}>
//         Food Bank
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Food Banks</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//          <center> All Food Banks Available</center>

//           <div>
//         {PostData.map((postDetail, index) => {
//           return <h6>
//            <b> {postDetail.branch_name}</b>
//            <p>Latitude: {postDetail.latitude} <br/>
//            Longitude: {postDetail.longitude}</p>

           
           

           


//           </h6> 
          
          
//         })}
//       </div>
















//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button> */}
//         </Modal.Footer>
//       </Modal>
//       </div>


//   );
//   }
  
import React, { useState,useRef } from "react"
import PostData from './food_bank.json'
import {
  Card, Button, Alert, Navbar, Container, Nav, Modal,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Row, Col, Carousel,
  NavDropdown,
  Form,

} from "react-bootstrap"


import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from './image/logo.png';
import c1 from './image/111.gif';
import c2 from './image/1111.gif';
import c3 from './image/burger.gif';



// import Carousel from "./carousal";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      
      <h1>
      <Navbar bg="none" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Home Page</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="https://www.saylaniwelfare.com/home">Saylani Website</Nav.Link>
        <Nav.Link href="UAN: 111-729-526">Contact</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Amount</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Donation</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
       
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>  <p className="h1">    <b className="profile">Welcome To Food App (Khana Sab Ky Lia) </b> 
 <div className="h2">
   <h5 className="profile">Profile</h5>
 Email: {currentUser.email}<p>
          <Button > <Link to="/update-profile" className="Btn">
             Update Profile
           </Link></Button></p>
           <Button  className="Btn" onClick={handleLogout}>
           Log Out
         </Button>
           </div>
  <Card>
        
       </Card>
     
       
      
        </p>
      </h1>

      <Navbar>
        
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" height="60px" /></Navbar.Brand>
          {/* <Nav.Link >Need Food</Nav.Link> */}
          <Example />
          &nbsp;&nbsp;

          <Bank />
          {/* <Nav.Link href="#home">Food Bank</Nav.Link> */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>Status:</Navbar.Text>
          <Nav.Link href="#home">Pending...</Nav.Link>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <strong>Email:</strong> {currentUser.email}
              &nbsp;&nbsp;
              <Button onClick={handleLogout}>Log Out</Button>
              {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
     
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

     
    </>
  )
}





function Example() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Need Food
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Fill this form to get food!
          <InputGroup className="mb-3">
            <InputGroup.Text>Your Name</InputGroup.Text>
            <FormControl aria-label="Name" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Your Father Name</InputGroup.Text>
            <FormControl aria-label="Father Name" />

          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your CNIC Number</InputGroup.Text>
            <FormControl aria-label="CNIC" />

          </InputGroup>

          

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your Family Members</InputGroup.Text>
            <FormControl aria-label="No of Family Members" />

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Choose Help Category</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>

            </DropdownButton>

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Times You Need</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Daily 1 time</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 2 times</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 3 times</Dropdown.Item>


            </DropdownButton>

          </InputGroup>



          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your CNIC front and Back Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text>Your Monthly Income</InputGroup.Text>
            <FormControl aria-label="income" />
          </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




function Bank() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Food Bank
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food Banks</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         <center> All Food Banks Available</center>

          <div>
        {PostData.map((postDetail, index) => {
          return <h6>
           <b> {postDetail.branch_name}</b>
           <p>Latitude: {postDetail.latitude} <br/>
           Longitude: {postDetail.longitude}</p>

           
           

           


          </h6> 
          
          
        })}
      </div>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button> */}
        </Modal.Footer>
      </Modal>
      
    </>
  );
}