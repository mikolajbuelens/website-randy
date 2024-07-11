import { Link } from "react-router-dom";

export default function BuyOption() {
  return (
    <div className="buy-option-container">
      <Link to="/bestellen/Bezorging" className="buy-option">
        <h1>Bezorgen</h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
        </svg>
        <p>Wij bezorgen uw bestelling op de gewenste locatie</p>
      </Link>

      <Link to="/bestellen/Afhalen" className="buy-option">
        <h1>Afhalen</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z" />
        </svg>
        <p>Af the halen tijdens de tentoonstelling, 23-25 agustus 2024</p>
      </Link>
    </div>
  );
}
