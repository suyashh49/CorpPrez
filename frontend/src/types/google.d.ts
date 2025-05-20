// Type definitions for Google APIs
interface Window {
    gapi: {
      load: (api: string, callback: () => void) => void;
      client: {
        init: (config: any) => Promise<void>;
        drive: {
          files: {
            list: (params: any) => Promise<{
              result: {
                files: Array<{
                  id: string;
                  name: string;
                  thumbnailLink?: string;
                  createdTime: string;
                  modifiedTime: string;
                  webViewLink: string;
                }>;
              };
            }>;
          };
        };
        slides: {
          presentations: {
            get: (params: { presentationId: string }) => Promise<{
              result: any;
            }>;
            batchUpdate: (params: any) => Promise<any>;
          };
        };
      };
    };
    google: {
      accounts: {
        oauth2: {
          initTokenClient: (params: {
            client_id: string;
            scope: string;
            callback: (response: any) => void;
          }) => {
            requestAccessToken: (options?: { prompt?: string }) => void;
          };
          revoke: (token: string, callback: () => void) => void;
        };
      };
    };
  }