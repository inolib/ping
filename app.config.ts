import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "PING",
  slug: "ping",
  plugins: [
    [
      "expo-build-properties",
      {
        android: {
          kotlinVersion: "1.6.20",
        },
      },
    ],
    "react-native-vision-camera",
  ],
  android: {
    package: "com.inolib.ping",
  },
  ios: {
    bundleIdentifier: "com.inolib.ping",
  },
  extra: {
    eas: {
      projectId: "c5e3b91d-a200-4c31-a2a9-ef666562fbe2",
    },
  },
});
