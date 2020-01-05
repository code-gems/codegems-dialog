import { render, html } from "lit-html";

const dialogMessage = () => {
	console.log(
		"%c [dialogMessage from inside of tempalte] sup?",
		"fontt-size: 24px; color: blue;"
	);
};

const changeProp = () => {
	let dialog = document.querySelector("codegems-dialog");
	let dialogOverlay = document.querySelector("codegems-dialog-overlay");

	console.log(dialog);
	console.log(dialogOverlay);
	// dialog.setAttribute('xxx', '');
	dialog.opened = false;
	dialog.xxx = {};
	dialogOverlay.xxx = {};
};

const getProps = () => {
	let dialog = document.querySelector("codegems-dialog");
	let dialogOverlay = document.querySelector("codegems-dialog-overlay");

	console.log(dialog);
	console.log(dialogOverlay);
	// dialog.setAttribute('xxx', '');
	dialog.opened = false;
	dialog.xxx = {};
	dialogOverlay.xxx = {};
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
		console.log("%c [demoDialogContent] sup?", "fontt-size: 24px; color: green;");
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
			<codegems-dialog>
				<template>
					asdsad
					<demo-dialog-content></demo-dialog-content>
				</template>
			</codegems-dialog>

			can't see this text

			<codegems-dialog-overlay .xxx="${[{ x: 1 }]}">
				<template>
					codegems-dialog-overlay
					<button @click="${() => dialogMessage()}">CLICK ME</button>
					<demo-dialog-content></demo-dialog-content>
				</template>
			</codegems-dialog-overlay>
		</div>

		<button @click="${() => changeProp()}">CHANGE PROPS</button>
	`,
	document.getElementById("demo")
);
{
	/* <my-counter .xxx="${true}">
			<template>
				<style>
					button,
					span {
						font-size: 3rem;
						font-family: monospace;
						padding: 0 0.5rem;
					}

					button {
						background: pink;
						color: black;
						border: 0;
						border-radius: 6px;
						box-shadow: 0 0 5px rgba(173, 61, 85, 0.5);
					}

					button:active {
						background: #ad3d55;
						color: white;
					}
				</style>
				<div>
					<button type="button" increment>+</button>
					<span></span>
					<button type="button" decrement>-</button>
				</div>
			</template>
		</my-counter> */
}
