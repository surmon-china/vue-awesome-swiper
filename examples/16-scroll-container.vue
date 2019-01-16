<template>
  <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Scroll Container</span>
        <span>（</span>
        <span>内容滚动 / 可拖动</span>
        <span>）</span>
      </div>
      <md-button
        class="md-icon-button"
        target="_blank"
        href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/16-scroll-container.vue"
      >
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide class="text">
          <div class="content">
            <h4 class="title">
              乌合之众
            </h4>
            <p>回答这个问题之前，我想我们应该首先定义如何判断一本书存不存在偏见。我觉得“一本书是否存在偏见”并不在于他所提出的观点本身是否荒诞或者离经叛道，而在于他得出结论的过程是否科学，是否存在缺乏推敲的主观臆断。如果结论拥有完整严谨的推导过程，那么即使答案再令人瞠目结舌，我们也无法说他存在着偏见；反过来说，如果一本书里的论据没有任何可信的来源，结论也是无本之木，即使他的观点让人感觉“好像真是那么回事呀”，那么这套理论也很难摆脱主观思维的限制。</p>
            <p>以上是典型的理工思维。</p>
            <p>
              我从书架上找到了《乌合之众》戴光年的译本，随便翻开了几页：
            </p>
            <blockquote>
              “又比如在亚洲一些野蛮人的部落中 流传着这样的风俗：当他们将骁勇善战的对手击败后，往往会吃下这个人的心脏，认为这样就可以得到他的全部力量和勇气。”（P61）
              “毫不客气的说，在十个人里面，就有九个人在几年里把他们的时间和努力浪费掉了；而且可以说，这是非常重要的，甚至是决定性的几年。他们中间有一半甚至三分之二的人，是为了考试而活着，然后被残酷地淘汰掉。”（P86）
              “就历史而言，尤其是文学和艺术的历史，实际上只是再重复那些毫无意义的东西。每个人都不想这样做，但是这些历史所具有的名望压迫着他们，每个人最后都会重复他从学校里学到的东西，直到这些东西变成了一些再没有人敢说三道四的称号和事物。”（P114）
            </blockquote>
            <p>在这本书里我们经常可以看到勒庞把各种小说桥段，英雄传说和坊间流言用具有主观性的叙述方式表达出来，用以佐证他的论点，论证的逻辑方式也常常语焉不详——我可以接受这种书籍成为富有趣味性的人文读物，但是说这是一本研究群体心理学方面的重要著作，似乎令人难以接受。如果说《乌合之众》不存在偏见，我会觉得非常奇怪。</p>
            <br>
            <p>不过我们可以换一个角度看待勒庞和他的《乌合之众》。对于一部具有重要意义的作品来说，严谨和逻辑不应该作为其主要价值评判标准。我们应该关注的是它发现了什么，创造了什么。一部伟大的作品之所以伟大，并不是因为他严格的遵守着范式，而在于那些闪耀着的具有鲜明色调的个人智慧的光芒——这些东西通常是无法通过逻辑去解释的。从这个层面上说，我们其实并不需要执着于这本书是否存在着偏见，只需要让我们觉得“好像真是那么回事呀”就已经足够了。我没法说出这本书之于心理学的具体意义，但只说他带给我的东西，我觉得已经足够丰富。</p>
            <br>
            <p>而上面这些，似乎又是一种人文思维了。</p>
          </div>
        </swiper-slide>
        <div
          class="swiper-scrollbar"
          slot="scrollbar"
        />
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar'
          },
          mousewheel: true
        }
      }
    }
  }
</script>

<style lang="scss">
  .swiper-slide.text {
    font-size: 18px!important;
    text-align: left!important;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;

    > .content {

      > .title {
        margin: 0;
        text-align: center;
        margin-bottom: .75em;
      }

      > p,
      blockquote {
        line-height: 2;
        text-indent: 2em;
      }

      blockquote {
        background-color: #ddd;
        margin-left: 2em;
      }
    }
  }
</style>
