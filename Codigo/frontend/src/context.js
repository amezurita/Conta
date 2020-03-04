import React, { Component, createContext } from "react";
import { withRouter } from "react-router-dom";

import Property from "./components/pages/Property";

import AUTH_SERVICE from "./services/auth";
import PROP from "./services/property";
import PAYMENT from "./services/payment";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    formSignup: {
      name: "",
      email: "",
      password: "",
      role: "",
      property_id: ""
    },
    formLogin: {
      email: "",
      password: ""
    },

    formPayment: {
      name: "",
      amount: 0,
      description: "",
    },

    user: {
      id: "",
      name: "",
      email: "",
      role: "",
      property_id: "",
      property: {},
      payments: []
    },


    property: [{
      name: "",
      rent: "",
      desc: "", 

      tenant:""
    }],
    tenantProperty: {
      name: "",
      rent: "",
      desc: "",
      payments: "", 
      owner:""
    },

    ownerProperties: [{
      name: "",
      rent: "",
      desc: "",

      tenant:"",

      payments: [{
        name: "",
        amount:"",
        description:""
      }],
    }],

    selectedProperty: {
      payments: []
    },

    isLoggedIn: false,
    msg: "Landing page"
  };

  // handleInput = (e, obj) => {
  //   const { name, value } = e.target
  //   obj[name] = value
  //   this.setState({ obj })
  // onChange={ (e) => handleInput(e, 'formSignup')}

  // }

  handlePaymentInput = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      formPayment: {
        ...prevState.formPayment,
        [name]: value
      }
    }));
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      property: {
        ...prevState.property,
        [name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, rent, description } = this.state.property;
    PROP.create(
      { name, rent, description },
      this.state.user
    )
      .then(({ data }) => {
        this.props.history.push("/profile");
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleSubmitPayment = e => {
    e.preventDefault();
    let payment = this.state.formPayment;

    payment.owner = this.state.user.id
    payment.property = this.state.selectedProperty._id

    PAYMENT.create(payment, this.state.user)
      .then(({ data }) => {

        this.setState(prevState => ({
          ...prevState,
          selectedProperty: {
            ...prevState.selectedProperty,
            payments: [...prevState.selectedProperty.payments, data]
          }
        }));

        this.props.history.push("/property");
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleSelectRole = (e, role) => {
    e.preventDefault();

    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        role
      }
    }));

    this.props.history.push("/signup");
  };

  handleSignupInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value
      }
    }));
  };

  handleLoginInput = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      formLogin: {
        ...prevState.formLogin,
        [name]: value
      }
    }));
  };

  handleSignupSubmit = e => {
    e.preventDefault();
    const { name, email, password, role, property_id } = this.state.formSignup;

    AUTH_SERVICE.signup({ name, email, password, role, tenpropId: property_id })
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          formSignup: {
            name: "",
            email: "",
            password: "",
            role: "",
            property_id: ""
          }
        }));

        this.props.history.push("/login");
      })
      .catch(e => {
        console.log(e);
      });
  };

  handleFile = e => {
    const formData = new FormData();
    formData.append("photoURL", e.target.files[0]);
    AUTH_SERVICE.uploadPhoto(formData)
      .then(({ data }) => {
        this.setState({ loggedUser: data.user });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state.formLogin;
    AUTH_SERVICE.login({ email, password,  })
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          formLogin: {
            email: "",
            password: ""
          },

          user: {
            ...data.response,
          }
        }));

        if(this.state.user.role === "owner"){
          this.props.history.push("/profile")
        } else{
          this.props.history.push("/tennant")
        }
      })
      .catch(err => {
        console.log(err);
        alert("Algo salió mal 🥺😭");
      });
  };

  loadOwnerProperties = () => {
    PROP.getOwnerProperties(this.state.user)
      .then(({ data }) => {
        console.log(data)

        this.setState(prevState => ({
          ...prevState,
          ownerProperties: data
        }));
      })
  }

  handleSelectPropertyDetail = (property) => {
    this.setState(prev => ({
      ...prev,
      selectedProperty: property
    }))

    this.props.history.push("/property")
  }

  handleMarkPaymentDone = (payment) => {
    PAYMENT.done(payment, this.state.user)
      .then(({ data }) => {
        const index = this.state.user.payments.findIndex(x => x._id === payment._id);

        this.setState(prevState => ({
          ...prevState,
        user: {
          ...prevState.user,
          payments: [
            ...prevState.user.payments.slice(0, index),
            {...payment, isPaid: true},
            ...prevState.user.payments.slice(index + 1),
          ]
        }
        }));

      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleFile,
      handleInput,
      handleSubmit,
      handleSelectRole,
      loadOwnerProperties,
      handleSelectPropertyDetail,
      handlePaymentInput,
      handleSubmitPayment,
      handleMarkPaymentDone
    } = this;
    return (
      <MyContext.Provider
        value={{
          state,
          handleSelectRole,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleFile,
          handleInput,
          handleSubmit,
          loadOwnerProperties,
          handleSelectPropertyDetail,
          handlePaymentInput,
          handleSubmitPayment,
          handleMarkPaymentDone
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default withRouter(MyProvider);
