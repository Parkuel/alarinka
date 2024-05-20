const pug = require("pug");
const nodemailer = require("nodemailer");

const {
  EMAIL_FROM,
  NODE_ENV,
  SENDGRID_USERNAME,
  SENDGRID_PASSWORD,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env;

module.exports = class Email {
  #from = `Alarinka <${EMAIL_FROM}>`;

  constructor({ user, place, owner, url }) {
    this.user = user;
    this.owner = owner;
    this.place = place;
    this.to = user.email;
    this.url = url;
  }

  setProp(prop, newValue) {
    this[prop] = newValue;
    return this;
  }

  newTransport() {
    // USE SENDGRID IF IN "PRODUCTION"
    if (NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: SENDGRID_USERNAME,
          pass: SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    // SEND actual email
    const html = pug.renderFile(
      `${__dirname}/../emailsTemplates/${template}.pug`,
      {
        user: this.user,
        owner: this.owner,
        place: this.place,
        url: this.url,
        subject,
      }
    );

    const mailOptions = {
      from: this.#from,
      to: this.to,
      subject,
      html,
      text: this.message,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendBookedPlace() {
    await this.send(
      "bookPlace",
      `Alarinka booking successful (${this.place.title})`
    );
  }

  async sendBookedMyPlace() {
    await this.send(
      "bookMyPlace",
      `Alarinka - (${this.place.title}) new booking.`
    );
  }

  async acceptedBooking() {
    await this.send(
      "acceptedBooking",
      `Your booking of (${this.place.title}) was accepted.`
    );
  }

  async rejectedBooking() {
    await this.send(
      "rejectedBooking",
      `Your request to book (${this.place.title}) was not accepted.`
    );
  }
};
