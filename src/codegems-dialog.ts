class CodegemsDialogElement extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const template = this.querySelector("template");
		document.body.appendChild(template.content);
	}

	get xxx() {
		console.log("%c [DIALOG] GET XXX", "font-size: 24px; color: green;");
		return parseInt(this.getAttribute("xxx"));
	}

	set xxx(newValue) {
		console.log("%c [DIALOG] SET XXX", "font-size: 24px; color: green;");
		this.setAttribute("xxx", newValue + "");
	}
}

window.customElements.define("codegems-dialog", CodegemsDialogElement);
