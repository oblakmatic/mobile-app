import {configureTnsOAuth} from "nativescript-oauth2";
import {
    TnsOaProvider,
    TnsOaProviderOptionsGoogle,
    TnsOaProviderGoogle,
} from "nativescript-oauth2/providers";

export function configureGoogleProvider() {

    const googleProvider = configureOAuthProviderGoogle();

    configureTnsOAuth([googleProvider]);
}

export function configureOAuthProviderGoogle(): TnsOaProvider {
    const googleProviderOptions: TnsOaProviderOptionsGoogle = {
        openIdSupport: "oid-full",
        clientId:
            "945541497200-de0pc4guabknce7aiqr6nt0s7tv8fu7v.apps.googleusercontent.com",
        redirectUri:
            "com.googleusercontent.apps.945541497200-de0pc4guabknce7aiqr6nt0s7tv8fu7v:/auth",
        urlScheme:
            "com.googleusercontent.apps.945541497200-de0pc4guabknce7aiqr6nt0s7tv8fu7v",

        scopes: ["profile", "email", "https://www.googleapis.com/auth/books"]
    };
    const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
    return googleProvider;
}
