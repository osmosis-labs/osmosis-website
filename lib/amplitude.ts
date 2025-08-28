import {
  init as amplitudeInit,
  logEvent as amplitudeLogEvent,
  Identify,
  identify,
} from "@amplitude/analytics-browser";
import { useEffect } from "react";
import { create } from "zustand";

/** set to true to see events and properties in console. DON'T COMMIT. */
const DEBUG = false;

type LastEvent = {
  eventName: string;
  eventProperties?: Record<string, any>;
};

type AmplitudeStore = {
  lastEvent: LastEvent | null;
  setLastEvent: (event: LastEvent) => void;
};

type AmplitudeEvent = [string, Record<string, any> | undefined] | [string];

const useAmplitudeStore = create<AmplitudeStore>((set) => ({
  lastEvent: null,
  setLastEvent: (event) => set({ lastEvent: event }),
}));

export const logAmplitudeEvent = (
  [eventName, eventProperties]: AmplitudeEvent
) => {
  if (DEBUG) {
    console.info({ name: eventName, props: eventProperties });
  }
  amplitudeLogEvent(eventName, eventProperties);
  useAmplitudeStore.getState().setLastEvent({ eventName, eventProperties });
};

const setUserAmplitudeProperty = (
  key: string,
  value: string | number | boolean
) => {
  const newIdentify = new Identify();
  newIdentify.set(key, value);
  identify(newIdentify);
};

/** Do-it-all hook for initting Amplitude and logging custom events on page load or at any time. */
export function useAmplitudeAnalytics({
  onLoadEvent,
  init,
}: {
  /** Log this event when the component mounts once. */
  onLoadEvent?: AmplitudeEvent;
  /** Init analytics environment. Done once per user session. */
  init?: true;
} = {}) {
  useEffect(() => {
    if (init) {
      if (process.env.AMPLITUDE_API_KEY !== undefined) {
        amplitudeInit(process.env.AMPLITUDE_API_KEY, undefined, {
          serverUrl: process.env.AMPLITUDE_SERVER_URL,
        });
      }
    }

    if (onLoadEvent) {
      logAmplitudeEvent(onLoadEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logEvent = (event: AmplitudeEvent) => {
    logAmplitudeEvent(event);
  };

  const getLastEvent = () => useAmplitudeStore.getState().lastEvent;

  return {
    logEvent,
    setUserProperty: setUserAmplitudeProperty,
    getLastEvent,
  };
}
