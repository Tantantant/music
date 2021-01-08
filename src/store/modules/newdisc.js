export default {
	state: {
		newDisc: {}
	},

	actions: {},

	mutations: {
		NEWDISC_SONGINFO(state, { newDiscList, id }) {
			const disc = newDiscList.find((disc) => disc.id === id);
			let newDisc = {
				picUrl: disc.picUrl,
				name: disc.name,
				artistName: disc.artist.name
			};

			state.newDisc = newDisc;
		}
	},

	getters: {}
};
