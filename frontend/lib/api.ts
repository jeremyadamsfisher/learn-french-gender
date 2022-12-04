import ky from "ky-universal";

export default ky.create({prefixUrl: "http://localhost:8000"});