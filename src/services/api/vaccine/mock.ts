import { freeze } from "../../../utils/freeze";
import { GetVaccines } from "./types";

export const getVaccines: GetVaccines = async () => {
  await freeze();

  return [
    {
      name: "Vacina A",
      dose: "1ª Dose",
      date: "01/01/2023",
      location: "Posto X",
    },
    {
      name: "Vacina B",
      dose: "2ª Dose",
      date: "02/01/2023",
      location: "Posto Y",
    },
  ];
};

export const getVaccinesTaken: GetVaccines = async () => {
  await freeze();

  return [
    {
      name: "Vacina A",
      dose: "1ª Dose",
      date: "01/01/2023",
      location: "Posto X",
    },
    {
      name: "Vacina B",
      dose: "2ª Dose",
      date: "02/01/2023",
      location: "Posto Y",
    },
  ];
};
