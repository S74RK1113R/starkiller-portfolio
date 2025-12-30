import plantrek from "../assets/projects/Plantrek .png";
import dynamJob from "../assets/projects/DynamJobs.png"
import { habilitiesIcons as hbi } from "../icons/Icons";
export const proyectInformation = [
  {
    id: 0,
    name: "Plantrek",
    tecnologies: [
      hbi.react,
      hbi.tailwindcss,
      hbi.vite,
      hbi.javascript
    ],
    description:
      "Esta web fue creada para la aplicación plantrek actualmente disponible en Play Store.",
    enDescription:
      "This website was created for the plantrek app currently available on Play Store.",
    img: plantrek,
    href: "https://www.plantrek.app",
    imgDescription: "Plantrek web img",
  },
  {
    id: 1,
    name: "Dynam Jobs",
    tecnologies: [
      hbi.react,
      hbi.tailwindcss,
      hbi.vite,
      hbi.javascript,
      hbi.gsap
    ],
    description:
      "Página creada para los CEO de Dynam Jobs",
    enDescription:
      "Website created for the CEO of Dynam Jobs",
    img: dynamJob,
    href: "https://www.dynamjobs.com/",
    imgDescription: "Dynam jobs web image",
  },
  
];
