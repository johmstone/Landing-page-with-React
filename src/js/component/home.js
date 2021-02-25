import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";
const cardArray = [
	{
		imageURL:
			"https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png",
		cardTitle: "Card 1",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL: "https://getlorem.com/es/",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"https://www.multimediaxp.com/images/article_190508124638.1557333998.jpg",
		cardTitle: "Card 2",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL: "https://es.lipsum.com/",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"https://www.onlineprinters.es/blog/wp-content/uploads/2020/01/lorem-ipsum.jpg",
		cardTitle: "Card 3",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL: "https://loremipsum.io/es/",
		buttonLabel: "Find Out More!"
	},
	{
		imageURL:
			"https://blogging.com/wp-content/uploads/2018/08/lorem-ipsum-fi-2.png",
		cardTitle: "Card 4",
		cardDescription:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
		buttonURL: "https://loremipsum.es/",
		buttonLabel: "Find Out More!"
	}
];

const CardsinHTML = cardArray.map((singleCard, i) => {
	return (
		<Card
			key={i}
			imageURL={singleCard.imageURL}
			cardTitle={singleCard.cardTitle}
			cardDescription={singleCard.cardDescription}
			buttonURL={singleCard.buttonURL}
			buttonLabel={singleCard.buttonLabel}
		/>
	);
});

//console.log(CardsinHTML);

export function Home() {
	return (
		<div>
			<NavBar />
			<div style={{ height: "2rem" }}></div>
			<Jumbotron />
			<div className="m-5">
				<div className="row row-cols-md-4">{CardsinHTML}</div>
			</div>
			<Footer />
		</div>
	);
}
