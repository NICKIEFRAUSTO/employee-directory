import axios from "axios";
// ---------randome user API---------------------------------//
const BASEURL = "https://randomuser.me/api/?results=200&nat=us&inc=picture,name,email,phone";
// ----------included ?results=200 to limit the returned list to 200 employees, nat=us - returns only employees from the us, inc=... limits the returned fields to only those listed------------------------------------------------------//
export default {
    search: function() {
      return axios.get(BASEURL);
    }
  };