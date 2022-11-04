<template>
  <div class="list_card">
    <div class="content">
      <div class="title_card">
        <p class="name">Work</p>
        <v-progress-linear
          value="50"
          color="#4379FF"
          style="
            border-radius: 20px;
            width: 60px;
            height: 7px;
            background: white;
            border: 0.5px solid rgba(0, 0, 0, 0.17);
            border-radius: 10px;
            margin: 6px 0;
          "
        ></v-progress-linear>
        <p class="info"><span>12</span> task-<span>4</span> completed</p>
      </div>
      <div class="action">
        <div class="del">
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
        </div>
        <div class="add">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="#EEEEFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="#EEEEFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
