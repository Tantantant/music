export default {
	state: {
		newDisc: []
	},

	actions: {},

	mutations: {
		NEWDISC_SONGINFO(state, { newDiscList, id }) {
			let newDisc = newDiscList
				.map((disc) => {
					if (disc.id === id) {
						return {
							picUrl: disc.picUrl,
							name: disc.name,
							artistName: disc.artist.name
						};
					}
					return;
				})
				.filter((disc) => disc);
			state.newDisc = newDisc;
		}
	},

	getters: {}
};
