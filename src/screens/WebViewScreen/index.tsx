import WebView from "react-native-webview";

export function WebViewScreen() {
    return (
        <WebView
            style={{
                flex: 1
            }}
            source={{ uri: 'https://linkedin.com/in/giliardi' }}
            cacheEnabled={false}
            cacheMode="LOAD_NO_CACHE"
        />
    )
}