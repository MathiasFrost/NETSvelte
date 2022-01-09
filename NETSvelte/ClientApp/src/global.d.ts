/// <reference types="svelte" />
interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    readonly VITE_APPID: string;
    readonly VITE_SCOPES: string;
    readonly VITE_AUTHORITY: string;
    readonly VITE_REDIRECT_URI: string;
    readonly VITE_SILENT_URI: string;
    readonly VITE_LOGOUT_URI: string;
    BETA: boolean;
}

interface ImportMeta {
    env: ImportMetaEnv;
}