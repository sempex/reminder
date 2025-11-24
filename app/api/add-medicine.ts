"use server";

import { prisma } from "@/lib/prisma";
import { CreateMedicationInput } from "../types";
import { createClient } from "@/lib/supabase/server";

export async function addMedicine(input: CreateMedicationInput) {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  await prisma.medication.create({
    data: {
      userId: user.id,
      name: input.name,
      description: input.description,
      type: "",
      dosage: input.dosage,
      frequency: input.frequency,
      isActive: true,
      startDate: new Date(),
      endDate: null,
    },
  });
}
