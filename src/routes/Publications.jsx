import publicationInfo from "./../components/publications/publicationInfo.js";
import "./../styles/publications.css";

export default function Publications() {
  // console.log(publicationInfo);
  return (
    <div className="publications-container">
      <div className="publications-header">
        <h1 className="publication-heading">Papers from My Academic Journey</h1>
        <p className="publication-subtitle">
          <em>Charting Knowledge, One Paper at a Time.</em>
        </p>
      </div>
      <div className="publication-card-container"></div>
    </div>
  );
}
