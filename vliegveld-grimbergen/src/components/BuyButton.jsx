import { Link } from "react-router-dom";
export default function BuyButton() {
  return (
    <Link className="buyBook" to="/boek">
      Boek bestellen
    </Link>
  );
}
