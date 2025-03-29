import React from "react";
import { Link } from "react-router-dom";

export const FooterItem = ({ to, text, icon, href }) => {
  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "function") {
      // Si el icono es un componente de Material UI
      return React.cloneElement(icon(), (fontSize = "small"));
    } else if (typeof icon === "object" && icon.type === "i") {
      // Si el icono es un elemento de icono de Bootstrap
      return React.cloneElement(icon, {
        className: `${icon.props.className} fs-5`,
      });
    }
    return icon; // Si es otro tipo de icono, lo renderizamos tal cual
  };

  return (
    <li>
      {to ? (
        <Link to={to} className="text-reset">
          {renderIcon()}
          {text}
        </Link>
      ) : href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-start gap-2 text-reset"
        >
          {renderIcon()}
          {text}
        </a>
      ) : (
        <span className="d-flex align-items-start gap-2 ">
          {renderIcon()}
          <span className="text-muted">{text}</span>
        </span>
      )}
    </li>
  );
};
