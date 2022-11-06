<template>
  <div class="task_card">
    <div class="contents">
      <div class="color"></div>
      <div class="title_cards">
        <p class="name_task">Create To Do list</p>
        <h6 class="need" style="font-size: 10px">Need to learn</h6>
      </div>
      <div class="actions">
        <div class="delet">
          <button>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="25" rx="6" fill="#FFF4F4" />
              <path
                d="M5 8H20M11 11.75V15.5M14 11.75V15.5M6.5 8H18.5L17.315 18.665C17.2744 19.032 17.0998 19.3712 16.8247 19.6175C16.5496 19.8638 16.1933 20 15.824 20H9.176C8.80673 20 8.45042 19.8638 8.17531 19.6175C7.9002 19.3712 7.72562 19.032 7.685 18.665L6.5 8ZM9.00875 5.86025C9.13006 5.60298 9.32203 5.3855 9.56225 5.23318C9.80248 5.08087 10.0811 5 10.3655 5H14.6345C14.9191 4.99985 15.1978 5.08066 15.4382 5.23298C15.6785 5.38531 15.8706 5.60286 15.992 5.86025L17 8H8L9.00875 5.86025Z"
                stroke="#FF2929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>