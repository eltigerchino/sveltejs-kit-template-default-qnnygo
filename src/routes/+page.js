class CustomClass {}

export function load({ data }) {
	data.b = new CustomClass();
	return data;
}
