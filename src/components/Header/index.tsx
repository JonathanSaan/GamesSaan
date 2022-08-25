import "./style.scss";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  
  return (
    <header>
      <nav>
        <h1>GamesSaan</h1>
        <AiOutlineSearch size={32} />
      </nav>
    </header>
  );
};