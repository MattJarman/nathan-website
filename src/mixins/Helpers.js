export default {
  methods: {
    clamp (number, min, max) {
      return number <= min ? min : number >= max ? max : number
    }
  }
}
