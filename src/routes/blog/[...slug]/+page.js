import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	
	const res = await fetch(`/docs/${params.slug}.md`);

	if (!res.ok) {
		error(404, 'Not Found')
	}

	const str = (await res.text()).toString()

	return {
		reponse: str
	};
}