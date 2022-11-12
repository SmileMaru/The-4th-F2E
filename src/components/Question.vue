<template>
  <section class="q_section_container">
    <div class="q_wrapper">
      <div class="q_content_box">
        <h2 class="q_heading">Q&A</h2>
        <div class="tabs_flow_box">
          <ul class="tabs">
            <li>常見問題</li>
            <li>UI設計師常見問題</li>
            <li>前端工程師常見問題</li>
            <li>團體組常見問題</li>
        </ul>
        </div>
      </div>

      <!-- 常見問題 第一個分頁 -->
      <div class="q_common_container">
        <div class="q_content">
          <div class="q_box">
            <h4 class="q_qty">Q1</h4>
            <div class="q_accordion">
              <h4>如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡?</h4>
              <p>
                可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q2</h4>
            <div class="q_accordion">
              <h4>大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品</h4>
              <p>
                這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q3</h4>
            <div class="q_accordion">
              <h4>
                我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻?
              </h4>
              <p>
                主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q4</h4>
            <div class="q_accordion">
              <h4>我已經寫到一半了，但時間快來不及，可以先投稿嗎?</h4>
              <p>可以，有投稿表示你還會持續努力在這次活動上。</p>
            </div>
          </div>
        </div>
        <!-- 第二個分頁 ui 設計師常見問題 -->
        <div class="q_content">
          <div class="q_box">
            <h4 class="q_qty">Q1</h4>
            <div class="q_accordion">
              <h4>到時投稿到平台是提供什麼呢?我也不像是工程師可以有codepen 上傳。</h4>
              <p>
                其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD
                便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q2</h4>
            <div class="q_accordion">
              <h4>
                投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web
                介面，那授權部分可以設定嗎?
              </h4>
              <p>
                會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY
                等授權，以保障您的 UI 作品權益。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q3</h4>
            <div class="q_accordion">
              <h4>一定要上傳「線上標示文件」嗎?</h4>
              <p>
                是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用
                Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間
                (Dropbox、Google Drive)。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q4</h4>
            <div class="q_accordion">
              <h4>不能使用 PS、Illustrator 設計嗎?</h4>
              <p>
                只要您能找到 PS 或 Illustrator
                產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q5</h4>
            <div class="q_accordion">
              <h4>當每週一題目出來後，我有一些設計進度也可以先投稿嗎?</h4>
              <p>
                可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過
                FB 社團來溝通進度即可。
              </p>
            </div>
          </div>
        </div>
        <!-- 第三個分頁 前端工程師常見問題 -->
        <div class="q_content">
          <div class="q_box">
            <h4 class="q_qty">Q1</h4>
            <div class="q_accordion">
              <h4>我可以不依照設計稿，自己做版面嗎?因為我想多練習 JS/後端</h4>
              <p>
                可以，The F2E
                活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS
                也可以用框架，例如 Bootstrap。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q2</h4>
            <div class="q_accordion">
              <h4>前端介面一定要長得一模一樣嗎?</h4>
              <p>不用，依照自己的想法來開發也可以</p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q3</h4>
            <div class="q_accordion">
              <h4>有現成的網頁靜態頁面嗎?我想只練習 JS/後端就好?</h4>
              <p>
                這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS
                並非是自己習慣的 Layout 反而會更花時間。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q4</h4>
            <div class="q_accordion">
              <h4>那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎?</h4>
              <p>
                可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
              </p>
            </div>
          </div>
        </div>
        <!-- 第四個分頁 團體組常見問題 -->
        <div class="q_content">
          <div class="q_box">
            <h4 class="q_qty">Q1</h4>
            <div class="q_accordion">
              <h4>請問團體組最多幾人?</h4>
              <p>最多 4 人，投稿作品時請派一位組長來投稿即可。</p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q2</h4>
            <div class="q_accordion">
              <h4>我對獎項有興趣，可以只做第三道主題就好嗎?</h4>
              <p>
                可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q3</h4>
            <div class="q_accordion">
              <h4>那團體組第三道主題最晚投稿期限為?</h4>
              <p>
                團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12
                點，前端最晚投稿期限為 11/28(一) 中午 12 點。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q4</h4>
            <div class="q_accordion">
              <h4>我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎?</h4>
              <p>
                您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web
                瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q5</h4>
            <div class="q_accordion">
              <h4>
                請問除了前端開發、UI 設計外，還能做其他加值應用嗎?例如後端動態應用整合?
              </h4>
              <p>
                可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個
                API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部
                API 也是可以的。
              </p>
            </div>
          </div>
          <div class="q_box">
            <h4 class="q_qty">Q6</h4>
            <div class="q_accordion">
              <h4>團體組的 UI 設計稿，可以讓「個人組-前端工程師」組別採用嗎?</h4>
              <p>不能，預設是不能讓『個人組-前端工程師』採用。</p>
            </div>
          </div>
        </div>
        <!-- rwd 會出現的底部選項 -->
        
      </div>
    </div>
    <div class="btn_box">
      <a href="https://2022.thef2e.com/" target="blank" class="btn_signup">立即報名</a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "/src/assets/scss/question.scss";
@import "/src/assets/scss/base/style.scss";
</style>
<script>
export default {
  mounted() {
    // 選中class為tabs下的li元素，因為有多個所以存為陣列
    const tabs = document.querySelectorAll(".tabs li");
    // 選中class為content的元素，因為有多個所以存為陣列
    const contents = document.querySelectorAll(".q_content");

    // 將li元素丟進forEach執行
    tabs.forEach((tab, index) => {
      // 監聽每個li的click事件
      tab.addEventListener("click", () => {
        // 將li元素丟進forEach執行，移除名為active的class
        tabs.forEach((tab) => tab.classList.remove("active"));
        // 將觸發點擊事件的li加上active的class
        tab.classList.add("active");

        // 將content元素丟進forEach執行，移除名為active的class
        contents.forEach((content) => content.classList.remove("active"));
        // 將指定index的content元素，加上active的class
        contents[index].classList.add("active");
      });
    });

    // 載入頁面自動執行，第一個li的點擊
    tabs[0].click();
  },
};
</script>
