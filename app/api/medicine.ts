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

  const medication = await prisma.medication.create({
    data: {
      userId: user.id,
      name: input.name,
      description: input.description,
      type: input.type,
      dosage: input.dosage,
      frequency: input.frequency,
      isActive: true,
      startDate: new Date(),
      endDate: null,
    },
  });

  return { success: true, medication };
}

export async function getPersonalMedications() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized");
  }

  const mediactions = await prisma.medication.findMany({
    where: {
      userId: user?.id,
    },
  });

  return { success: true, mediactions };
}
