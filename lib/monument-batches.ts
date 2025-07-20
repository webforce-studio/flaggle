// Monument Batches Tracking
// Updated: 2025-05-29

export interface BatchInfo {
  batchNumber: number
  monuments: string[]
  status: "completed" | "in-progress" | "planned"
  dateProcessed?: string
  notes?: string
}

export const MONUMENT_BATCHES: BatchInfo[] = [
  {
    batchNumber: 1,
    monuments: ["Eiffel Tower", "Great Pyramid of Giza", "Statue of Liberty"],
    status: "completed",
    dateProcessed: "2025-05-28",
    notes: "Initial batch - core famous monuments",
  },
  {
    batchNumber: 2,
    monuments: ["Taj Mahal", "Colosseum", "Machu Picchu"],
    status: "completed",
    dateProcessed: "2025-05-28",
    notes: "Second batch - UNESCO World Heritage sites",
  },
  {
    batchNumber: 3,
    monuments: ["Big Ben", "Leaning Tower of Pisa", "Brandenburg Gate"],
    status: "planned",
    notes: "European landmarks batch",
  },
  {
    batchNumber: 4,
    monuments: ["Burj Khalifa", "CN Tower", "Space Needle"],
    status: "planned",
    notes: "Modern towers and skyscrapers",
  },
  {
    batchNumber: 5,
    monuments: ["Mount Rushmore", "Angkor Wat", "Neuschwanstein Castle"],
    status: "completed",
    dateProcessed: "2025-05-29",
    notes: "Mixed architectural styles",
  },
  {
    batchNumber: 6,
    monuments: ["Acropolis", "Golden Gate Bridge", "Tower Bridge"],
    status: "completed",
    dateProcessed: "2025-05-29",
    notes: "Ancient and modern bridges/structures",
  },
  {
    batchNumber: 7,
    monuments: ["Stonehenge", "Christ the Redeemer", "Sydney Opera House"],
    status: "in-progress",
    dateProcessed: "2025-05-29",
    notes: "Multi-continental variety - prehistoric to modern",
  },
]

export const BATCH_PROGRESS = {
  totalBatches: 7,
  completedBatches: 4,
  inProgressBatches: 1,
  plannedBatches: 2,
  totalMonuments: 21,
  processedMonuments: 18,
  remainingMonuments: 3,
}

// Get current batch status
export function getCurrentBatchStatus() {
  const completed = MONUMENT_BATCHES.filter((b) => b.status === "completed").length
  const inProgress = MONUMENT_BATCHES.filter((b) => b.status === "in-progress").length
  const planned = MONUMENT_BATCHES.filter((b) => b.status === "planned").length

  return {
    completed,
    inProgress,
    planned,
    total: MONUMENT_BATCHES.length,
    completionPercentage: Math.round((completed / MONUMENT_BATCHES.length) * 100),
  }
}

// Get monuments by status
export function getMonumentsByStatus(status: "completed" | "in-progress" | "planned") {
  return MONUMENT_BATCHES.filter((batch) => batch.status === status).flatMap((batch) => batch.monuments)
}

export default MONUMENT_BATCHES
