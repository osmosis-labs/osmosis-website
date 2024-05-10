"use client";
// TODO: Evaluate import 'client only'
import React, { useEffect } from "react";
import Script from "next/script";

export type GTMParams = {
  gtmId: string;
  dataLayer?: string[];
  dataLayerName?: string;
  auth?: string;
  preview?: string;
  nonce?: string | null;
};

let currDataLayerName: string | undefined = undefined;

/**
 * It's a workaround to support nonce, right now there are some PR for this on next repo,
 * but they're still in progress (idk why).
 */
export function GoogleTagManager(props: GTMParams) {
  const {
    gtmId,
    dataLayerName = "dataLayer",
    auth,
    preview,
    dataLayer,
    nonce,
  } = props;

  if (currDataLayerName === undefined) {
    currDataLayerName = dataLayerName;
  }

  const gtmLayer = dataLayerName !== "dataLayer" ? `&l=${dataLayerName}` : "";
  const gtmAuth = auth ? `&gtm_auth=${auth}` : "";
  const gtmPreview = preview ? `&gtm_preview=${preview}&gtm_cookies_win=x` : "";

  useEffect(() => {
    // performance.mark is being used as a feature use signal. While it is traditionally used for performance
    // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
    // existing API.
    // The performance measurement will be handled by Chrome Aurora

    performance.mark("mark_feature_usage", {
      detail: {
        feature: "next-third-parties-gtm",
      },
    });
  }, []);

  console.log("HERE: ", nonce);

  return (
    <>
      <Script
        id="_next-gtm-init"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${dataLayer ? `w[l].push(${JSON.stringify(dataLayer)})` : ""}
      })(window,'${dataLayerName}');`,
        }}
        nonce={nonce ?? undefined}
      />
      <Script
        id="_next-gtm"
        data-ntpc="GTM"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}${gtmLayer}${gtmAuth}${gtmPreview}`}
        nonce={nonce ?? undefined}
      />
    </>
  );
}

declare global {
  interface Window {
    dataLayer?: Object[];
    [key: string]: any;
  }
}

export const sendGTMEvent = (data: Object) => {
  if (currDataLayerName === undefined) {
    console.warn(`@next/third-parties: GTM has not been initialized`);
    return;
  }

  if (window[currDataLayerName]) {
    window[currDataLayerName].push(data);
  } else {
    console.warn(
      `@next/third-parties: GTM dataLayer ${currDataLayerName} does not exist`,
    );
  }
};
