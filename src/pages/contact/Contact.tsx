import React, { useState, type ChangeEvent } from "react";
import "../contact/Contact.css";
interface FormContact {
  name: string;
  email: string;
  tel: string;
  message?: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormContact>({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Göndərilən məlumatlar:", formData);
    setFormData({ name: "", email: "", tel: "", message: "" });
  };

  const handleChanceForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="contact-section  ">
      <div className="contact-header">
        <h2 className="contact-title text-[#4b5563] dark:text-white">
          CONTACT
        </h2>
      </div>

      <p className="contact-description"></p>

      <div className="divider">
        <span className="divider-line"></span>
        <span className="divider-icon  text-[#4b5563] dark:text-white">
          \\\SS///
        </span>
        <span className="divider-line"></span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group ">
          <input
            type="text"
            name="name"
            onChange={handleChanceForm}
            value={formData.name}
            placeholder="ENTER YOUR NAME*"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            onChange={handleChanceForm}
            value={formData.email}
            placeholder="ENTER YOUR EMAIL*"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="tel"
            onChange={handleChanceForm}
            placeholder="PHONE NUMBER"
            value={formData.tel}
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            onChange={handleChanceForm}
            placeholder="YOUR MESSAGE*"
            value={formData.message}
            rows={6}
            required
          ></textarea>
        </div>

        <div className="submit-container">
          <span className="submit-line"></span>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
          <span className="submit-line"></span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
