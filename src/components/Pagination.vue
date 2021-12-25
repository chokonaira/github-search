<template>
  <div class="pagination-control">
    <div class="pagination-wrapper">
      <button class="icons"
              @click="firstPage" :disabled="previousButtonDisabled">
        <PaginationFirstPageArrow/>
      </button>
      <button class="icons"
      @click="previousPage" :disabled="previousButtonDisabled">
        <PaginationPreviousPageArrow/>
      </button>
      <div class="pagination-counter">
        <input @keyup.enter="inputError ? $event.target.focus() : $event.target.blur()"
               @blur="inputError ? $event.target.focus() : fetchRepos()"
               :style="[inputError ? {border: '2px solid $red'} : null]"
               class="pagination-input"
               v-model.trim="page"
               type="number">
        <div class="of">of</div>
        <h5 class="total-page">{{totalPages}}</h5>
      </div>
      <button class="icons" @click="nextPage"
      :disabled="nextButtonDisabled">
        <PaginationNextPageArrow/>
      </button>
      <button class="icons" @click="lastPage"
      :disabled="nextButtonDisabled">
        <PaginationLastPageArrow/>
      </button>
    </div>
    <div class="pagination-error">{{validateInput}}</div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
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
  data() {
    return {
      page: null,
      inputError: false,
    };
  },
  mounted() {
    this.page = this.currentPage;
  },
  computed: {
    ...mapState(['isLoading', 'isRepositoriesFetched', 'searchTerm', 'isNotification', 'errors', 'repositories', 'currentPage', 'perPage']),
    validateInput() {
      if (this.isInvalidPageInput) {
        return `Please enter a number between 1 and ${this.totalPages}`;
      }
      return null;
    },
    previousButtonDisabled() {
      return this.page <= 1;
    },
    nextButtonDisabled() {
      return this.page >= this.totalPages;
    },
    totalPages() {
      return Math.round(this.repositories.total_count / this.perPage);
    },
    isInvalidPageInput() {
      return this.page < 1
      || this.page > this.totalPages;
    },
  },
  watch: {
    validateInput() {
      if (this.isInvalidPageInput) {
        this.inputError = true;
      } else {
        this.inputError = false;
      }
    },
  },
  methods: {
    ...mapActions(['fetchRepositories']),
    nextPage() {
      this.page += 1;
      this.fetchRepos();
    },
    previousPage() {
      this.page -= 1;
      this.fetchRepos();
    },
    firstPage() {
      this.page = 1;
      this.fetchRepos();
    },
    lastPage() {
      this.page = this.totalPages;
      this.fetchRepos();
    },
    fetchRepos() {
      this.fetchRepositories({
        searchTerm: this.searchTerm,
        page: this.page,
      });
    },
  },
};
</script>
