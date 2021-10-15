import { useEffect, useState } from "react";
import "./MarsApp.css";
import "./resetMars.css";
import "./globalMars.css";
import Head from "./head";
import Supply from "./views/supply/Supply";
import Deposit from "./views/deposit/Deposit";
import Reference from "./views/reference/Reference";
import Community from "./views/community/Community";
import Footer from "./views/footer/Footer";
import { WsProvider } from "@polkadot/rpc-provider";
import { ApiPromise } from "@polkadot/api";

function MarsApp(props: any) {
  const [api, setAPI] = useState(null);

  const init = async () => {
    const provider = new WsProvider("wss://kusama-rpc.polkadot.io");
    const tempAPI: any = await ApiPromise.create({ provider });
    setAPI(tempAPI);
  };

  useEffect(() => {
    init()
  }, []);

  return (<>
    <div className="marsApp">
      <Head api={api} />
      <Supply />
      <Deposit />
      <Reference api={api} />
      <Community />
      <Footer />
    </div>

    <div id="mainModalContainer" />
  </>);
}

export default MarsApp;
