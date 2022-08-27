import css from "./style.module.css";

const ContactData = (props) => {
  return (
    <div className={css.Form}>
      <label htmlFor="name">Нэр:</label>
      <input type="text" name="name" onChange={(e) => props.getName(e)} />
      <label htmlFor="address">Гэрийн хаяг:</label>
      <input type="text" name="name" onChange={(e) => props.getAddress(e)} />
    </div>
  );
};

export default ContactData;
