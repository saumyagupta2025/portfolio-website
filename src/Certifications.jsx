import CertificationCard from "./CertificateCard";
import certificates from "./certifications.json";
export default function Certifications() {
  return (
    <div>
      <div
        id="certifications-container"
        className="certifications-container py-20 px-16 bg-slate-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-sky-500 text-center text-3xl font-bold mb-14">
          Courses<span className="text-white"> & Certifications</span>
        </h3>
        <div className="certification-list flex flex-wrap justify-center gap-x-16 gap-y-10 mx-5 align-center">
          {certificates.map((certificate, index) => (
            <CertificationCard
              key={index}
              Name={certificate.Name}
              Company={certificate.Company}
              IssueDate={certificate.IssueDate}
              Link={certificate.Link}
              ImgSrc={certificate.ImgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
