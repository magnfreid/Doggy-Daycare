import { mockData } from "./mock-data";

export async function fetchDogData(testMode = false) {
  if (!testMode) {
    const data = await fetch(
      "https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8"
    ).then((response) => response.json());
    return data.record;
  } else {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockData;
  }
}
