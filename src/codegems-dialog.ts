import { customElement, html, LitElement, property } from "lit-element";

// styles
import { dialogStyle } from "./styles/styles";

// @customElement("codegems-dialog")
export class CodegemsDialogElement extends HTMLElement {
	// @property()
	// config: any;
	// @property()
	// opened: boolean;

	body: HTMLElement;

	static styles = dialogStyle;

	constructor() {
		super();
		this.body = document.body;
		// this.
	}

	render() {
		return `
			<slot></slot>
		`;
	}

	firstUpdated() {
		// let content = this.shadowRoot.querySelector("slot");
		// console.log("!!! content", content);
		// this.body.appendChild(content);
	}

	connectedCallback() {
		// const shadowRoot = this.attachShadow({ mode: "open" });
		// const template = document.createElement("div");
		// template.innerHTML = `Overlay`;
		// this.children.template.appendChild(this.firstElementChild);
		// get template
		// container.innerHTML = this.render();
		const template = this.querySelector("template");
		console.log("%c template", "font-size: 24px; color: green;", template);

		// shadowRoot.appendChild(container);
		// this.body.appendChild(this);
		this.body.appendChild(template.content);
	}

	// updated(changedProps: Map<string, any>) {
	// 	console.log("updated", changedProps);
	// 	if (changedProps.has("opened") && this.opened) {
	// 		console.log("!!! show");

	// 		let dialogOverlay = document.createElement("codegems-dialog-overlay");
	// 		let content = this.shadowRoot.querySelector("slot");
	// 		console.log("!!! content", content);
	// 		dialogOverlay.appendChild(content);
	// 		console.log("dialogOverlay", dialogOverlay);
	// 		this.body.appendChild(dialogOverlay);
	// 	}
	// }
}
window.customElements.define("codegems-dialog", CodegemsDialogElement);
