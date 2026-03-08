import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsComponent = () => {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  if (!measurementId) return null;

  return <GoogleAnalytics gaId={measurementId} />;
};

export default GoogleAnalyticsComponent;
