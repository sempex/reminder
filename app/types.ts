import { MedicationType } from "./generated/prisma/enums";

export type MedicationFrequency =
  | {
      type: "daily";
      timesPerDay: number;
      times: string[]; // ["08:00", "20:00"]
    }
  | {
      type: "weekly";
      daysOfWeek: number[]; // [1, 3, 5]
      times: string[];
    }
  | {
      type: "interval";
      hours: number;
    }
  | {
      type: "as_needed";
      maxPerDay?: number;
    };

export type CreateMedicationInput = {
  name: string;
  description?: string;
  type: MedicationType;
  dosage?: string;
  frequency?: MedicationFrequency;
};
