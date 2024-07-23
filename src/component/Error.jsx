import React from "react";

function ErrorComponent({ errormsg }) {
	return (
		<>
			<p style={{ fontSize: 100 }}>😴</p>
			<p style={{ fontWeight: "bold", fontSize: 40 }}>Ooopps</p>
			<p>{errormsg}</p>
		</>
	);
}

export default ErrorComponent;
