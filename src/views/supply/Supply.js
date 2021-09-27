import { useTranslation } from "react-i18next";
import styles from "./Supply.module.scss";
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Supply = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [
		{ angle: 30, radius: 3.5, innerRadius: 2, label: t("PLOSupply"), subLabel: '30%' },
		{ angle: 20, radius: 3, innerRadius: 2, label: t("PLOReserve"), subLabel: '20%' },
		{ angle: 5, radius: 3, innerRadius: 2, label: t("marketing"), subLabel: "5%" },
		{ angle: 5, radius: 3, innerRadius: 2, label: t("devFund"), subLabel: "5%" },
		{ angle: 20, radius: 3, innerRadius: 2, label: t("ecoSystemDevelopment"), subLabel: "20%" },
		{ angle: 20, radius: 3, innerRadius: 2, label: t("liquidityMining"), subLabel: "20%" },
	];

	return (<section className={styles.supplyLayout} id="supply">
		<h2>{t("supplyTitle")}</h2>
		<div className={styles.description}>{t("supplyDescription")}</div>

		<div className={styles.content}>
			<div className={styles.leftBlock}>
				<div className={styles.score}>
					{theNumber.split("").map(letter => (<div className={styles.letter}>{letter}</div>))}
				</div>

				<div className={styles.infoBlock}>{t("supplyInfo")}</div>
			</div>

			<div>
				<RadialChart
					data={myData}
					width={380}
					height={380}
					showLabels={true}
					colorRange={['#FFE0D5', '#EA5B34', "#FFCFC0", "#FFC1AC", "#F9A285", "#F37B53"]}
					padAngle={0.05} />
			</div>
		</div>
	</section>);
};

export default Supply