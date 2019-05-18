
import axios from "axios";
const TIME_OUT = 2500000;

export function getDataService(requestData) {
    var httpClient = axios.create();
    httpClient.defaults.timeout = TIME_OUT;
    console.log("APIURL:", requestData.URL);
    console.log("Params in get", requestData.params);
    return httpClient.get(requestData.URL, requestData.params)
        .then(function (response) {
            console.log("api_response_success", response);
            return response;
        })
        .catch(function (error) {
            if (error.response) {
                console.log('failure error.response.data:', error.response.data);
                console.log('failure error.response.status:', error.response.status);
                console.log('failure error.response.headers:', error.response.headers);
                return { error: error.response.data.error };
            }
            else {
                console.log(' failure Error Message:', error.message);
                console.log(' failure Error Message:', error);
                return { error: error.message };
            }
        });
}

