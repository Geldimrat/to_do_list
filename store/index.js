export const state = () => {
    return {
      showCard: false,
    };
  };
  
  export const mutations = {
    changeShowReg(state, payload) {
      state.showCard = payload.showState;
    },
  };
  
  export const actions = {
    showReg(context) {
      context.commit("changeShowReg", { showState: true });
    },
    dontShow(context) {
      context.commit("changeShowReg", { showState: false });
    },
  };
  
  export const getters = {
    showReg(state) {
      return state.showCard;
    },
  };