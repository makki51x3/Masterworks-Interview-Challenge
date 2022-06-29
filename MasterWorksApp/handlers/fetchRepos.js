import axios from "axios";
import {updateSuggestions} from "../redux/slices/searchSlice"

export const fetchRepos = (dispatch,filter) => {
    
    // Setup required http headers
    const config = { 
        headers: {
        'accept': 'application/vnd.github.v3+json', 
        "Authorization": "token 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"
        },
    };

    // Initiate a post request, with username and password, to Login API
    axios.get("https://api.github.com/orgs/"+filter+"/repos", config)
    .then(
        (response) => { 
            if (response.status >= 200 && response.status <= 299){ //check for successful status code
                dispatch(updateSuggestions(response.data));
            }
        },
        (error) => { // on error
            console.log(error);
            // alert("Problem on connecting to server!");
        }
    );
};

export default fetchRepos;