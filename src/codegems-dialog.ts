import { customElement, html, LitElement, property } from "lit-element";

// styles
import { dialogStyle } from "./styles/styles";

@customElement("codegems-dialog")
export class CodegemsDialogElement extends LitElement {
	@property()
	config: any;

	static styles = dialogStyle;

	render() {
		return html`
			<codegems-dialog-overlay>
				<slot></slot>
			</codegems-dialog-overlay>
		`;
	}

	createRenderRoot() {
		// return null; // document.body;
		return document.body;
	}
}
