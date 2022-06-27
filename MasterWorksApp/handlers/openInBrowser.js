
import * as WebBrowser from 'expo-web-browser';

export const openInBrowser = (item) => {
    WebBrowser.openBrowserAsync(item.html_url);
};

export default openInBrowser;