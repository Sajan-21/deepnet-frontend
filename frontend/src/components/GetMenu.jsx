import axios from 'axios';
import { backendUrl } from '../App';

const GetMenu = async () => {
  try {
    let response = await axios({
        method: "GET",
        url: `${backendUrl}/get-menus`,
    });

    return response.data.data;

  } catch (error) {
    console.log("error in GetMenu : ",error);
    
  }
}

export default GetMenu