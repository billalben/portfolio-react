const Client = ({ href, src, alt }) => {
  return (
    <li className="clients-item">
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </li>
  );
};

export default Client;
