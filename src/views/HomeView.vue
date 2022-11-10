<template>
  <BackTop />
  <Header />
  <Banner />
  <WishTree />
  <Interactive />
  <Subject />
  <EventDes />
  <Reward />
  <Question />
  <FooterView />
</template>

<script>
import BackTop from '@/components/BackTop.vue';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import WishTree from '@/components/WishTree.vue';
import Interactive from '@/components/Interactive.vue';
import Subject from '@/components/Subject.vue';
import EventDes from '@/components/EventDes.vue';
import Reward from '@/components/Reward.vue';
import Question from '@/components/Question.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  components: {
    BackTop,
    Header,
    Banner,
    WishTree,
    Interactive,
    Subject,
    EventDes,
    Reward,
    Question,
    FooterView,
    WishTree
}
}
</script>
