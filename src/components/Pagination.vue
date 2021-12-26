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
        <input @keyup.up="$event.target.blur()"
               @blur="fetchRepos()"
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
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
  setup() {
    const store = useStore();

    let inputError = ref(false);

    const page = computed({
      get: () => parseInt(store.state.currentPage, 10),
      set: (value) => {
        store.commit('setCurrentPage', value);
      },
    });

    const searchTerm = computed(() => store.state.searchTerm);
    const repositories = computed(() => store.state.repositories);
    const perPage = computed(() => store.state.perPage);
    const totalPages = computed(() => Math.round(repositories.value?.total_count / perPage.value));
    const isInvalidPageInput = computed(() => !page.value || page.value < 1
      || page.value > totalPages.value);
    const previousButtonDisabled = computed(() => !page.value || page.value <= 1);
    const nextButtonDisabled = computed(() => page.value >= totalPages.value);

    const validateInput = computed(() => {
      if (isInvalidPageInput.value) {
        inputError = true;
        return `Please enter a number between 1 and ${totalPages.value}`;
      }
      inputError = false;
      return null;
    });

    function fetchRepos() {
      if (isInvalidPageInput.value) {
        return null;
      }
      return store.dispatch('fetchRepositories', {
        searchTerm: searchTerm.value,
        page: page.value,
      });
    }

    function nextPage() {
      page.value += 1;
      fetchRepos();
    }

    function previousPage() {
      page.value += 1;
      fetchRepos();
    }

    function firstPage() {
      page.value = 1;
      fetchRepos();
    }

    function lastPage() {
      page.value = totalPages.value;
      fetchRepos();
    }

    return {
      inputError,
      page,
      totalPages,
      validateInput,
      previousButtonDisabled,
      nextButtonDisabled,
      fetchRepos,
      nextPage,
      previousPage,
      firstPage,
      lastPage,
    };
  },
};
</script>
