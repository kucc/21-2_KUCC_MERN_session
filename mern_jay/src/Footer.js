const Footer = (props) => {
  return (
    <>
      <br></br>
      <footer>email : {props.contact.email}</footer>
      <footer>phone : {props.contact.phone}</footer>
    </>
  );
};

export default Footer;
