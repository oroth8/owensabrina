export function transportationParse(inputString: string): string {
    const normalizedValues: Record<string, string> = {
      bus: "Bus",
      private_vehicle: "Private Vehicle",
      shared_vehicle: "Shared Vehicle",
      ride_share: "Ride Share",
      other: "Other",
    };
  
    return normalizedValues[inputString] || inputString;
  }