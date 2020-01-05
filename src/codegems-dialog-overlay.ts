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

	connectedCallback() {
		super.connectedCallback();
	}

	firstUpdated() {
		console.log("%c [OVERLAY] firstUpdated", "font-size: 24px; color: green;");
		const template = this.querySelector("template");
		console.log("%c [OVERLAY] template", "font-size: 24px; color: green;", template);
		console.log("%c [OVERLAY] property", "font-size: 24px; color: green;", this.xxx);

		document.body.appendChild(template.content);
	}

	updated(changedProps: Map<string, any>) {
		console.log("%c [OVERLAY] UPDATED", "font-size: 24px; color: green;", changedProps);
	}
}
