declare module 'react-native-check-app-install' {
    export const AppInstalledChecker: {
      isAppInstalled(packageName: string): Promise<boolean>;
    };
  }
  
