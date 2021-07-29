import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";

import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
      <WhatsAppWidget phoneNumber="+5215548250892" />
      <MessengerCustomerChat
        pageId="107889634770488"
        appId="544514809929470"
        language="es_ES"
        minimized={false}
        shouldShowDialog={true}
        greetingDialogDisplay="show"
        autoLogAppEvents={true}
      />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
