import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Login() {

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //state & setState to get field value
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // errors required & invalid
  const [errors, setErrors] = useState({
    emailErrors: '',
    passwordErrors: ''

  })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const dataChange = (e) => {
    
    if (e.target.name == 'email') {
      setData({
        ...data,
        email: e.target.value
      })
      setErrors({
        ...errors,
        emailErrors: e.target.value.length == 0 ? "This Field is Required" :
          !emailRegex.test(e.target.value) && "This email Not Invalid, pls match the Format(email@example.com) "
      })
    }
    else {
      setData({
        ...data,
        password: e.target.value
      })
      setErrors({
        ...errors,
        passwordErrors: e.target.value.length == 0 ? "This Field is Required" :
          e.target.value.length < 8 && "This Field must be 8 or more"
      })
    }


  }
   var isLogedIn=false; //flag لحد منكمل بكرا
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!data.email.trim() || !data.password.trim()) {
      setErrors({
        ...errors,
        emailErrors: "This Field is Required",
        passwordErrors: "This Field is Required"
      });
      return ;
    }
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userFound = storedUsers.find(user => user.email === data.email);
    if (userFound) {
      if (userFound.password === data.password) {
        isLogedIn=true;
        console.log(isLogedIn)
        navigate("/")
      } else {
        setErrors({
          ...errors,
          passwordErrors: "Password is not Correct"
        });
      }
    }else {
      setErrors({
        ...errors,
        emailErrors: "Email is not correct or not found"
      });
    }



  }



  return (
    <div className=' my-5 ' >
      <Form onSubmit={handleLogin} className="row g-3 w-50 mx-auto my-5 flex-column justify-content-center align-items-center shadow p-4 rounded-5 mt-5" style={{ minWidth: "360px" }}>
        <h1 className='mb-5'>Log in</h1>
        <Row className="mb-3 text-start">
          <Form.Group as={Row}>
            <Form.Label column sm="2" >Email</Form.Label>
            <Col lg="10">
              <Form.Control name="email" type="email" value={data.email} placeholder="email@example.com" onChange={(e) => dataChange(e)} isInvalid={!!errors.emailErrors} isValid={!errors.emailErrors && data.email} />
              <Form.Control.Feedback type="invalid">{errors.emailErrors}</Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Row>
        <Row className="mb-3 text-start">
          <Form.Group as={Row}>
            <Form.Label column sm="2" >Password</Form.Label>
            <Col lg="10">
              <div className='position-relative'>
                <Form.Control name="password" type={showPassword ? 'text' : 'password'} value={data.password} placeholder="Password" onChange={(e) => dataChange(e)} isInvalid={!!errors.passwordErrors} isValid={!errors.passwordErrors && data.password} />
                <Form.Control.Feedback type="invalid">{errors.passwordErrors}</Form.Control.Feedback>
                {showPassword ? (
                  <FiEyeOff onClick={togglePasswordVisibility} className="position-absolute top-0 end-0 fs-5 me-4 mt-2" style={{ cursor: 'pointer' }} />
                ) :
                  (
                    // position-absolute top-50 end-0 translate-middle-y
                    <FiEye onClick={togglePasswordVisibility} className="position-absolute top-0 end-0 fs-5 me-4 mt-2" style={{ cursor: 'pointer' }} />
                  )}
              </div>
            </Col>
          </Form.Group>
        </Row>
        <Button variant="success" type="submit" className="my-3 w-25 m-auto rounded-5">
          Submit
        </Button>
      </Form>
    </div>

  );
}

export default Login;