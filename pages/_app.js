import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("react-onesignal").then((OneSignal) => {
      OneSignal.default.init({
         appId: "3d213798-d7c2-439f-bba7-95628891957c",
        serviceWorkerPath: "/OneSignalSDKWorker.js",
      });
    });
  }, []);
  return (
    <Fragment>
      <div className="bg-white ls:w-[360px] flex  flex-col mx-auto">
        <GA4Initializer />
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      </div>

    </Fragment>
  );
}
