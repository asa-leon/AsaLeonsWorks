import { useAppContext } from "../context/state";

export default function MainContent() {

	return (
		<div>
		<h1>{useAppContext().titles[0]}</h1>
		<p>Descriptions here.</p>
		</div>
	)
}