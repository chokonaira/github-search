<template>
  <div class="pagination-control">
    <div class="pagination-wrapper">
      <button class="icons"
              @click="firstPageEvent" :disabled="previousButtonDisabled">
        <PaginationFirstPageArrow/>
      </button>
      <button class="icons"
      @click="previousPageEvent" :disabled="previousButtonDisabled">
        <PaginationPreviousPageArrow/>
      </button>
      <div class="pagination-counter">
        <input @keyup.enter="inputError ? $event.target.focus() : $event.target.blur()"
               @blur="inputError ? $event.target.focus() : submitPageInput()"
               :style="[inputError ? {border: '2px solid $red'} : null]"
               class="pagination-input"
               v-model.trim="paginationInput"
               type="number">
        <div class="of">of</div>
        <div class="total-page">{{totalPages}}</div>
      </div>
      <button class="icons" @click="nextPageEvent"
      :disabled="nextButtonDisabled">
        <PaginationNextPageArrow/>
      </button>
      <button class="icons" @click="lastPageEvent"
      :disabled="nextButtonDisabled">
        <PaginationLastPageArrow/>
      </button>
    </div>
    <div class="pagination-error">{{validateInput}}</div>
  </div>
</template>
<script>
import PaginationFirstPageArrow from '@/components/icons/PaginationFirstPageArrow.vue';
import PaginationLastPageArrow from '@/components/icons/PaginationLastPageArrow.vue';
import PaginationPreviousPageArrow from '@/components/icons/PaginationPreviousPageArrow.vue';
import PaginationNextPageArrow from '@/components/icons/PaginationNextPageArrow.vue';

export default {
  components: {
    PaginationFirstPageArrow,
    PaginationLastPageArrow,
    PaginationPreviousPageArrow,
    PaginationNextPageArrow,
  },
  props: {
    targetPage: {
      type: Number,
      required: true,
    },
    totalRows: {
      type: Number,
      required: true,
    },
    per: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      paginationInput: null,
      inputError: false,
    };
  },
  mounted() {
    this.paginationInput = this.targetPage;
  },
  computed: {
    validateInput() {
      if (this.isInvalidInput) {
        return `Please enter a number between 1 and ${this.totalPages}`;
      }
      return null;
    },
    previousButtonDisabled() {
      return ((this.paginationInput || this.targetPage) <= 1);
    },
    nextButtonDisabled() {
      return ((this.paginationInput || this.targetPage) >= this.totalPages);
    },
    totalPages() {
      return Math.round(parseInt(this.totalRows / this.per, 10) - 1);
    },
    isInvalidInput() {
      return this.paginationInput < 1
      || this.paginationInput > this.totalPages;
    },
  },
  watch: {
    validateInput() {
      if (this.isInvalidInput) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    },
  },
  methods: {
    submitPageInput() {
      this.$emit('paginationInput', this.paginationInput);
    },
    nextPageEvent() {
      this.paginationInput += 1;
      this.$emit('nextPage', this.paginationInput);
    },
    previousPageEvent() {
      this.paginationInput -= 1;
      this.$emit('previousPage', this.paginationInput);
    },
    firstPageEvent() {
      this.paginationInput = 1;
      this.$emit('firstPage', this.paginationInput);
    },
    lastPageEvent() {
      this.paginationInput = this.totalPages;
      this.$emit('lastPage', this.paginationInput);
    },
  },
};
</script>
