function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-productov-productov-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productov/productov.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productov/productov.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductovProductovPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE ALIMENTOS REGION VALLE\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Registro del Alimento\n    </ion-label>\n  </ion-item>\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarNU()\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Nombre</ion-label>\n        <ion-input type=\"text\" name=\"nombreali\" [(ngModel)]=\"objeto.nombreali\" required pattern=\"[A-Za-z- -]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Tipo de Alimnento</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" [(ngModel)]=\"objeto.tipo\" name=\"tipo\" required>\n        <ion-select-option value=\"Verduras\">Verduras</ion-select-option>\n        <ion-select-option value=\"Frutas\">Frutas</ion-select-option>\n        <ion-select-option value=\"Legumbres\">Legumbres</ion-select-option>\n        <ion-select-option value=\"Tuberculos\">Tuberculos</ion-select-option>\n        <ion-select-option value=\"Grasas\">Grasas</ion-select-option>\n        <ion-select-option value=\"Huevos\">Huevos</ion-select-option>\n        <ion-select-option value=\"Carnes rojas y blancas\">Carnes rojas y blancas</ion-select-option>\n        <ion-select-option value=\"Cereales\">Cereales</ion-select-option>\n        <ion-select-option value=\"Lacteos\">Lacteos</ion-select-option>\n        <ion-select-option value=\"Frutos secos\">Frutos secos</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Unidad de Medida</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" [(ngModel)]=\"objeto.cantidad_pro\" name=\"cantidad_pro\" required>\n        <ion-select-option value=\"Kg\">Kg</ion-select-option>\n        <ion-select-option value=\"Lb\">Lb</ion-select-option>\n        <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n        <ion-select-option value=\"Lt\">Lt</ion-select-option>\n        <ion-select-option value=\"g\">g</ion-select-option>\n        <ion-select-option value=\"ml\">ml</ion-select-option>\n        <ion-select-option value=\"unidad\">unidad</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Minina</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_min\" [(ngModel)]=\"objeto.cantidad_min\" required>\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n        <ion-select-option value=\"11\">11</ion-select-option>\n        <ion-select-option value=\"12\">12</ion-select-option>\n        <ion-select-option value=\"13\">13</ion-select-option>\n        <ion-select-option value=\"14\">14</ion-select-option>\n        <ion-select-option value=\"15\">15</ion-select-option>\n        <ion-select-option value=\"16\">16</ion-select-option>\n        <ion-select-option value=\"17\">17</ion-select-option>\n        <ion-select-option value=\"18\">18</ion-select-option>\n        <ion-select-option value=\"19\">19</ion-select-option>\n        <ion-select-option value=\"20\">20</ion-select-option>\n        <ion-select-option value=\"21\">21</ion-select-option>\n        <ion-select-option value=\"22\">22</ion-select-option>\n        <ion-select-option value=\"23\">23</ion-select-option>\n        <ion-select-option value=\"24\">24</ion-select-option>\n        <ion-select-option value=\"25\">25</ion-select-option>\n        <ion-select-option value=\"26\">26</ion-select-option>\n        <ion-select-option value=\"27\">27</ion-select-option>\n        <ion-select-option value=\"27\">28</ion-select-option>\n        <ion-select-option value=\"29\">29</ion-select-option>\n        <ion-select-option value=\"30\">30</ion-select-option>\n        <ion-select-option value=\"31\">31</ion-select-option>\n        <ion-select-option value=\"32\">32</ion-select-option>\n        <ion-select-option value=\"33\">33</ion-select-option>\n        <ion-select-option value=\"34\">34</ion-select-option>\n        <ion-select-option value=\"35\">35</ion-select-option>\n        <ion-select-option value=\"36\">36</ion-select-option>\n        <ion-select-option value=\"37\">37</ion-select-option>\n        <ion-select-option value=\"38\">38</ion-select-option>\n        <ion-select-option value=\"39\">39</ion-select-option>\n        <ion-select-option value=\"40\">40</ion-select-option>\n        <ion-select-option value=\"41\">41</ion-select-option>\n        <ion-select-option value=\"42\">42</ion-select-option>\n        <ion-select-option value=\"43\">43</ion-select-option>\n        <ion-select-option value=\"44\">44</ion-select-option>\n        <ion-select-option value=\"45\">45</ion-select-option>\n        <ion-select-option value=\"46\">46</ion-select-option>\n        <ion-select-option value=\"47\">47</ion-select-option>\n        <ion-select-option value=\"48\">48</ion-select-option>\n        <ion-select-option value=\"49\">49</ion-select-option>\n        <ion-select-option value=\"50\">50</ion-select-option>\n        <ion-select-option value=\"51\">51</ion-select-option>\n        <ion-select-option value=\"52\">52</ion-select-option>\n        <ion-select-option value=\"53\">53</ion-select-option>\n        <ion-select-option value=\"54\">54</ion-select-option>\n        <ion-select-option value=\"55\">55</ion-select-option>\n        <ion-select-option value=\"56\">56</ion-select-option>\n        <ion-select-option value=\"57\">57</ion-select-option>\n        <ion-select-option value=\"58\">58</ion-select-option>\n        <ion-select-option value=\"59\">59</ion-select-option>\n        <ion-select-option value=\"60\">60</ion-select-option>\n        <ion-select-option value=\"61\">61</ion-select-option>\n        <ion-select-option value=\"62\">62</ion-select-option>\n        <ion-select-option value=\"63\">63</ion-select-option>\n        <ion-select-option value=\"64\">64</ion-select-option>\n        <ion-select-option value=\"65\">65</ion-select-option>\n        <ion-select-option value=\"66\">66</ion-select-option>\n        <ion-select-option value=\"67\">67</ion-select-option>\n        <ion-select-option value=\"68\">68</ion-select-option>\n        <ion-select-option value=\"69\">69</ion-select-option>\n        <ion-select-option value=\"70\">70</ion-select-option>\n        <ion-select-option value=\"71\">71</ion-select-option>\n        <ion-select-option value=\"72\">72</ion-select-option>\n        <ion-select-option value=\"73\">73</ion-select-option>\n        <ion-select-option value=\"74\">74</ion-select-option>\n        <ion-select-option value=\"75\">75</ion-select-option>\n        <ion-select-option value=\"76\">76</ion-select-option>\n        <ion-select-option value=\"77\">77</ion-select-option>\n        <ion-select-option value=\"78\">78</ion-select-option>\n        <ion-select-option value=\"79\">79</ion-select-option>\n        <ion-select-option value=\"80\">80</ion-select-option>\n        <ion-select-option value=\"81\">81</ion-select-option>\n        <ion-select-option value=\"82\">82</ion-select-option>\n        <ion-select-option value=\"83\">83</ion-select-option>\n        <ion-select-option value=\"84\">84</ion-select-option>\n        <ion-select-option value=\"85\">85</ion-select-option>\n        <ion-select-option value=\"86\">86</ion-select-option>\n        <ion-select-option value=\"87\">87</ion-select-option>\n        <ion-select-option value=\"88\">88</ion-select-option>\n        <ion-select-option value=\"89\">89</ion-select-option>\n        <ion-select-option value=\"90\">90</ion-select-option>\n        <ion-select-option value=\"91\">91</ion-select-option>\n        <ion-select-option value=\"92\">92</ion-select-option>\n        <ion-select-option value=\"93\">93</ion-select-option>\n        <ion-select-option value=\"94\">94</ion-select-option>\n        <ion-select-option value=\"95\">95</ion-select-option>\n        <ion-select-option value=\"96\">96</ion-select-option>\n        <ion-select-option value=\"97\">97</ion-select-option>\n        <ion-select-option value=\"98\">98</ion-select-option>\n        <ion-select-option value=\"99\">99</ion-select-option>\n        <ion-select-option value=\"100\">100</ion-select-option>\n        <ion-select-option value=\"110\">110</ion-select-option>\n        <ion-select-option value=\"120\">101</ion-select-option>\n        <ion-select-option value=\"130\">130</ion-select-option>\n        <ion-select-option value=\"140\">140</ion-select-option>\n        <ion-select-option value=\"150\">150</ion-select-option>\n        <ion-select-option value=\"160\">160</ion-select-option>\n        <ion-select-option value=\"170\">170</ion-select-option>\n        <ion-select-option value=\"180\">180</ion-select-option>\n        <ion-select-option value=\"190\">190</ion-select-option>\n      </ion-select>\n\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_min\" [(ngModel)]=\"objeto.cantidad_min\" required>\n        <ion-select-option value=\"0.1\">0.1</ion-select-option>\n        <ion-select-option value=\"0.2\">0.2</ion-select-option>\n        <ion-select-option value=\"0.3\">0.3</ion-select-option>\n        <ion-select-option value=\"0.4\">0.4</ion-select-option>\n        <ion-select-option value=\"0.5\">0.5</ion-select-option>\n        <ion-select-option value=\"0.6\">0.6</ion-select-option>\n        <ion-select-option value=\"0.7\">0.7</ion-select-option>\n        <ion-select-option value=\"0.8\">0.8</ion-select-option>\n        <ion-select-option value=\"0.9\">0.9</ion-select-option>\n        <ion-select-option value=\"0.10\">0.10</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Media</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_med\" [(ngModel)]=\"objeto.cantidad_med\" required>\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n        <ion-select-option value=\"11\">11</ion-select-option>\n        <ion-select-option value=\"12\">12</ion-select-option>\n        <ion-select-option value=\"13\">13</ion-select-option>\n        <ion-select-option value=\"14\">14</ion-select-option>\n        <ion-select-option value=\"15\">15</ion-select-option>\n        <ion-select-option value=\"16\">16</ion-select-option>\n        <ion-select-option value=\"17\">17</ion-select-option>\n        <ion-select-option value=\"18\">18</ion-select-option>\n        <ion-select-option value=\"19\">19</ion-select-option>\n        <ion-select-option value=\"20\">20</ion-select-option>\n        <ion-select-option value=\"21\">21</ion-select-option>\n        <ion-select-option value=\"22\">22</ion-select-option>\n        <ion-select-option value=\"23\">23</ion-select-option>\n        <ion-select-option value=\"24\">24</ion-select-option>\n        <ion-select-option value=\"25\">25</ion-select-option>\n        <ion-select-option value=\"26\">26</ion-select-option>\n        <ion-select-option value=\"27\">27</ion-select-option>\n        <ion-select-option value=\"27\">28</ion-select-option>\n        <ion-select-option value=\"29\">29</ion-select-option>\n        <ion-select-option value=\"30\">30</ion-select-option>\n        <ion-select-option value=\"31\">31</ion-select-option>\n        <ion-select-option value=\"32\">32</ion-select-option>\n        <ion-select-option value=\"33\">33</ion-select-option>\n        <ion-select-option value=\"34\">34</ion-select-option>\n        <ion-select-option value=\"35\">35</ion-select-option>\n        <ion-select-option value=\"36\">36</ion-select-option>\n        <ion-select-option value=\"37\">37</ion-select-option>\n        <ion-select-option value=\"38\">38</ion-select-option>\n        <ion-select-option value=\"39\">39</ion-select-option>\n        <ion-select-option value=\"40\">40</ion-select-option>\n        <ion-select-option value=\"41\">41</ion-select-option>\n        <ion-select-option value=\"42\">42</ion-select-option>\n        <ion-select-option value=\"43\">43</ion-select-option>\n        <ion-select-option value=\"44\">44</ion-select-option>\n        <ion-select-option value=\"45\">45</ion-select-option>\n        <ion-select-option value=\"46\">46</ion-select-option>\n        <ion-select-option value=\"47\">47</ion-select-option>\n        <ion-select-option value=\"48\">48</ion-select-option>\n        <ion-select-option value=\"49\">49</ion-select-option>\n        <ion-select-option value=\"50\">50</ion-select-option>\n        <ion-select-option value=\"51\">51</ion-select-option>\n        <ion-select-option value=\"52\">52</ion-select-option>\n        <ion-select-option value=\"53\">53</ion-select-option>\n        <ion-select-option value=\"54\">54</ion-select-option>\n        <ion-select-option value=\"55\">55</ion-select-option>\n        <ion-select-option value=\"56\">56</ion-select-option>\n        <ion-select-option value=\"57\">57</ion-select-option>\n        <ion-select-option value=\"58\">58</ion-select-option>\n        <ion-select-option value=\"59\">59</ion-select-option>\n        <ion-select-option value=\"60\">60</ion-select-option>\n        <ion-select-option value=\"61\">61</ion-select-option>\n        <ion-select-option value=\"62\">62</ion-select-option>\n        <ion-select-option value=\"63\">63</ion-select-option>\n        <ion-select-option value=\"64\">64</ion-select-option>\n        <ion-select-option value=\"65\">65</ion-select-option>\n        <ion-select-option value=\"66\">66</ion-select-option>\n        <ion-select-option value=\"67\">67</ion-select-option>\n        <ion-select-option value=\"68\">68</ion-select-option>\n        <ion-select-option value=\"69\">69</ion-select-option>\n        <ion-select-option value=\"70\">70</ion-select-option>\n        <ion-select-option value=\"71\">71</ion-select-option>\n        <ion-select-option value=\"72\">72</ion-select-option>\n        <ion-select-option value=\"73\">73</ion-select-option>\n        <ion-select-option value=\"74\">74</ion-select-option>\n        <ion-select-option value=\"75\">75</ion-select-option>\n        <ion-select-option value=\"76\">76</ion-select-option>\n        <ion-select-option value=\"77\">77</ion-select-option>\n        <ion-select-option value=\"78\">78</ion-select-option>\n        <ion-select-option value=\"79\">79</ion-select-option>\n        <ion-select-option value=\"80\">80</ion-select-option>\n        <ion-select-option value=\"81\">81</ion-select-option>\n        <ion-select-option value=\"82\">82</ion-select-option>\n        <ion-select-option value=\"83\">83</ion-select-option>\n        <ion-select-option value=\"84\">84</ion-select-option>\n        <ion-select-option value=\"85\">85</ion-select-option>\n        <ion-select-option value=\"86\">86</ion-select-option>\n        <ion-select-option value=\"87\">87</ion-select-option>\n        <ion-select-option value=\"88\">88</ion-select-option>\n        <ion-select-option value=\"89\">89</ion-select-option>\n        <ion-select-option value=\"90\">90</ion-select-option>\n        <ion-select-option value=\"91\">91</ion-select-option>\n        <ion-select-option value=\"92\">92</ion-select-option>\n        <ion-select-option value=\"93\">93</ion-select-option>\n        <ion-select-option value=\"94\">94</ion-select-option>\n        <ion-select-option value=\"95\">95</ion-select-option>\n        <ion-select-option value=\"96\">96</ion-select-option>\n        <ion-select-option value=\"97\">97</ion-select-option>\n        <ion-select-option value=\"98\">98</ion-select-option>\n        <ion-select-option value=\"99\">99</ion-select-option>\n        <ion-select-option value=\"100\">100</ion-select-option>\n        <ion-select-option value=\"110\">110</ion-select-option>\n        <ion-select-option value=\"120\">101</ion-select-option>\n        <ion-select-option value=\"130\">130</ion-select-option>\n        <ion-select-option value=\"140\">140</ion-select-option>\n        <ion-select-option value=\"150\">150</ion-select-option>\n        <ion-select-option value=\"160\">160</ion-select-option>\n        <ion-select-option value=\"170\">170</ion-select-option>\n        <ion-select-option value=\"180\">180</ion-select-option>\n        <ion-select-option value=\"190\">190</ion-select-option>\n      </ion-select>\n\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_med\" [(ngModel)]=\"objeto.cantidad_med\" required>\n        <ion-select-option value=\"0.1\">0.1</ion-select-option>\n        <ion-select-option value=\"0.2\">0.2</ion-select-option>\n        <ion-select-option value=\"0.3\">0.3</ion-select-option>\n        <ion-select-option value=\"0.4\">0.4</ion-select-option>\n        <ion-select-option value=\"0.5\">0.5</ion-select-option>\n        <ion-select-option value=\"0.6\">0.6</ion-select-option>\n        <ion-select-option value=\"0.7\">0.7</ion-select-option>\n        <ion-select-option value=\"0.8\">0.8</ion-select-option>\n        <ion-select-option value=\"0.9\">0.9</ion-select-option>\n        <ion-select-option value=\"0.10\">0.10</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Maxima</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_max\" [(ngModel)]=\"objeto.cantidad_max\" required>\n        <ion-select-option value=\"0\">0</ion-select-option>\n        <ion-select-option value=\"1\">1</ion-select-option>\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n        <ion-select-option value=\"11\">11</ion-select-option>\n        <ion-select-option value=\"12\">12</ion-select-option>\n        <ion-select-option value=\"13\">13</ion-select-option>\n        <ion-select-option value=\"14\">14</ion-select-option>\n        <ion-select-option value=\"15\">15</ion-select-option>\n        <ion-select-option value=\"16\">16</ion-select-option>\n        <ion-select-option value=\"17\">17</ion-select-option>\n        <ion-select-option value=\"18\">18</ion-select-option>\n        <ion-select-option value=\"19\">19</ion-select-option>\n        <ion-select-option value=\"20\">20</ion-select-option>\n        <ion-select-option value=\"21\">21</ion-select-option>\n        <ion-select-option value=\"22\">22</ion-select-option>\n        <ion-select-option value=\"23\">23</ion-select-option>\n        <ion-select-option value=\"24\">24</ion-select-option>\n        <ion-select-option value=\"25\">25</ion-select-option>\n        <ion-select-option value=\"26\">26</ion-select-option>\n        <ion-select-option value=\"27\">27</ion-select-option>\n        <ion-select-option value=\"27\">28</ion-select-option>\n        <ion-select-option value=\"29\">29</ion-select-option>\n        <ion-select-option value=\"30\">30</ion-select-option>\n        <ion-select-option value=\"31\">31</ion-select-option>\n        <ion-select-option value=\"32\">32</ion-select-option>\n        <ion-select-option value=\"33\">33</ion-select-option>\n        <ion-select-option value=\"34\">34</ion-select-option>\n        <ion-select-option value=\"35\">35</ion-select-option>\n        <ion-select-option value=\"36\">36</ion-select-option>\n        <ion-select-option value=\"37\">37</ion-select-option>\n        <ion-select-option value=\"38\">38</ion-select-option>\n        <ion-select-option value=\"39\">39</ion-select-option>\n        <ion-select-option value=\"40\">40</ion-select-option>\n        <ion-select-option value=\"41\">41</ion-select-option>\n        <ion-select-option value=\"42\">42</ion-select-option>\n        <ion-select-option value=\"43\">43</ion-select-option>\n        <ion-select-option value=\"44\">44</ion-select-option>\n        <ion-select-option value=\"45\">45</ion-select-option>\n        <ion-select-option value=\"46\">46</ion-select-option>\n        <ion-select-option value=\"47\">47</ion-select-option>\n        <ion-select-option value=\"48\">48</ion-select-option>\n        <ion-select-option value=\"49\">49</ion-select-option>\n        <ion-select-option value=\"50\">50</ion-select-option>\n        <ion-select-option value=\"51\">51</ion-select-option>\n        <ion-select-option value=\"52\">52</ion-select-option>\n        <ion-select-option value=\"53\">53</ion-select-option>\n        <ion-select-option value=\"54\">54</ion-select-option>\n        <ion-select-option value=\"55\">55</ion-select-option>\n        <ion-select-option value=\"56\">56</ion-select-option>\n        <ion-select-option value=\"57\">57</ion-select-option>\n        <ion-select-option value=\"58\">58</ion-select-option>\n        <ion-select-option value=\"59\">59</ion-select-option>\n        <ion-select-option value=\"60\">60</ion-select-option>\n        <ion-select-option value=\"61\">61</ion-select-option>\n        <ion-select-option value=\"62\">62</ion-select-option>\n        <ion-select-option value=\"63\">63</ion-select-option>\n        <ion-select-option value=\"64\">64</ion-select-option>\n        <ion-select-option value=\"65\">65</ion-select-option>\n        <ion-select-option value=\"66\">66</ion-select-option>\n        <ion-select-option value=\"67\">67</ion-select-option>\n        <ion-select-option value=\"68\">68</ion-select-option>\n        <ion-select-option value=\"69\">69</ion-select-option>\n        <ion-select-option value=\"70\">70</ion-select-option>\n        <ion-select-option value=\"71\">71</ion-select-option>\n        <ion-select-option value=\"72\">72</ion-select-option>\n        <ion-select-option value=\"73\">73</ion-select-option>\n        <ion-select-option value=\"74\">74</ion-select-option>\n        <ion-select-option value=\"75\">75</ion-select-option>\n        <ion-select-option value=\"76\">76</ion-select-option>\n        <ion-select-option value=\"77\">77</ion-select-option>\n        <ion-select-option value=\"78\">78</ion-select-option>\n        <ion-select-option value=\"79\">79</ion-select-option>\n        <ion-select-option value=\"80\">80</ion-select-option>\n        <ion-select-option value=\"81\">81</ion-select-option>\n        <ion-select-option value=\"82\">82</ion-select-option>\n        <ion-select-option value=\"83\">83</ion-select-option>\n        <ion-select-option value=\"84\">84</ion-select-option>\n        <ion-select-option value=\"85\">85</ion-select-option>\n        <ion-select-option value=\"86\">86</ion-select-option>\n        <ion-select-option value=\"87\">87</ion-select-option>\n        <ion-select-option value=\"88\">88</ion-select-option>\n        <ion-select-option value=\"89\">89</ion-select-option>\n        <ion-select-option value=\"90\">90</ion-select-option>\n        <ion-select-option value=\"91\">91</ion-select-option>\n        <ion-select-option value=\"92\">92</ion-select-option>\n        <ion-select-option value=\"93\">93</ion-select-option>\n        <ion-select-option value=\"94\">94</ion-select-option>\n        <ion-select-option value=\"95\">95</ion-select-option>\n        <ion-select-option value=\"96\">96</ion-select-option>\n        <ion-select-option value=\"97\">97</ion-select-option>\n        <ion-select-option value=\"98\">98</ion-select-option>\n        <ion-select-option value=\"99\">99</ion-select-option>\n        <ion-select-option value=\"100\">100</ion-select-option>\n        <ion-select-option value=\"110\">110</ion-select-option>\n        <ion-select-option value=\"120\">101</ion-select-option>\n        <ion-select-option value=\"130\">130</ion-select-option>\n        <ion-select-option value=\"140\">140</ion-select-option>\n        <ion-select-option value=\"150\">150</ion-select-option>\n        <ion-select-option value=\"160\">160</ion-select-option>\n        <ion-select-option value=\"170\">170</ion-select-option>\n        <ion-select-option value=\"180\">180</ion-select-option>\n        <ion-select-option value=\"190\">190</ion-select-option>\n      </ion-select>\n\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"cantidad_max\" [(ngModel)]=\"objeto.cantidad_max\" required>\n        <ion-select-option value=\"0.1\">0.1</ion-select-option>\n        <ion-select-option value=\"0.2\">0.2</ion-select-option>\n        <ion-select-option value=\"0.3\">0.3</ion-select-option>\n        <ion-select-option value=\"0.4\">0.4</ion-select-option>\n        <ion-select-option value=\"0.5\">0.5</ion-select-option>\n        <ion-select-option value=\"0.6\">0.6</ion-select-option>\n        <ion-select-option value=\"0.7\">0.7</ion-select-option>\n        <ion-select-option value=\"0.8\">0.8</ion-select-option>\n        <ion-select-option value=\"0.9\">0.9</ion-select-option>\n        <ion-select-option value=\"0.10\">0.10</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n\n\n  \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarPRO()\">\n      Registrar Alimento\n    </ion-button>\n\n  </form>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Tabla de Alimnetos\n    </ion-label>\n  </ion-item>\n\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Tipo de Alimento</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.tipo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Unidad de Medida</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_pro}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Cantidad Minima</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_min}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Cantidad Media</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_med}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Cantidad Maxima</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_max}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PV)\">E</ion-button>     \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"abrirCrud(prod.id_PV)\">Modificar</ion-button> \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n  </ion-slides>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/productov/productov-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/productov/productov-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ProductovPageRoutingModule */

  /***/
  function srcAppPagesProductovProductovRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductovPageRoutingModule", function () {
      return ProductovPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _productov_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./productov.page */
    "./src/app/pages/productov/productov.page.ts");

    var routes = [{
      path: '',
      component: _productov_page__WEBPACK_IMPORTED_MODULE_3__["ProductovPage"]
    }];

    var ProductovPageRoutingModule = function ProductovPageRoutingModule() {
      _classCallCheck(this, ProductovPageRoutingModule);
    };

    ProductovPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductovPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/productov/productov.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/productov/productov.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductovPageModule */

  /***/
  function srcAppPagesProductovProductovModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductovPageModule", function () {
      return ProductovPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _productov_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./productov-routing.module */
    "./src/app/pages/productov/productov-routing.module.ts");
    /* harmony import */


    var _productov_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./productov.page */
    "./src/app/pages/productov/productov.page.ts");

    var ProductovPageModule = function ProductovPageModule() {
      _classCallCheck(this, ProductovPageModule);
    };

    ProductovPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _productov_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductovPageRoutingModule"]],
      declarations: [_productov_page__WEBPACK_IMPORTED_MODULE_6__["ProductovPage"]]
    })], ProductovPageModule);
    /***/
  },

  /***/
  "./src/app/pages/productov/productov.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/productov/productov.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductovProductovPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdG92L0M6XFxVc2Vyc1xcd2Ftc3NcXERlc2t0b3BcXHBydWViYSBlbGVjdHRyb25cXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0b3ZcXHByb2R1Y3Rvdi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvdi9wcm9kdWN0b3YucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvdi9wcm9kdWN0b3YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnlfcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbn1cclxuXHJcbi5zdW1tYXJ5Y2VsbHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2lkdGg6IDQzdnc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzA1MjY0NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59IiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/productov/productov.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/productov/productov.page.ts ***!
    \***************************************************/

  /*! exports provided: ProductovPage */

  /***/
  function srcAppPagesProductovProductovPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductovPage", function () {
      return ProductovPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/access-providers */
    "./src/app/providers/access-providers.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductovPage = /*#__PURE__*/function () {
      function ProductovPage(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, ProductovPage);

        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.objeto = {
          tipo: "",
          nombreali: "",
          cantidad_pro: "",
          cantidad_min: "",
          cantidad_med: "",
          cantidad_max: ""
        };
        this.pruebas = [];
        this.url = 'http://localhost/proG/server_api/crear_productov.php';
        this.url3 = 'http://localhost/proG/server_api/menu_productov.php';
        this.listarRegistroPA();
      }

      _createClass(ProductovPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarRegistroPro",
        value: function agregarRegistroPro(obj) {
          return this.http.post(this.url, JSON.stringify(obj));
        }
      }, {
        key: "agregarPRO",
        value: function agregarPRO() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.agregarRegistroPro(this.objeto).subscribe(function (resp) {
                      _this.objeto.tipo = '';
                      _this.objeto.nombreali = '';
                      _this.objeto.cantidad_pro = '';
                      _this.objeto.cantidad_min = '';
                      _this.objeto.cantidad_med = '';
                      _this.objeto.cantidad_max = '';

                      _this.listarRegistroPA();

                      console.log(resp);
                    });
                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: "Registro Exitoso",
                      duration: 1500
                    });

                  case 3:
                    toast = _context.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getRegistroPA",
        value: function getRegistroPA() {
          return this.http.get(this.url3);
        }
      }, {
        key: "listarRegistroPA",
        value: function listarRegistroPA() {
          var _this2 = this;

          this.pruebas = [];
          this.getRegistroPA().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
              _this2.pruebas.push(res[i]);
            }
          });
        }
      }, {
        key: "delData",
        value: function delData(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'del_productoV',
                        id: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this3.presentToast('Eliminado con exito');

                          _this3.listarRegistroPA();
                        } else {
                          _this3.presentToast('delete error');
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "abrirCrud",
        value: function abrirCrud(a) {
          this.router.navigate(['/modificarprov/' + a]);
        }
      }]);

      return ProductovPage;
    }();

    ProductovPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ProductovPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-productov',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./productov.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productov/productov.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./productov.page.scss */
      "./src/app/pages/productov/productov.page.scss"))["default"]]
    })], ProductovPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-productov-productov-module-es5.js.map