// When the app is initializing, window.analytics doesn't exist yet, so we can't check whether it
// exists now. Instead, we check it on-demand.
const Analytics = {
  // This can't be an arrow function, lest it blow up when arrow functions stop getting transpiled;
  // arrow functions do not have their own `arguments`.
  track: function track () {
    if (window.analytics && window.analytics.track) {
      window.analytics.track.apply(window.analytics, arguments)
    }
  }
}

export default Analytics
