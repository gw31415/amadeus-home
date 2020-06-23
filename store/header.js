export const state = () => ({
  title: "Amadeus_vn",
  color: "white",
  dark: false
})
export const mutations = {
  setTitle(state, title) {
    state.title = title
  },
  setColor(state, title) {
    state.color = title
  },
  setDark(state) {
    state.dark = true
  },
  setLight(state) {
    state.dark = false
  }
}
