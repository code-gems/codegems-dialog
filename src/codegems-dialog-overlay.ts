import { customElement, html, LitElement, property } from "lit-element";

// styles
import { dialogStyle } from "./styles/styles";

@customElement("codegems-dialog-overlay")
export class CodegemsDialogOverlayElement extends LitElement {
	static styles = dialogStyle;

	render() {
		return html`
			<div class="wrapper">
				<slot></slot>
			</div>
		`;
	}
}
