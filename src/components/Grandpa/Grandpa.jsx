import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

// create context
export const AssetContext = createContext('diamond');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'gold';
    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <AssetContext.Provider value="diamond">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty asset={asset}></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;