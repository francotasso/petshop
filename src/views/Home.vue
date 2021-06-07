<template>
  <main-layout>
    <!-- <section class="hero hero-static-image">
      <div class="container">
        <div class="row align-items-center">
          <div class="col col-md-6">
            <div class="slide-title">
              <h2>
                Grow Your Business With 
                <span>O</span>ULE
                <span>.</span>
              </h2>
            </div>
            <div class="slide-subtitle">
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              </p>
            </div>
            <div class="btns">
              <router-link class="btn-rounded btn-learnmore" to="#">
                Learn More
              </router-link>
            </div>
          </div>
          <div class="col col-md-6 d-md-block d-none">
            <b-img src="https://hellloexpert.com/tf/html/oule-live/assets/images/slider/hero-image-1.png" fluid alt="Hero image"></b-img>
          </div>
        </div>
      </div>
    </section> -->
    <section class="features-section section-padding mt-4">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="features-grids clearfix">
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/pelota-que-chilla.jpeg')" width="300" fluid alt="Pelota que chilla"></b-img>
                  </div>
                </div>
                <h3 class="mt-5">Pelota que chilla</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 5.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/juguete-peluche-pajaro-chico.jpeg')" width="200" fluid alt="Juguete pelucho pájaro chico"></b-img>
                  </div>
                </div>
                <h3>Juguete pelucho pájaro chico</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 7.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/soga-caucho-color-pastel.jpeg')" width="75" fluid alt="Soga caucho color pastel"></b-img>
                  </div>
                </div>
                <h3>Soga caucho color pastel</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 10.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/pelota-lero-lero.jpeg')" width="200" fluid alt="Pelota lero lero"></b-img>
                  </div>
                </div>
                <h3>Pelota 'Lero Lero'</h3>
                <p>Con Sonido y dispensador de Croquetas</p>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div class="more">Chico: S/ 8.00</div>
                <div class="more">Grande: S/ 12.00</div>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/peluches-carnes-y-panes.jpeg')" width="300" fluid alt="Peluches carnes y panes"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 2.5rem;">Peluches carnes y panes</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 12.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/juguete-palito-raton.jpeg')" width="124" fluid alt="Juguete palito ratón"></b-img>
                  </div>
                </div>
                <h3>Juguete palito ratón</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 8.00</span>
              </div>
              <!-- <div class="grid">
                <div>
                  <div class="shape">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"></path>
                    </svg>
                  </div>
                </div>
                <h3>Keyword Research</h3>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
                <router-link to="#" class="more">See more</router-link>
              </div> -->
            </div>
            <div class="features-grids clearfix">
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/juguete-palito-de-gato.jpeg')" width="100" fluid alt="Juguete palito de gato"></b-img>
                  </div>
                </div>
                <h3>Juguete palito de gato</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 7.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/juguete-para-gato-madeja.jpeg')" width="300" fluid alt="Juguete para gato madeja"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 5.8rem">Juguete para gato madeja</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 8.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/aranador-con-sonido.jpeg')" width="160" fluid alt="Arañador con sonido"></b-img>
                  </div>
                </div>
                <h3>Arañador con sonido</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 26.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/llavero-6-bolsitas-higienicas.jpeg')" width="120" fluid alt="Llavero 6 bolsitas higiénicas"></b-img>
                  </div>
                </div>
                <h3>Llavero 6 bolsitas higiénicas</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 20.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/set-grooming.jpeg')" width="250" fluid alt="Set grooming"></b-img>
                  </div>
                </div>
                <h3>Set grooming</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 20.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/platos-redondos.jpeg')" width="300" fluid alt="Platos redondos"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 6rem">Platos redondos</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div class="more">Chico: S/ 4.00</div>
                <div class="more">Mediano: S/ 5.00</div>
                <div class="more">Grande: S/ 6.00</div>
              </div>
            </div>
            <div class="features-grids clearfix">
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/baby-pet.jpeg')" width="300" fluid alt="Baby pet"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 4.5rem">Baby pet</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div class="more">Chico: S/ 4.00</div>
                <div class="more">Grande: S/ 5.00</div>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/camas-para-mascotas.jpeg')" width="175" fluid alt="Camas para mascotas"></b-img>
                  </div>
                </div>
                <h3>Camas para mascotas</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div>
                  <span class="more">Cero: S/ 24.00 | </span>
                  <span class="more">Uno: S/ 30.00</span>
                </div>
                <div>
                  <span class="more">Dos: S/ 40.00 | </span>
                  <span class="more">Tres: S/ 50.00</span>
                </div>
                <div>
                  <span class="more">Cuatro: S/ 66.00 | </span>
                  <span class="more">Cinco: S/ 76.00</span>
                </div>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/plato-para-gatos.jpeg')" width="300" fluid alt="Plato para gatos"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 5.7rem">Plato para gatos</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 6.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/cepillo-doble-remachado.jpeg')" width="160" fluid alt="Cepillo doble remachado"></b-img>
                  </div>
                </div>
                <h3>Cepillo doble remachado</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 10.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/raqueta-plastica.jpeg')" width="300" fluid alt="Raqueta plástica"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 9rem">Raqueta plástica</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div class="more">Chico: S/ 5.00</div>
                <div class="more">Mediano: S/ 7.00</div>
                <div class="more">Grande: S/ 10.00</div>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/pollos-chillones.jpeg')" width="200" fluid alt="Pollos chillones"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 2.1rem">Pollos chillones</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <div class="more">Chico: S/ 12.00</div>
                <div class="more">Grande: S/ 14.00</div>
              </div>
            </div>
            <div class="features-grids clearfix">
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/palas-comerciales.jpeg')" width="300" fluid alt="Palas comerciales"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 7.4rem">Palas comerciales</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 4.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/juguete-soga-nudo.jpeg')" width="300" fluid alt="Juguete soga nudo"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 2.1rem">Juguete soga nudo</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 6.50</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/plato-armable-mediano.jpeg')" width="300" fluid alt="Plato armable mediano"></b-img>
                  </div>
                </div>
                <h3 style="margin-top: 5.1rem">Plato armable mediano</h3>
                <!-- <p>
                  It is a long established fact that a reader will be distracted by the readable content
                </p> -->
                <span class="more">S/ 7.00</span>
              </div>
              <div class="grid">
                <div>
                  <div class="mb-3">
                    <!-- <i class="fi flaticon-bar-chart"></i> -->
                    <b-img :src="require('@/assets/products/mancuerna-caucho.jpeg')" width="175" fluid alt="Mancuerna caucho"></b-img>
                  </div>
                </div>
                <h3>Mancuerna caucho</h3>
                <p>
                  Con dispensador de comida
                </p>
                <span class="more">S/ 7.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>