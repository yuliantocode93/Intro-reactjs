// import React from "react";

// const CustomInput = ({ label, type, name, onChange }) => {
//   return (
//     <div>
//       <label> {label}: </label>
//       <br />
//       <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const ShowErrors = ({ errors }) => {
//   return (
//     <ul style={{ color: "red", marginLeft: "-20px" }}>
//       {errors.map((error, i) => (
//         <li key={i}>{error}</li>
//       ))}
//     </ul>
//   );
// };

// class Validation extends React.Component {
//   state = {
//     email: "",
//     password: "",
//     errors: [],
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;

//     let message = [];

//     if (email.length === 0) {
//       message = [...message, "Email tidak boleh kosong"];
//     }

//     if (password.length === 0) {
//       message = [...message, "password tidak boleh kosong"];
//     }

//     const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//     if (!re.test(String(email).toLowerCase())) {
//       message = [...message, "Email tidak valid"];
//     }

//     if (password.length < 8) {
//       message = [...message, "Password terlalu pendek"];
//     }

//     if (message.length > 0) {
//       this.setState({
//         errors: message,
//       });
//     } else {
//       alert(`
//         email: ${this.state.email}
//         password: ${this.state.password}
//     `);
//       this.setState({
//         errors: [],
//       });
//     }

//     if (message.length > 0) {
//       this.setState(
//         {
//           errors: message,
//         },
//         () => console.log(this.state.errors)
//       );
//     }
//   };
//   render() {
//     const style = {
//       width: "400px",
//       margin: "100px auto 0",
//       border: "1px solid black",
//       padding: "10px",
//     };
//     return (
//       <div style={style}>
//         {this.state.errors && <ShowErrors errors={this.state.errors} />}
//         <h4>Login Page</h4>
//         <form onSubmit={this.handleSubmit}>
//           <CustomInput type="email" name="email" label="email" onChange={(value) => this.setState({ email: value })} />
//           <CustomInput type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Validation;

// import React from "react";
// import Validator from "validatorjs";

// const CustomInput = ({ label, type, name, onChange }) => {
//   return (
//     <div>
//       <label> {label}: </label>
//       <br />
//       <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
//     </div>
//   );
// };

// const ShowErrors = ({ errors }) => {
//   return (
//     <ul style={{ color: "red", marginLeft: "-20px" }}>
//       {errors.map((error, i) => (
//         <li key={i}>{error}</li>
//       ))}
//     </ul>
//   );
// };

// class Validation extends React.Component {
//   state = {
//     email: "",
//     password: "",
//     errors: [],
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;

//     let data = { email, password };

//     let rules = {
//       email: "required|email",
//       password: "min:8|required",
//     };

//     let validation = new Validator(data, rules);
//     validation.passes();
//     this.setState({
//       errors: [...validation.errors.get("email"), ...validation.errors.get("password")],
//     });
//   };
//   render() {
//     const style = {
//       width: "400px",
//       margin: "100px auto 0",
//       border: "1px solid black",
//       padding: "10px",
//     };
//     return (
//       <div style={style}>
//         {this.state.errors && <ShowErrors errors={this.state.errors} />}
//         <h4>Login Page</h4>
//         <form onSubmit={this.handleSubmit}>
//           <CustomInput type="email" name="email" label="email" onChange={(value) => this.setState({ email: value })} />
//           <CustomInput type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Validation;

import React from "react";
import Validator from "validatorjs";

const CustomInput = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label> {label}: </label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginLeft: "-20px" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

class Validation extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    let data = { email, password };

    let rules = {
      email: "required|email",
      password: "min:8|required",
    };

    let validation = new Validator(data, rules);
    validation.passes();

    if (validation.passes()) {
      // Form passes validation, show success alert
      alert(
        `
        "Form submitted successfully!"
        
        email: ${this.state.email}
        password: ${this.state.password}
    `
      );
      this.setState({
        errors: [],
      });
    } else {
      // Form has validation errors, update state with error messages
      this.setState({
        errors: [...validation.errors.get("email"), ...validation.errors.get("password")],
      });
    }
  };

  render() {
    const style = {
      width: "400px",
      margin: "100px auto 0",
      border: "1px solid black",
      padding: "10px",
    };
    return (
      <div style={style}>
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h4>Login Page</h4>
        <form onSubmit={this.handleSubmit}>
          <CustomInput type="email" name="email" label="email" onChange={(value) => this.setState({ email: value })} />
          <CustomInput type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Validation;
