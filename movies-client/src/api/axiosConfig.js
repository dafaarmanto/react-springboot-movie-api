import axios from "axios";

export default axios.create({
  baseURL: "https://4310-2001-448a-2042-c465-7ebb-efec-f82-b371.ap.ngrok.io",
  headers: { "ngrok-skip-browser-warning": "true" },
});
