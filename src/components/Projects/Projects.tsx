const activities = [
  {
    date: "August 2022",
    category: "Product development · Additive manufacturing",
    title: "Industrial-grade 3D printer development",
    description: "Built an industrial-grade FDM printer for production use, with a 300 × 300 × 450 mm build volume and support for a range of materials, including metal-filled filament.",
    images: [{ src: printerDevelopment, alt: "Enclosed industrial 3D printer developed at Nexgen 3D" }],
  },
  {
    date: "May 2023",
    category: "Invited technical talk · Saveetha Engineering College",
    title: "The evolution of 3D printing",
    description: "Presented “The Evolution of 3D Printing: Challenges and Opportunities for Industries” at the All India Seminar on Recent Trends and Challenges in 3D Printing.",
    images: [
      { src: seminarTalk, alt: "Seminar presentation on the evolution of 3D printing" },
      { src: seminarPresentation, alt: "Speaking to attendees at the 3D printing seminar" },
      { src: seminarAudience, alt: "Audience at the All India Seminar on 3D Printing" },
      { src: seminarAward, alt: "Receiving a certificate of appreciation at the seminar" },
    ],
  },
  {
    date: "September 2023",
    category: "Machine design · Client delivery",
    title: "Compact industrial FDM printer",
    description: "Designed and delivered a compact industrial printer with 30% lower material use while maintaining structural stability. The machine was tested over a month before delivery.",
    images: [
      { src: industrialPrinter, alt: "Compact FDM printer built for Alutech Composite Panels" },
      { src: printerDelivery, alt: "Project team with the completed compact industrial printer" },
    ],
  },
  {
    date: "18 January 2024",
    category: "Guest speaker · Rajalakshmi Engineering College",
    title: "Industry 4.0 and healthcare",
    description: "Invited to speak at a faculty development programme on “Exploring the Nexus of Industry 4.0 and Healthcare: Context, Applications, Advantages and Challenges.”",
    images: [{ src: guestSpeaker, alt: "Certificate of appreciation for the Industry 4.0 and healthcare guest lecture" }],
  },
  {
    date: "21 April 2026",
    category: "Student competition · IIT Madras",
    title: "ANSYS Technology Day",
    description: "Participated in the student competition at ANSYS Technology Day, conducted at IIT Madras by Finpoint Technologies in collaboration with Ansys.",
    images: [{ src: ansysCertificate, alt: "IIT Madras certificate for participating in the ANSYS Technology Day student competition" }],
  },
];

import printerDevelopment from "../../assets/activities/printer-development-2022.png";
import seminarAward from "../../assets/activities/seminar-award-2023.png";
import seminarAudience from "../../assets/activities/seminar-audience-2023.png";
import seminarPresentation from "../../assets/activities/seminar-presentation-2023.png";
import seminarTalk from "../../assets/activities/seminar-talk-2023.png";
import guestSpeaker from "../../assets/activities/guest-speaker-2024.png";
import industrialPrinter from "../../assets/activities/industrial-printer-2023.png";
import printerDelivery from "../../assets/activities/printer-delivery-2023.png";
import ansysCertificate from "../../assets/activities/ansys-tech-day-2026.png";

const Projects = () => (
  <section id="projects" className="bg-slate-900 text-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <p className="activity-eyebrow">Selected milestones · 2022—2026</p>
      <h2 className="activity-heading">Activities &amp; achievements</h2>
      <p className="activity-intro">
        A record of machines built, ideas shared, and engineering milestones—from industrial additive manufacturing to biomedical innovation.
      </p>
      <div className="activity-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.title}>
            <div className={`activity-gallery ${activity.images.length > 1 ? "activity-gallery--multiple" : ""}`}>
              {activity.images.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
            <div className="activity-card__content">
              <div className="activity-card__meta"><time>{activity.date}</time><span>{activity.category}</span></div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
