import Vue from 'vue';
import { _AppBody } from '../../components/_AppBody';

const Home = Vue.extend({

  render() {
    return (
      <section>
        <div class="Home">
          <_AppBody></_AppBody>
        </div>
      </section>
    )
  }

});

export { Home };