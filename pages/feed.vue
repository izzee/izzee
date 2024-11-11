<template>
  <main>
    <Nav/>
    <div class="main-content">
      <div class="feed">

        <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
        <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
        <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
        <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
        <div class="post">
          <div class="date">11.31.24</div>
          <div class="title">welcome to my new site!</div>
        </div>
      </div>

      <div class="links">
        <a href="">rss link</a>
        <form class="feed-form" name="feed" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="feed" />
          <input type="email" name="email" placeholder="get email updates">
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .main-content {
    background-color: $lightpurple;
    border-color: $lightpurple;
    padding: 0;
    gap: 16px;
    display: flex;
    height: 100%;
    flex: 1;
    overflow: scroll;
  }

  .feed {
  }

  .post {
    flex-shrink: 0;
    height: 32px;
    top: 0;
    background-color: $lightestpurple;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 64px;
    &:nth-child(even) {
      padding: 48px 64px;
      background-color: $lightpurple;
    }
    font-size:32px;
    font-weight: 500;
    color: $blue;

    &:hover {
    }
  }

  .links {
    flex: 1;
    background-color: $lightpurple;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    font-size: 24px;
    gap: 16px;

    form {
      flex-grow: 0;
    }
    
    a,
    input {
      flex-grow: 0;
      background-color: $lightestpurple;
      font-size: 24px;
      line-height: 2;
      padding: 8px 32px;
      font-weight: 500;
      color: $blue;
      border: 0;
    }
  }
</style>