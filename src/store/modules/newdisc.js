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

			// let newDisc = newDiscList
			// 	.map((disc) => {
			// 		if (disc.id === id) {
			// 			return {
			// 				picUrl: disc.picUrl,
			// 				name: disc.name,
			// 				artistName: disc.artist.name
			// 			};
			// 		}
			// 		return;
			// 	})
			// 	.filter((disc) => disc);
		}
	},

	getters: {}
};
