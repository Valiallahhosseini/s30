import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect } from "react";

const Header = ({ children, foo }) => {
  const date = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    foo(date);
  }, [foo, date]);

  return (
    <div style={{ background: "gray" }}>
      <div>{children}</div>
      <ul>
        <li>
          <Link to="/" title="-" onClick={() => foo(date)}>
            Go to Home Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
