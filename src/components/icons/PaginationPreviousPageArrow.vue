<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <defs>
      <polygon
        id="left-a"
        points="10.032 14 11.448 12.608 6.84 8 11.448 3.416 10.032 2 4.032 8"
      />
    </defs>
    <g fill="none">
      <mask
        id="left-b"
        fill="#fff"
      >
        <use xlink:href="#left-a" />
      </mask>
      <use
        fill="#000"
        fill-rule="nonzero"
        xlink:href="#left-a"
      />
      <rect
        class="c-Icon-pagination-arrow "
        width="16"
        height="16"
        fill="#717471"
        mask="url(#left-b)"
      />
    </g>
  </svg>
</template>
