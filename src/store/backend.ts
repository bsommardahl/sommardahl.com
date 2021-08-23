import axios from "axios";

const endpoints: any = {
  newCoachingApplicant: {
    prod: "https://end9hrmk62zmvqy.m.pipedream.net",
    test: "https://end9hrmk62zmvqy.m.pipedream.net",
    method: "POST",
  },
};

function convertPayloadToQuerystring(payload: any) {
  const q = Object.keys(payload)
    .map((k) => `${k}=${encodeURI(payload[k])}`)
    .join("&");
  return q;
}

async function sendToBackend(
  endpointName: string,
  payload: any,
  isTest: Boolean = false
) {
  const endpoint = endpoints[endpointName];
  if (!endpoint) {
    throw new Error(`Unsupported endpoint ${endpointName}.`);
  }
  const url = isTest ? endpoint.test : endpoint.prod;
  let query = "";
  const { method } = endpoint;

  try {
    if (method === "GET" || method === "DELETE") {
      query = convertPayloadToQuerystring(payload);
    }
    const a: any = axios;
    const axiosMethod = a[method.toLowerCase()];
    const result = await axiosMethod(`${url}?${query}`, payload);
    return result.data;
  } catch (err) {
    throw new Error(`Error when trying to "${method}" to "${url}". ${err}`);
  }
}

export function startNewApplication(applicant: any, isTest: Boolean) {
  return sendToBackend("newCoachingApplicant", applicant, isTest);
}
