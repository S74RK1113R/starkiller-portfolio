import plantrek from "../assets/Plantrek .png";
import dynamJob from "../assets/DynamJobs.png"
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
    img: dynamJob,
    href: "https://www.dynamjobs.com/",
    imgDescription: "Dynam jobs web image",
  },
  
];
