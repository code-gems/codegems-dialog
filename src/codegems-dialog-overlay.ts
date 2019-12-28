import { customElement, html, LitElement, property } from "lit-element";

// styles
import { dialogOverlayStyle } from "./styles/styles";

@customElement("codegems-dialog-overlay")
export class CodegemsDialogOverlayElement extends LitElement {
	@property()
	xxx: any;

	static styles = dialogOverlayStyle;

	render() {
		return html`
			<div class="wrapper"></div>
		`;
	}

	firstUpdated() {
		const template = this.querySelector("template");
		console.log("%c template", "font-size: 24px; color: green;", template);
		console.log("xxx", this.xxx);

		document.body.appendChild(template.content);
	}
}
