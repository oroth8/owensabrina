export function attendingParse(inputBool: boolean | null): string {

    switch (inputBool) {
        case true:
            return "Yes";
        case false:
            return "No";
        default:
            return "";
    }
  }