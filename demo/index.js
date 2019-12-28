import { render, html } from "lit-html";

const dialogMessage = () => {
	alert("ok");
};

class demoDialogContent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });

		const template = document.createElement("template");
		template.innerHTML = `<button>Sup?</button>`;

		this.shadowRoot.appendChild(template.content.cloneNode(true));
		const button = this.shadowRoot.querySelector("button");
		button.addEventListener("click", this.handleClick);
	}

	handleClick(e) {
		alert("Sup?");
	}

	connectedCallback() {}
}
window.customElements.define("demo-dialog-content", demoDialogContent);

render(
	html`
		<style>
			.small {
				display: none;
				overflow: hidden;
				width: 100px;
				height: 100px;
			}
		</style>
		<div class="small">
			<codegems-dialog .opened="${true}">
				<template>
					asdsad
					<demo-dialog-content></demo-dialog-content>
				</template>
			</codegems-dialog>
			asdsad
			<codegems-dialog-overlay .xxx="${[{ x: 1 }]}">
				<template>
					codegems-dialog-overlay
					<button @click="${() => dialogMessage()}">CLICK ME</button>
					<demo-dialog-content></demo-dialog-content>
				</template>
			</codegems-dialog-overlay>
		</div>
	`,
	document.getElementById("demo")
);
