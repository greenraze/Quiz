
import { getDataService } from '../services';
import RNProgressHUB from 'react-native-progresshub';

export function* appSaga(requestData) {
    var data;
    const connected = true;
    if (connected) {
        RNProgressHUB.showSpinIndeterminate()
        if (requestData.requestType == 'get') {
            data = yield getDataService(requestData);
        }
        RNProgressHUB.dismiss();
        return data;
        
    } else {
        return data;
    }
}
