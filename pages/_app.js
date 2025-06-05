import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("react-onesignal").then((OneSignal) => {
      OneSignal.default.init({
         appId: "05a168f7-8419-43bb-95be-32e838893a65",
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
