import { createSlice } from '@reduxjs/toolkit';

const pillarSlice = createSlice({
  name: 'pillar',

  initialState: {
    pillar: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
      pageSize: 10,
    },

    pillarWithPrograms: {
      docs: [],
      page: 1,
      pages: 1,
      docsCount: 0,
      pageSize: 10,
    },
  },

  reducers: {
    // /pillar
    setPillarStats(state, action) {
      const { docs, docsCount, page, pages, pageSize } = action.payload;

      state.pillar.docs = docs;
      state.pillar.docsCount = docsCount;
      state.pillar.page = page;
      state.pillar.pages = pages;
      state.pillar.pageSize = pageSize;
    },

setPillarWithPrograms(state, action) {
  const { docs, docsCount, page, pages, pageSize } = action.payload;

  if (page === 1) {
    state.pillarWithPrograms.docs = docs;
  } else {
    state.pillarWithPrograms.docs = [...state.pillarWithPrograms.docs, ...docs];
  }

  state.pillarWithPrograms.docsCount = docsCount;
  state.pillarWithPrograms.page = page;
  state.pillarWithPrograms.pages = pages;
  state.pillarWithPrograms.pageSize = pageSize;
},
  },
});

export const {
  setPillarStats,
  setPillarWithPrograms,
} = pillarSlice.actions;

export default pillarSlice.reducer;
