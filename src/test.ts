class MyCounter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const template = this.querySelector("template");
		document.body.appendChild(template.content);
	}

	get xxx() {
		return parseInt(this.getAttribute("xxx"));
	}

	set xxx(newValue) {
		console.log("%c [TEST] SET VALUE", "font-size: 24px; color: green;");
		this.setAttribute("xxx", newValue + "");
	}
}

window.customElements.define("my-counter", MyCounter);
