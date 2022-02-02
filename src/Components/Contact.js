import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from '@emailjs/browser';


class Contact extends Component {

  constructor(props){
    super(props)

    this.state =  {
      name: '',
      subject: '',
      message: ''
    }

    this.formRef = React.createRef()
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('gmail', 'template_cbfvoda', this.formRef.current, 'user_wCr7cvdFXcYeYSeWJA7EJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert('Correo Envíado');

    };

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form ref={this.formRef} onSubmit={sendEmail} >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="from_name"
                      name="from_name"
                      onChange={(e) =>  this.setState({name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="subject_data"
                      name="subject_data"
                      onChange={(e) =>  this.setState({subject: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="message"
                      name="message"
                      onChange={(e) =>  this.setState({message: e.target.value})}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" type="submit" >
                      Send
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
