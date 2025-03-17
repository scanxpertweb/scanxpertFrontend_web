// src/data/serviceData.ts

export interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    image: "images/cbctscanner.jpeg",
    title: "Digital CBCT Scan (3D X-ray)",
    description:
      "Cone Beam Computed Tomography (CBCT) provides high-precision 3D imaging, essential for dental implants, orthodontics, and complex surgical procedures.",
  },
  {
    id: 2,
    image: "images/services/opg.png",
    title: "Digital OPG X-Ray",
    description:
      "Orthopantomogram (OPG) captures a full panoramic view of your teeth, jawbones, and surrounding structures, aiding in orthodontic and general dental assessments.",
  },
  {
    id: 3,
    image: "images/services/ceph.png",
    title: "Digital Cephalometric Radiograph",
    description:
      "Cephalometric X-rays are crucial in orthodontic treatment planning, allowing precise measurements of facial structure, bite alignment, and airway assessment.",
  },
  {
    id: 4,
    image: "images/services/2dXrayOfface.png",
    title: "2D Face X-Ray",
    description:
      "High-resolution 2D imaging of the face and jaw, used for diagnosing fractures, TMJ disorders, and dental abnormalities.",
  },
  {
    id: 5,
    image: "images/services/tmj.png",
    title: "TMJ Imaging",
    description:
      "Specialized imaging of the temporomandibular joint (TMJ) to diagnose disorders related to jaw pain, movement restrictions, and joint dysfunction.",
  },
  {
    id: 6,
    image: "images/services/sinusImaging.png",
    title: "Sinus Imaging",
    description:
      "Detailed imaging to evaluate sinus infections, blockages, and anatomical variations affecting breathing and sinus-related disorders.",
  },
  {
    id: 7,
    image: "images/services/singletooth.png",
    title: "Single Tooth Imaging (Root Assessment)",
    description:
      "Focused imaging for detailed analysis of individual teeth, used in detecting infections, fractures, and assessing root canal treatments.",
  },
  {
    id: 8,
    image: "images/services/implant.png",
    title: "Implant Planning & Bone Density Measurement",
    description:
      "Accurate bone density evaluation and 3D imaging to ensure precise dental implant placement, minimizing risks and improving success rates.",
  },
  {
    id: 9,
    image: "images/services/airway.png",
    title: "Airway Analysis",
    description:
      "Advanced imaging to assess airway obstructions, aiding in the diagnosis of sleep apnea, breathing disorders, and orthodontic treatment planning.",
  },
];
