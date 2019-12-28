import { css } from "lit-element";

export const dialogStyle = css`
	:host {
		background-color: red;
	}
`;

export const dialogOverlayStyle = css`
	:host {
		display: none;
		background-color: blue;
	}

	:host(.show) {
		display: block;
	}
`;
