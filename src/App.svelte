<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main class="container">
  <h1><a href="/">Feedbackify</a></h1>
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
  <Footer />
</main>

<style>
  h1 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 40px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
</style>
