import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

	function Home (props){
		return (
			<div className="container bg-black text-white text mx-auto"> 
				<div className="uno" id="clock"><i class="fa-regular fa-clock"></i></div>
				<div className="dos">{props.digitSix%10}</div>
				<div className="tres">{props.digitFive%10}</div>
				<div className="cuatro">{props.digitFour%10}</div>
				<div className="cinco">{props.digitThree%10}</div>
				<div className="seis">{props.digitTwo%10}</div>
				<div className="siete">{props.digitOne%10}</div>	
			</div>
		);
	};


export default Home;
