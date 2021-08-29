import React from "react";
import "./style.scss";
import { useTranslation } from 'react-i18next';
import roadIcon from "../assets/road.png";

function Road() {
  const { t } = useTranslation();
  const title = "Road Map";
  const desc =
    "A great road traveled, gaining experiences, adding successes and build a great project.";
  const data = [
    {
      year: "2020",
      envy: "Q4",
      text: [
        "Whitepaper 1.0 was issued",
        "Core protocol design",
        "WEB3 Foundation Grant Application",
        "Prototype development based on pallet and off-chain work",
      ],
    },
    {
      year: "2021",
      envy: "Q1",
      text: [
        "Technical yellow paper was issued",
        "Improve the cross-chain interaction of Oracle users",
        "Realize the random selection of aggregators and on chain aggregation",
        "Improve the challenger and arbitration council model",
        "Million dollars of financing accomplished",
      ],
    },
    {
      year: "2020",
      envy: "Q4",
      text: [
        "Improve economic model design",
        "Launch Testnet",
        "Integration of Ares Protocol into Polkadot DeFi projects",
      ],
    },
    {
      year: "2020",
      envy: "Q4",
      text: [
        "Launch Mainnet",
        "Carry out multi-channel service cooperation",
        "Formal cooperation with enterprises",
        "Eco Marathon Developer Activities",
      ],
    },
  ];
  return (
    <section className="road">
      <div className="road-con">
        <h2 className="title">{title}</h2>
        <p className="desc">{desc}</p>
        <ul className="warp">
          {data.map((item, index) => {
            const { year, envy, text } = item;
            return (
              <li className='item' key={index}>
                <h2 className="road-title">
                  {year}
                  <span>{envy}</span>
                </h2>
                <p className="road-info">
                  <img src={roadIcon} alt="" />
                </p>
                <div className="road-text">
                  {text.map((t, index) => (
                    <p key={index}>{t}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Road;