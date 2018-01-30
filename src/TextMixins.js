export const TextMixins = {
  computed: {
    reversedText() {
      return this.text.split("").reverse().join("");
    },

    textWithLength() {
      let cont = this.text.split("").length;
      return this.text + " (" + cont + ")";
    }
  }
};
