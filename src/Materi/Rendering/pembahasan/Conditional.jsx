// import React from "react";

// export default class Conditional extends React.Component {
//   render() {
//     const isLogin = true;
//     let message = "";
//     if (isLogin) {
//       message = "anda sudah login";
//     } else {
//       message = "sihlakan login terlebih dahulu";
//     }
//     return (
//       <div>
//         <h1>{message}</h1>
//       </div>
//     );
//   }
// }

import React from "react";

export default class Conditional extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);

    return <div>{this.state.isLoading ? <h1>Loading...</h1> : <h1>Selamat datang di kelas MERN</h1>}</div>;
  }
}
