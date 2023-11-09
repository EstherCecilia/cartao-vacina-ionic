export type VaccineProps = {
  name: string;
  dose: string;
  date: string;
  location: string;
};

export type GetVaccines = () => Promise<VaccineProps[]>;
