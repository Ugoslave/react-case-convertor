const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {`${new Date().getFullYear()} Case Convertor Russia`}
      </p>
    </footer>
  );
}

export default Footer;
