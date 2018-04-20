export const elFadeUp = {
  data () {
    return {
      fadeTitle: false,
      fadeLine: false,
      intersectionTitleOptions: {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        thresholds: [1]
      },
      intersectionLineOptions: {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        thresholds: [1]
      }
    }
  },
  methods: {
    onWaypointTitle ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeTitle = true
      }
    },
    onWaypointLine ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.fadeLine = true
      }
    }
  }
}
