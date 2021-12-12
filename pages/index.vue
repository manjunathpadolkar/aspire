<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:col-span-2">
        <div>
          <div>
            <div>
              <div
                class="md:p-2 pb-20 md:pb-0 grid grid-cols-1 md:grid-cols-2 md:gap-8 shadow-lg"
              >
                <div>
                  <div
                    class="w-full p-4 fixed top-0 left-0 md:static z-0 bg-ap-color-#0C365A md:bg-white"
                  >
                    <div>
                      <div class="flex items-center justify-between">
                        <p
                          class="text-ap-font-size-19 open-sans text-white md:text-ap-color-#222222"
                        >
                          Available balance
                        </p>
                        <div class="md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25.595"
                            height="25"
                            viewBox="0 0 25.595 25"
                          >
                            <path
                              class="aspire-logo"
                              d="M25.073,15.759c0,.071,0,.142-.073.142a.159.159,0,0,1-.147-.142c-.22-.284-11.388-12.08-11.9-12.506-.22-.213-.294-.142-.514.071C12.363,3.395.754,15.617.607,15.83.534,15.9.46,15.9.46,15.759a11.641,11.641,0,0,1-.441-3.908,11.032,11.032,0,0,1,1.616-5.4A12.217,12.217,0,0,1,10.011.339,12.62,12.62,0,0,1,21.988,3.821a11.636,11.636,0,0,1,3.453,6.68,9.408,9.408,0,0,1,.147,2.061A16.11,16.11,0,0,1,25.073,15.759Z"
                              transform="translate(0 0)"
                            />
                            <path
                              class="aspire-logo"
                              d="M.085,9.717c-.073-.071-.147-.142,0-.284S8.828.266,9.048.053c.073-.071.147-.071.147,0,.294.355,8.743,9.309,8.964,9.451.073.071.073.142-.073.142A9.965,9.965,0,0,1,16.469,11a12.563,12.563,0,0,1-6.319,2.274,6.53,6.53,0,0,1-1.176.071A12.7,12.7,0,0,1,.085,9.717Z"
                              transform="translate(3.682 11.656)"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                          <span
                            class="bg-ap-color-#01D167 px-4 py-1 md:text-ap-font-size-17 rounded-md inline-block font-bold open-sans text-white"
                            >S$</span
                          >
                          <span
                            class="inline-block text-ap-font-size-32 md:text-ap-font-size-35 ml-2 font-bold open-sans text-white md:text-ap-color-#222222"
                            >3,000</span
                          >
                        </div>

                        <div class="md:hidden">
                          <button
                            class="text-ap-color-#23CEFD font-bold px-3 py-1 rounded-md open-sans flex items-center"
                          >
                            <span class="inline-block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15.5"
                                height="15.5"
                                viewBox="0 0 15.5 15.5"
                              >
                                <path
                                  class="add-icon"
                                  d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.508,7.508,0,0,0,7.5,0Zm3.281,8.125H8.125v2.656a.625.625,0,1,1-1.25,0V8.125H4.219a.625.625,0,1,1,0-1.25H6.875V4.219a.625.625,0,1,1,1.25,0V6.875h2.656a.625.625,0,1,1,0,1.25Zm0,0"
                                  transform="translate(0.25 0.25)"
                                />
                              </svg>
                            </span>
                            <span class="inline-block text-ap-font-size-17 ml-2"
                              >New card</span
                            >
                          </button>
                        </div>
                      </div>

                      <div class="flex mt-6">
                        <a
                          href="#"
                          class="font-bold border-b-2 border-ap-color-#23CEFD text-ap-font-size-17 md:text-ap-font-size-19 text-white md:text-ap-color-#222222"
                          >My debit cards</a
                        >

                        <a
                          href="#"
                          class="ml-4 font-bold 
                                                text-ap-font-size-17 md:text-ap-font-size-19 opacity-30 text-white md:text-ap-color-#222222"
                          >All company cards</a
                        >
                      </div>
                    </div>

                    <div class="relative mt-14 md:mt-0">
                      <div class="hidden md:block md:mt-6">
                        <div class="flex items-center justify-end">
                          <span class="cursor-pointer mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            >
                              <path class="eye-logo-a" d="M0,0H16V16H0Z" />
                              <path
                                class="eye-logo-b"
                                d="M7.333,10A7.822,7.822,0,0,1,2.849,8.6,7.9,7.9,0,0,1,0,5,7.879,7.879,0,0,1,14.666,5a7.9,7.9,0,0,1-2.848,3.6A7.824,7.824,0,0,1,7.333,10Zm0-8.334A3.333,3.333,0,1,0,10.667,5,3.337,3.337,0,0,0,7.333,1.668Z"
                                transform="translate(0.667 2.999)"
                              />
                              <path
                                class="eye-logo-c"
                                d="M2,0A2,2,0,1,0,4,2,2,2,0,0,0,2,0Z"
                                transform="translate(6 6)"
                              />
                            </svg>
                          </span>
                          <span
                            class="cursor-pointer ml-2 text-right text-ap-color-#01D167 font-bold open-sans text-base"
                            >Show card number</span
                          >
                        </div>
                      </div>
                      <div
                        class="flex items-center justify-end bg-white absolute -top-8 right-0 pb-3 px-3 pt-1 visible md:hidden z-0 rounded-t-md"
                      >
                        <span class="cursor-pointer mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <path class="eye-logo-a" d="M0,0H16V16H0Z" />
                            <path
                              class="eye-logo-b"
                              d="M7.333,10A7.822,7.822,0,0,1,2.849,8.6,7.9,7.9,0,0,1,0,5,7.879,7.879,0,0,1,14.666,5a7.9,7.9,0,0,1-2.848,3.6A7.824,7.824,0,0,1,7.333,10Zm0-8.334A3.333,3.333,0,1,0,10.667,5,3.337,3.337,0,0,0,7.333,1.668Z"
                              transform="translate(0.667 2.999)"
                            />
                            <path
                              class="eye-logo-c"
                              d="M2,0A2,2,0,1,0,4,2,2,2,0,0,0,2,0Z"
                              transform="translate(6 6)"
                            />
                          </svg>
                        </span>
                        <span
                          class="cursor-pointer ml-2 text-right text-ap-color-#01D167 font-bold open-sans text-base"
                          >Show card number</span
                        >
                      </div>
                      <div
                        class="bg-ap-color-#01D167 mt-2 rounded-lg p-6 relative"
                      >
                        <div class="flex justify-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="83.52"
                            height="23.702"
                            viewBox="0 0 83.52 23.702"
                          >
                            <g transform="translate(0)">
                              <g transform="translate(0)">
                                <path
                                  class="aspire-logo-2"
                                  d="M11.923,23.7l-.178,0a11.66,11.66,0,0,1-4.474-.9,11.541,11.541,0,0,1-3.776-2.537.2.2,0,0,1-.079-.129.212.212,0,0,1,.079-.14c.061-.06,1.638-1.749,3.465-3.705l.008-.009.013-.014C9.193,13.9,11.7,11.212,11.813,11.1a.149.149,0,0,1,.094-.05c.027,0,.043.018.043.05.059.073,8.071,8.8,8.319,8.96.037.037.052.071.042.1s-.049.04-.11.04a9.3,9.3,0,0,1-1.5,1.28,11.481,11.481,0,0,1-5.863,2.155A5.99,5.99,0,0,1,11.923,23.7Zm38.618-2.833H48.768c-.136,0-.136-.066-.136-.135V7.328c0-.134.066-.134.136-.134h1.909c.136,0,.136.065.136.134v1.55a4.094,4.094,0,0,1,1.841-1.617,4.732,4.732,0,0,1,3.886.121A4.636,4.636,0,0,1,59,10.36a5.92,5.92,0,0,1-.409,4.446,4.261,4.261,0,0,1-3.41,2.358,4.42,4.42,0,0,1-2.454-.269,4.3,4.3,0,0,1-1.773-1.28.35.35,0,0,1-.068-.1.351.351,0,0,0-.068-.1V20.6C50.813,20.869,50.813,20.869,50.541,20.869Zm3.313-12.22h0a2.844,2.844,0,0,0-1.949.766,3.052,3.052,0,0,0-1.091,2.493,3.794,3.794,0,0,1,.136.673,3.08,3.08,0,0,0,3,2.695h.038a3.032,3.032,0,0,0,2.826-1.887,3.347,3.347,0,0,0,.136-2.155,3.05,3.05,0,0,0-1.977-2.358,2.844,2.844,0,0,0-1.119-.228ZM42.36,17.4a6.307,6.307,0,0,1-3.75-1.243.19.19,0,0,1-.1-.111.3.3,0,0,1,.035-.225,4.662,4.662,0,0,0,.372-.717,6.758,6.758,0,0,1,.31-.631,5.569,5.569,0,0,1,.776.316,8,8,0,0,0,.86.358,4.1,4.1,0,0,0,2.182.269,2.009,2.009,0,0,0,.682-.2.966.966,0,0,0,.542-.7.956.956,0,0,0-.27-.844,1.621,1.621,0,0,0-.75-.4,9.72,9.72,0,0,0-1.1-.386c-.236-.072-.459-.141-.675-.221l-1.022-.4a2.68,2.68,0,0,1,.136-4.85,5.827,5.827,0,0,1,2.157-.412c.1,0,.2,0,.3.008a7.585,7.585,0,0,1,2.932.809c.168.066.253.1.272.157s-.032.144-.135.315L45.5,9.484a.45.45,0,0,0-.037.043c-.024.03-.041.052-.077.052a.216.216,0,0,1-.09-.028,6.146,6.146,0,0,0-2.659-.809,1.8,1.8,0,0,0-1.023.135A.879.879,0,0,0,41,9.618a.768.768,0,0,0,.409.876,5.379,5.379,0,0,0,1.432.606,8.674,8.674,0,0,1,1.7.606,3.776,3.776,0,0,1,.954.606,2.571,2.571,0,0,1,.886,2.358,2.688,2.688,0,0,1-1.908,2.359A6.269,6.269,0,0,1,42.36,17.4Zm-11.12-.184a3.979,3.979,0,0,1-1.562-.317A3.073,3.073,0,0,1,27.9,15.133a3.021,3.021,0,0,1,.139-2.483,2.912,2.912,0,0,1,1.909-1.415,6.29,6.29,0,0,1,1.569-.2H34.45c.081,0,.144-.025.159-.063a.066.066,0,0,0-.023-.072,2.45,2.45,0,0,0-.068-.741,1.734,1.734,0,0,0-1.5-1.28,4.656,4.656,0,0,0-2.863.336,3.866,3.866,0,0,0-.886.539.125.125,0,0,1-.085.044c-.043,0-.082-.036-.12-.111a12.627,12.627,0,0,1-.751-1.281c-.036-.036-.052-.07-.042-.094s.048-.04.11-.04a7.943,7.943,0,0,1,4.276-1.244c.233,0,.47.01.7.031a3.793,3.793,0,0,1,1.5.4,3.355,3.355,0,0,1,1.909,2.627,17.993,17.993,0,0,1,.068,1.954v4.985c0,.134-.066.134-.136.134H34.859c-.136,0-.136-.065-.136-.134V15.952a5.606,5.606,0,0,1-2.863,1.212A4.015,4.015,0,0,1,31.239,17.212Zm.484-4.561a4.666,4.666,0,0,0-1.3.2,1.136,1.136,0,0,0-.75.809,1.5,1.5,0,0,0,1.09,1.751,3.132,3.132,0,0,0,2.455-.269,1.913,1.913,0,0,0,1.227-1.954,1.171,1.171,0,0,0,.068-.4c0-.134-.069-.134-.136-.134Zm47.013,4.54a6.124,6.124,0,0,1-2.08-.363,4.47,4.47,0,0,1-3-3.639A5.024,5.024,0,0,1,74,10.023a4.713,4.713,0,0,1,3.681-2.829,6.662,6.662,0,0,1,2.591.067A3.789,3.789,0,0,1,83.2,10.023a6.976,6.976,0,0,1,.273,2.9c0,.135-.066.135-.136.135H79.655a22.47,22.47,0,0,0-3.066-.211c-.2,0-.411,0-.615.008a.166.166,0,0,0-.151.058.148.148,0,0,0,.014.144,3.122,3.122,0,0,0,3.045,2.358h.022l.127,0a3.8,3.8,0,0,0,2.668-1.08.13.13,0,0,1,.1-.05.129.129,0,0,1,.1.05c.17.168.326.339.476.5s.308.338.479.507a.128.128,0,0,1,.05.1.13.13,0,0,1-.05.1,6.011,6.011,0,0,1-2.728,1.482A6.155,6.155,0,0,1,78.736,17.19Zm-.081-8.5a2.845,2.845,0,0,0-1.68.544,2.809,2.809,0,0,0-1.137,1.93c-.027.052-.033.085-.022.1s.076.03.158.03h5.454c.136,0,.136-.068.136-.134a3.188,3.188,0,0,0-.477-1.415,2.562,2.562,0,0,0-1.909-1.011A2.879,2.879,0,0,0,78.654,8.695ZM63.585,17.1H61.723c-.136,0-.136,0-.136-.135v-9.7c0-.135.066-.135.136-.135h1.841c.136,0,.136.069.136.135l.068,9.634a.181.181,0,0,1-.052.15A.185.185,0,0,1,63.585,17.1Zm5.593-.135H67.314c-.136,0-.136-.065-.136-.134v-9.7c0-.134.066-.134.136-.134h1.909c.136,0,.136.065.136.134V8.742a3.846,3.846,0,0,1,.273-.336,3.733,3.733,0,0,1,2.659-1.414.6.6,0,0,0,.146-.028.7.7,0,0,1,.177-.032.208.208,0,0,1,.154.06.313.313,0,0,1,.077.3.815.815,0,0,0-.009.1V8.81c0,.135-.066.135-.136.135s-.169-.01-.254-.01a3.32,3.32,0,0,0-1.724.481,2.768,2.768,0,0,0-1.363,2.426c-.046,1.125-.03,2.234-.015,3.305.007.531.015,1.077.015,1.612a.183.183,0,0,1-.053.15A.185.185,0,0,1,69.178,16.963ZM23.2,15.075h0a.15.15,0,0,1-.136-.134C23.012,14.872,12.632,3.6,12.018,3.084c-.087-.086-.148-.122-.205-.122-.08,0-.152.071-.272.189C11.449,3.242.7,14.806.563,15.008a.128.128,0,0,1-.08.044.045.045,0,0,1-.041-.026.181.181,0,0,1-.016-.085,11.237,11.237,0,0,1-.409-3.706,10.653,10.653,0,0,1,1.5-5.121A11.316,11.316,0,0,1,9.291.322,11.561,11.561,0,0,1,20.4,3.623a11.175,11.175,0,0,1,3.2,6.332,9.062,9.062,0,0,1,.136,1.953,15.569,15.569,0,0,1-.477,3.032C23.268,15.01,23.268,15.075,23.2,15.075ZM62.637,5.442a1.255,1.255,0,0,1-.888-.363,1.235,1.235,0,0,1-.367-.917,1.353,1.353,0,0,1,1.3-1.347H62.7a1.282,1.282,0,0,1,.922.391,1.256,1.256,0,0,1,.348.956,1.281,1.281,0,0,1-.379.905,1.316,1.316,0,0,1-.916.375Z"
                                  transform="translate(0)"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div class=" text-white mt-3">
                          <h3
                            class="font-bold text-ap-font-size-29 md:ap-font-size-32 tracking-wider open-sans"
                          >
                            Mark Henry
                          </h3>
                        </div>
                        <div class="mt-5">
                          <span class="inline-block align-middle">
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                          </span>

                          <span class="ml-4 inline-block align-middle">
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                          </span>

                          <span class="ml-4 inline-block align-middle">
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                            <span
                              class="inline-block h-3 w-3 bg-white rounded-full"
                            ></span>
                          </span>

                          <span
                            class="inline-block align-middle ml-4 text-white font-bold text-ap-font-size-19 open-sans"
                          >
                            <span class="inline-block">2</span>
                            <span class="inline-block">0</span>
                            <span class="inline-block">2</span>
                            <span class="inline-block">1</span>
                          </span>
                        </div>
                        <div class="mt-3">
                          <span
                            class="inline-block text-white font-bold text-ap-font-size-17 open-sans"
                            >Thru: 12/20</span
                          >
                          <span
                            class="inline-block text-white font-bold text-ap-font-size-17 ml-8 open-sans"
                            >CVV:<span
                              class="inline-block align-middle text-ap-font-size-32 font-bold ml-1 tracking-widest"
                              >***</span
                            ></span
                          >
                        </div>
                        <div class="flex justify-end mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="66.591"
                            height="22.573"
                            viewBox="0 0 66.591 22.573"
                          >
                            <path
                              class="aspire-logo-2"
                              d="M38.35,22.573a14.824,14.824,0,0,1-6.134-1.232l.808-4.9a9.067,9.067,0,0,0,5.3,1.528c2.3,0,3.671-.782,3.671-2.092,0-1.243-1.328-1.976-2.866-2.826A13.568,13.568,0,0,1,36,10.923a5.026,5.026,0,0,1-1.529-3.7,6.431,6.431,0,0,1,1.043-3.654,6.946,6.946,0,0,1,2.5-2.2A12.382,12.382,0,0,1,43.574,0,15.239,15.239,0,0,1,48.46.95l-.775,4.684a9.415,9.415,0,0,0-4.357-1.028,5.285,5.285,0,0,0-2.288.426,1.527,1.527,0,0,0-.971,1.412c0,.979,1.224,1.668,2.64,2.465,2.2,1.239,4.944,2.782,4.944,6.2a6.635,6.635,0,0,1-3.261,5.78A11.7,11.7,0,0,1,38.35,22.573ZM52.924,22.2H47.26l8.1-20.184A2.533,2.533,0,0,1,57.873.389H62.24L66.591,22.2H61.6l-.638-3.239H54.057L52.924,22.2ZM58.477,6.321l-2.854,8.163h4.461ZM28.868,22.2H23.434L26.83.389h5.434L28.868,22.2Zm-12.8,0H10.4L5.687,3.256c-.134-.085-.257-.16-.375-.231L5.02,2.852c-.172-.1-.34-.194-.5-.281-.1-.054-.2-.1-.294-.155s-.208-.109-.311-.16-.185-.093-.3-.149c-.093-.046-.186-.089-.277-.132s-.2-.091-.288-.134-.175-.077-.261-.114c-.187-.081-.343-.148-.495-.209l-.119-.047-.1-.039-.257-.1-.2-.075-.227-.08c-.062-.022-.125-.044-.184-.063s-.135-.047-.2-.066L.842.994C.751.965.667.94.59.917L.543.9.438.873.33.843.22.814.182.8.15.8.071.776.05.771l-.014,0A.325.325,0,0,1,0,.759L.1.389H8.664a2.371,2.371,0,0,1,2.577,1.965l1.828,9.807.614,3.229,5.18-15h5.848L16.066,22.2Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="text-center my-2">
                        <a
                          href="#"
                          class="inline-block h-3 w-5 bg-ap-color-#01D167 rounded-full"
                        ></a>
                        <a
                          href="#"
                          class="inline-block h-3 w-3 bg-ap-color-#01D167 rounded-full opacity-30"
                        ></a>
                        <a
                          href="#"
                          class="inline-block h-3 w-3 bg-ap-color-#01D167 rounded-full opacity-30"
                        ></a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="bg-white z-30 mt-ap-margin-480 md:mt-0 hidden md:block"
                  >
                    <div class="bg-ap-color-#EDF3FF mt-2 rounded-lg p-4">
                      <div class="grid grid-cols-5 gap-3">
                        <div>
                          <span>
                            <span class="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <defs>
                                  <clipPath id="a">
                                    <rect
                                      class="icon-Freeze-card-a"
                                      width="25"
                                      height="8"
                                      transform="translate(-209 321)"
                                    />
                                  </clipPath>
                                </defs>
                                <g transform="translate(213 -305)">
                                  <circle
                                    class="icon-Freeze-card-b"
                                    cx="16"
                                    cy="16"
                                    r="16"
                                    transform="translate(-213 305)"
                                  />
                                  <path
                                    class="icon-Freeze-card-c"
                                    d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
                                    transform="translate(-197.23 308.916) rotate(45)"
                                  />
                                  <g class="icon-Freeze-card-d">
                                    <path
                                      class="icon-Freeze-card-e"
                                      d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
                                      transform="translate(-197.23 308.916) rotate(45)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span
                              class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                              >Freeze card</span
                            >
                          </span>
                        </div>

                        <div>
                          <span>
                            <span class="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <g transform="translate(213 -305)">
                                  <circle
                                    class="icon-Set-spend-limit-a"
                                    cx="16"
                                    cy="16"
                                    r="16"
                                    transform="translate(-213 305)"
                                  />
                                  <g transform="translate(-206 222.078)">
                                    <g transform="translate(0 90.922)">
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M40.53,166.985a.219.219,0,0,0-.054-.159l-1.737-1.977a.219.219,0,0,0-.31-.02,9.039,9.039,0,0,0-1.97,2.46.219.219,0,0,0,.087.3l2.309,1.262a.219.219,0,0,0,.3-.087,5.976,5.976,0,0,1,1.3-1.626A.219.219,0,0,0,40.53,166.985Z"
                                        transform="translate(-35.357 -162.636)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M160.092,96.836a.219.219,0,0,0,.3.091,5.905,5.905,0,0,1,1.979-.637.219.219,0,0,0,.188-.247l-.354-2.608a.22.22,0,0,0-.247-.188,8.964,8.964,0,0,0-3,.967.219.219,0,0,0-.091.3Z"
                                        transform="translate(-154.166 -93.207)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M3.123,311.445l-2.54-.689a.219.219,0,0,0-.269.154A9.059,9.059,0,0,0,0,313.281c0,.138,0,.275.01.422a.219.219,0,0,0,.219.209h.01l2.629-.121a.219.219,0,0,0,.209-.229c0-.1-.007-.19-.007-.28a5.986,5.986,0,0,1,.208-1.567A.219.219,0,0,0,3.123,311.445Z"
                                        transform="translate(0 -304.321)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M322.6,92.773a8.969,8.969,0,0,0-3.039-.85.219.219,0,0,0-.239.2l-.254,2.619a.219.219,0,0,0,.2.239,5.908,5.908,0,0,1,2,.56.219.219,0,0,0,.293-.1l1.143-2.371A.219.219,0,0,0,322.6,92.773Z"
                                        transform="translate(-309.693 -91.922)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M434.723,159.96a.219.219,0,0,0-.024-.166,9.042,9.042,0,0,0-2.062-2.382.219.219,0,0,0-.308.032l-1.661,2.042a.219.219,0,0,0,.032.309,5.978,5.978,0,0,1,1.364,1.576.219.219,0,0,0,.3.076l2.259-1.35A.22.22,0,0,0,434.723,159.96Z"
                                        transform="translate(-417.973 -155.441)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-b"
                                        d="M501.419,299.883a.219.219,0,0,0-.275-.144l-2.511.787a.219.219,0,0,0-.144.275,5.968,5.968,0,0,1,.272,1.786c0,.09,0,.181-.007.28a.219.219,0,0,0,.209.229l2.629.121h.01a.219.219,0,0,0,.219-.209c.007-.146.01-.284.01-.422A9.035,9.035,0,0,0,501.419,299.883Z"
                                        transform="translate(-483.831 -293.626)"
                                      />
                                      <path
                                        class="icon-Set-spend-limit-c"
                                        d="M173.745,310.747c-.038,0-.075,0-.113,0l-3.562-2.1a.226.226,0,0,0-.314.3l1.943,3.642a2.093,2.093,0,0,0-.011.212,2.057,2.057,0,1,0,2.057-2.057Z"
                                        transform="matrix(0.985, 0.174, -0.174, 0.985, -106.99, -325.533)"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </span>

                            <span
                              class="inline-block text-ap-font-size-17  text-ap-color-#0C365A text-center mt-2 open-sans"
                              >Set spend limit</span
                            >
                          </span>
                        </div>
                        <div>
                          <span>
                            <span class="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <g transform="translate(213 -305)">
                                  <g
                                    class="gpay-logo-a"
                                    transform="translate(-213 305)"
                                  >
                                    <circle
                                      class="gpay-logo-f"
                                      cx="16"
                                      cy="16"
                                      r="16"
                                    />
                                    <circle
                                      class="gpay-logo-f"
                                      cx="16"
                                      cy="16"
                                      r="15.5"
                                    />
                                  </g>
                                  <g transform="translate(-203.25 314.5)">
                                    <path
                                      class="gpay-logo-b"
                                      d="M60.988,47.06a8.1,8.1,0,0,0-.106-1.311h-6.01v2.487h3.443A3,3,0,0,1,57.041,50.2v1.616h2.053A6.352,6.352,0,0,0,60.988,47.06Z"
                                      transform="translate(-48.497 -40.451)"
                                    />
                                    <path
                                      class="gpay-logo-c"
                                      d="M12.231,71.408a6.045,6.045,0,0,0,4.222-1.562L14.4,68.23a3.78,3.78,0,0,1-2.168.619,3.82,3.82,0,0,1-3.576-2.666H6.54v1.67A6.356,6.356,0,0,0,12.231,71.408Z"
                                      transform="translate(-5.856 -58.48)"
                                    />
                                    <path
                                      class="gpay-logo-d"
                                      d="M3.532,35.172a3.954,3.954,0,0,1,0-2.478V31.033H1.417a6.492,6.492,0,0,0,0,5.8Z"
                                      transform="translate(-0.733 -27.468)"
                                    />
                                    <path
                                      class="gpay-logo-e"
                                      d="M12.231,3.318a3.4,3.4,0,0,1,2.443.97L16.5,2.438A6.1,6.1,0,0,0,12.231.76,6.365,6.365,0,0,0,6.54,4.324l2.115,1.67A3.816,3.816,0,0,1,12.231,3.318Z"
                                      transform="translate(-5.856 -0.759)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span
                              class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                              >Add to GPay</span
                            >
                          </span>
                        </div>
                        <div>
                          <span>
                            <span class="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <g transform="translate(213 -305)">
                                  <circle
                                    class="replace-card-logo-a"
                                    cx="16"
                                    cy="16"
                                    r="16"
                                    transform="translate(-213 305)"
                                  />
                                  <path
                                    class="replace-card-logo-b"
                                    d="M11.148,13.187a6.28,6.28,0,0,1-3.619,1.139H7.5c-.089,0-.179,0-.269-.006a.587.587,0,0,0-.049,1.173c.105,0,.212.007.317.007h.029a7.445,7.445,0,0,0,4.291-1.35.587.587,0,0,0-.671-.963Zm-8.295-.9a.586.586,0,1,0-.86.8c.132.143.272.283.414.415a.587.587,0,0,0,.8-.862C3.083,12.529,2.965,12.411,2.853,12.29Zm-1.288-2.1a.586.586,0,1,0-1.1.409c.068.183.144.365.226.542a.586.586,0,1,0,1.063-.494C1.686,10.5,1.622,10.346,1.565,10.192ZM5.3,13.932c-.154-.057-.308-.121-.457-.191a.587.587,0,0,0-.493,1.065c.177.082.359.158.542.226a.587.587,0,0,0,.408-1.1Z"
                                    transform="translate(-204.63 313)"
                                  />
                                  <path
                                    class="replace-card-logo-c"
                                    d="M15,7.928v.029a7.4,7.4,0,0,1-1.178,3.984.588.588,0,0,1-.809.177.581.581,0,0,1-.178-.8A6.264,6.264,0,0,0,7.529,1.665,6.368,6.368,0,0,0,2.118,4.692l1.339,0a.583.583,0,1,1,0,1.165h0l-1.714,0a1.721,1.721,0,0,1-1.229-.5A1.74,1.74,0,0,1,0,4.1V2.422a.586.586,0,0,1,1.172,0V4A7.513,7.513,0,0,1,12.819,2.685,7.405,7.405,0,0,1,15,7.928Z"
                                    transform="translate(-204.499 313)"
                                  />
                                </g>
                              </svg>
                            </span>
                            <span
                              class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                              >Replace card</span
                            >
                          </span>
                        </div>
                        <div>
                          <span>
                            <span class="flex justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <g transform="translate(213 -305)">
                                  <circle
                                    class="Cancel-card-logo-a"
                                    cx="16"
                                    cy="16"
                                    r="16"
                                    transform="translate(-213 305)"
                                  />
                                  <g transform="translate(-236.222 315)">
                                    <path
                                      class="Cancel-card-logo-b"
                                      d="M64.444,138.522a1.925,1.925,0,0,0,1.919,1.927h7.675a1.925,1.925,0,0,0,1.919-1.927v-9.633H64.444Z"
                                      transform="translate(-31.259 -126.449)"
                                    />
                                    <path
                                      class="Cancel-card-logo-c"
                                      d="M40.861-.037V-1h-3.84v.963h-4.8V2.212H45.661V-.037Z"
                                      transform="translate(0 -1)"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </span>
                            <span
                              class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                              >Cancel card</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-white w-full z-30 mt-ap-margin-510 rounded-t-xl pb-4 md:mt-0 md:hidden"
                >
                  <div class="bg-ap-color-#EDF3FF rounded-lg p-4 shadow-md">
                    <div class="grid grid-cols-5 gap-3">
                      <div>
                        <span>
                          <span class="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <defs>
                                <clipPath id="a">
                                  <rect
                                    class="icon-Freeze-card-a"
                                    width="25"
                                    height="8"
                                    transform="translate(-209 321)"
                                  />
                                </clipPath>
                              </defs>
                              <g transform="translate(213 -305)">
                                <circle
                                  class="icon-Freeze-card-b"
                                  cx="16"
                                  cy="16"
                                  r="16"
                                  transform="translate(-213 305)"
                                />
                                <path
                                  class="icon-Freeze-card-c"
                                  d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
                                  transform="translate(-197.23 308.916) rotate(45)"
                                />
                                <g class="icon-Freeze-card-d">
                                  <path
                                    class="icon-Freeze-card-e"
                                    d="M17,7.437H14.736L15.759,5.9,13.991,4.725,12.182,7.437H9.562V4.376l2.6-1.3-.949-1.9L9.562,2V0H7.437V2l-1.65-.824-.949,1.9,2.6,1.3V7.437H4.818L3.009,4.725,1.241,5.9,2.264,7.437H0V9.562H2.265L1.241,11.1l1.768,1.179,1.81-2.716H7.438v2.619L4.723,13.993,5.9,15.761l1.535-1.024V17H9.562V14.736L11.1,15.761l1.18-1.768L9.562,12.181V9.563h2.619l1.81,2.716L15.759,11.1,14.735,9.562H17Z"
                                    transform="translate(-197.23 308.916) rotate(45)"
                                  />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span
                            class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                            >Freeze card</span
                          >
                        </span>
                      </div>

                      <div>
                        <span>
                          <span class="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <g transform="translate(213 -305)">
                                <circle
                                  class="icon-Set-spend-limit-a"
                                  cx="16"
                                  cy="16"
                                  r="16"
                                  transform="translate(-213 305)"
                                />
                                <g transform="translate(-206 222.078)">
                                  <g transform="translate(0 90.922)">
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M40.53,166.985a.219.219,0,0,0-.054-.159l-1.737-1.977a.219.219,0,0,0-.31-.02,9.039,9.039,0,0,0-1.97,2.46.219.219,0,0,0,.087.3l2.309,1.262a.219.219,0,0,0,.3-.087,5.976,5.976,0,0,1,1.3-1.626A.219.219,0,0,0,40.53,166.985Z"
                                      transform="translate(-35.357 -162.636)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M160.092,96.836a.219.219,0,0,0,.3.091,5.905,5.905,0,0,1,1.979-.637.219.219,0,0,0,.188-.247l-.354-2.608a.22.22,0,0,0-.247-.188,8.964,8.964,0,0,0-3,.967.219.219,0,0,0-.091.3Z"
                                      transform="translate(-154.166 -93.207)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M3.123,311.445l-2.54-.689a.219.219,0,0,0-.269.154A9.059,9.059,0,0,0,0,313.281c0,.138,0,.275.01.422a.219.219,0,0,0,.219.209h.01l2.629-.121a.219.219,0,0,0,.209-.229c0-.1-.007-.19-.007-.28a5.986,5.986,0,0,1,.208-1.567A.219.219,0,0,0,3.123,311.445Z"
                                      transform="translate(0 -304.321)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M322.6,92.773a8.969,8.969,0,0,0-3.039-.85.219.219,0,0,0-.239.2l-.254,2.619a.219.219,0,0,0,.2.239,5.908,5.908,0,0,1,2,.56.219.219,0,0,0,.293-.1l1.143-2.371A.219.219,0,0,0,322.6,92.773Z"
                                      transform="translate(-309.693 -91.922)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M434.723,159.96a.219.219,0,0,0-.024-.166,9.042,9.042,0,0,0-2.062-2.382.219.219,0,0,0-.308.032l-1.661,2.042a.219.219,0,0,0,.032.309,5.978,5.978,0,0,1,1.364,1.576.219.219,0,0,0,.3.076l2.259-1.35A.22.22,0,0,0,434.723,159.96Z"
                                      transform="translate(-417.973 -155.441)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-b"
                                      d="M501.419,299.883a.219.219,0,0,0-.275-.144l-2.511.787a.219.219,0,0,0-.144.275,5.968,5.968,0,0,1,.272,1.786c0,.09,0,.181-.007.28a.219.219,0,0,0,.209.229l2.629.121h.01a.219.219,0,0,0,.219-.209c.007-.146.01-.284.01-.422A9.035,9.035,0,0,0,501.419,299.883Z"
                                      transform="translate(-483.831 -293.626)"
                                    />
                                    <path
                                      class="icon-Set-spend-limit-c"
                                      d="M173.745,310.747c-.038,0-.075,0-.113,0l-3.562-2.1a.226.226,0,0,0-.314.3l1.943,3.642a2.093,2.093,0,0,0-.011.212,2.057,2.057,0,1,0,2.057-2.057Z"
                                      transform="matrix(0.985, 0.174, -0.174, 0.985, -106.99, -325.533)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>

                          <span
                            class="inline-block text-ap-font-size-17  text-ap-color-#0C365A text-center mt-2 open-sans"
                            >Set spend limit</span
                          >
                        </span>
                      </div>
                      <div>
                        <span>
                          <span class="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <g transform="translate(213 -305)">
                                <g
                                  class="gpay-logo-a"
                                  transform="translate(-213 305)"
                                >
                                  <circle
                                    class="gpay-logo-f"
                                    cx="16"
                                    cy="16"
                                    r="16"
                                  />
                                  <circle
                                    class="gpay-logo-f"
                                    cx="16"
                                    cy="16"
                                    r="15.5"
                                  />
                                </g>
                                <g transform="translate(-203.25 314.5)">
                                  <path
                                    class="gpay-logo-b"
                                    d="M60.988,47.06a8.1,8.1,0,0,0-.106-1.311h-6.01v2.487h3.443A3,3,0,0,1,57.041,50.2v1.616h2.053A6.352,6.352,0,0,0,60.988,47.06Z"
                                    transform="translate(-48.497 -40.451)"
                                  />
                                  <path
                                    class="gpay-logo-c"
                                    d="M12.231,71.408a6.045,6.045,0,0,0,4.222-1.562L14.4,68.23a3.78,3.78,0,0,1-2.168.619,3.82,3.82,0,0,1-3.576-2.666H6.54v1.67A6.356,6.356,0,0,0,12.231,71.408Z"
                                    transform="translate(-5.856 -58.48)"
                                  />
                                  <path
                                    class="gpay-logo-d"
                                    d="M3.532,35.172a3.954,3.954,0,0,1,0-2.478V31.033H1.417a6.492,6.492,0,0,0,0,5.8Z"
                                    transform="translate(-0.733 -27.468)"
                                  />
                                  <path
                                    class="gpay-logo-e"
                                    d="M12.231,3.318a3.4,3.4,0,0,1,2.443.97L16.5,2.438A6.1,6.1,0,0,0,12.231.76,6.365,6.365,0,0,0,6.54,4.324l2.115,1.67A3.816,3.816,0,0,1,12.231,3.318Z"
                                    transform="translate(-5.856 -0.759)"
                                  />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span
                            class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                            >Add to GPay</span
                          >
                        </span>
                      </div>
                      <div>
                        <span>
                          <span class="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <g transform="translate(213 -305)">
                                <circle
                                  class="replace-card-logo-a"
                                  cx="16"
                                  cy="16"
                                  r="16"
                                  transform="translate(-213 305)"
                                />
                                <path
                                  class="replace-card-logo-b"
                                  d="M11.148,13.187a6.28,6.28,0,0,1-3.619,1.139H7.5c-.089,0-.179,0-.269-.006a.587.587,0,0,0-.049,1.173c.105,0,.212.007.317.007h.029a7.445,7.445,0,0,0,4.291-1.35.587.587,0,0,0-.671-.963Zm-8.295-.9a.586.586,0,1,0-.86.8c.132.143.272.283.414.415a.587.587,0,0,0,.8-.862C3.083,12.529,2.965,12.411,2.853,12.29Zm-1.288-2.1a.586.586,0,1,0-1.1.409c.068.183.144.365.226.542a.586.586,0,1,0,1.063-.494C1.686,10.5,1.622,10.346,1.565,10.192ZM5.3,13.932c-.154-.057-.308-.121-.457-.191a.587.587,0,0,0-.493,1.065c.177.082.359.158.542.226a.587.587,0,0,0,.408-1.1Z"
                                  transform="translate(-204.63 313)"
                                />
                                <path
                                  class="replace-card-logo-c"
                                  d="M15,7.928v.029a7.4,7.4,0,0,1-1.178,3.984.588.588,0,0,1-.809.177.581.581,0,0,1-.178-.8A6.264,6.264,0,0,0,7.529,1.665,6.368,6.368,0,0,0,2.118,4.692l1.339,0a.583.583,0,1,1,0,1.165h0l-1.714,0a1.721,1.721,0,0,1-1.229-.5A1.74,1.74,0,0,1,0,4.1V2.422a.586.586,0,0,1,1.172,0V4A7.513,7.513,0,0,1,12.819,2.685,7.405,7.405,0,0,1,15,7.928Z"
                                  transform="translate(-204.499 313)"
                                />
                              </g>
                            </svg>
                          </span>
                          <span
                            class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                            >Replace card</span
                          >
                        </span>
                      </div>
                      <div>
                        <span>
                          <span class="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <g transform="translate(213 -305)">
                                <circle
                                  class="Cancel-card-logo-a"
                                  cx="16"
                                  cy="16"
                                  r="16"
                                  transform="translate(-213 305)"
                                />
                                <g transform="translate(-236.222 315)">
                                  <path
                                    class="Cancel-card-logo-b"
                                    d="M64.444,138.522a1.925,1.925,0,0,0,1.919,1.927h7.675a1.925,1.925,0,0,0,1.919-1.927v-9.633H64.444Z"
                                    transform="translate(-31.259 -126.449)"
                                  />
                                  <path
                                    class="Cancel-card-logo-c"
                                    d="M40.861-.037V-1h-3.84v.963h-4.8V2.212H45.661V-.037Z"
                                    transform="translate(0 -1)"
                                  />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <span
                            class="inline-block text-ap-font-size-17 text-center text-ap-color-#0C365A mt-2 open-sans"
                            >Cancel card</span
                          >
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white z-10 md:mt-14 p-5 md:p-0">
                  <div class="text-right hidden md:flex justify-end w-full">
                    <button
                      class="bg-ap-color-#325BAF font-bold px-3 py-1 rounded-md open-sans  flex items-center"
                    >
                      <span class="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 15.5 15.5"
                        >
                          <path
                            class="add-icon-2"
                            d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.508,7.508,0,0,0,7.5,0Zm3.281,8.125H8.125v2.656a.625.625,0,1,1-1.25,0V8.125H4.219a.625.625,0,1,1,0-1.25H6.875V4.219a.625.625,0,1,1,1.25,0V6.875h2.656a.625.625,0,1,1,0,1.25Zm0,0"
                            transform="translate(0.25 0.25)"
                          />
                        </svg>
                      </span>
                      <span class="inline-block text-white ml-2">New card</span>
                    </button>
                  </div>
                  <div
                    class="mt-0 md:mt-ap-margin-90 bg-ap-color-#EDF3FF p-6 rounded-lg shadow-md"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <span class="inline-block mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <g transform="translate(29 -205)">
                              <rect
                                class="card-details-logo-a"
                                width="24"
                                height="24"
                                transform="translate(-29 205)"
                              />
                              <g transform="translate(-27 207)">
                                <path
                                  class="card-details-logo-b"
                                  d="M22.4,34.525V23.9A3.916,3.916,0,0,1,26.323,20h-2.4A3.916,3.916,0,0,0,20,23.9v10.62a3.916,3.916,0,0,0,3.927,3.9h2.4A3.916,3.916,0,0,1,22.4,34.525Z"
                                  transform="translate(-19.215 -19.215)"
                                />
                                <path
                                  class="card-details-logo-c"
                                  d="M15.313,20H4.688A4.693,4.693,0,0,1,0,15.313V4.688A4.693,4.693,0,0,1,4.688,0H15.313A4.693,4.693,0,0,1,20,4.688V15.313A4.693,4.693,0,0,1,15.313,20ZM4.688,1.562A3.129,3.129,0,0,0,1.562,4.688V15.313a3.129,3.129,0,0,0,3.125,3.125H15.313a3.129,3.129,0,0,0,3.125-3.125V4.688a3.129,3.129,0,0,0-3.125-3.125ZM8.242,3.945a.781.781,0,0,0-.781-.781H4.18a.781.781,0,0,0,0,1.563H7.461A.781.781,0,0,0,8.242,3.945Zm7.148,9.1a.781.781,0,0,0-.781-.781H8.086a.781.781,0,1,0,0,1.562h6.523A.781.781,0,0,0,15.391,13.047Zm1.055,3.047a.781.781,0,0,0-.781-.781H13.945a.781.781,0,1,0,0,1.562h1.719A.781.781,0,0,0,16.445,16.094Z"
                                />
                                <path
                                  class="card-details-logo-d"
                                  d="M137.878,163.595h-5.537a.785.785,0,1,1,0-1.571h5.537a.785.785,0,1,1,0,1.571Zm-1.964-3.809a.785.785,0,0,0-.785-.785h-7.344a.785.785,0,0,0,0,1.571h7.344A.785.785,0,0,0,135.915,159.785Z"
                                  transform="translate(-122.076 -152.799)"
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                        <p
                          class="text-ap-color-#0C365A text-ap-font-size-19 inline-block open-sans font-semibold md:font-normal"
                        >
                          Card details
                        </p>
                      </div>
                      <div class="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <g
                            class="arrow-up-down-logo-a"
                            transform="translate(-0.001)"
                          >
                            <g transform="translate(0.001)">
                              <path
                                class="arrow-up-down-logo-b"
                                d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm4.512,8.776-3.736,3.736a.914.914,0,0,1-.125.158.951.951,0,0,1-1.479-.158L5.42,8.76A.933.933,0,1,1,6.74,7.44l3.235,3.234,3.217-3.218a.934.934,0,0,1,1.321,1.32Z"
                                transform="translate(-0.001)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="border border-ap-color-#F0F0F0 mt-8 rounded-t-lg">
                    <div class="bg-ap-color-#EDF3FF p-6 rounded-lg shadow-md">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <span class="inline-block mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g transform="translate(29 -205)">
                                <rect
                                  class="recent-trnsctn-logo-a"
                                  width="24"
                                  height="24"
                                  transform="translate(-29 205)"
                                />
                                <g transform="translate(-27.011 207)">
                                  <path
                                    class="recent-trnsctn-logo-b"
                                    d="M25.758,35.53H23.921a1.564,1.564,0,1,1,0-3.129h2.347a1.565,1.565,0,0,0-.524,3.039q.007.041.015.082ZM24.73,26.222a.574.574,0,0,1-.912.148l-1.137-1.128a1.1,1.1,0,0,1,0-1.561l1.137-1.128a.573.573,0,0,1,.944.226h.527V21.2a1.239,1.239,0,0,0-2.107-.875l-2.468,2.446a2.388,2.388,0,0,0,0,3.388L23.183,28.6a1.239,1.239,0,0,0,2.107-.875V26.222Z"
                                    transform="translate(-19.217 -19.183)"
                                  />
                                  <path
                                    class="recent-trnsctn-logo-c"
                                    d="M15.216,20a2.009,2.009,0,0,1-2-2.015V16.326a.781.781,0,1,1,1.562,0v1.659a.43.43,0,0,0,.269.416.412.412,0,0,0,.465-.1l2.465-2.443a1.6,1.6,0,0,0,0-2.274L15.51,11.144a.412.412,0,0,0-.465-.1.43.43,0,0,0-.269.416V13.2a.781.781,0,0,1-.781.781H4.7a.781.781,0,0,0,0,1.562h1.25a.781.781,0,1,1,0,1.562H4.7a2.344,2.344,0,1,1,0-4.687h8.515v-.956a2,2,0,0,1,1.231-1.858,1.96,1.96,0,0,1,2.166.429l2.465,2.443a3.166,3.166,0,0,1,0,4.493L16.61,19.414A1.972,1.972,0,0,1,15.216,20Zm-9.61-9.614A1.98,1.98,0,0,0,6.847,8.532V7.654h8.476a2.344,2.344,0,0,0,0-4.687H6.847V2.011A1.98,1.98,0,0,0,5.606.157a2.01,2.01,0,0,0-2.2.425L.946,3.025a3.166,3.166,0,0,0,0,4.493L3.411,9.961a2,2,0,0,0,1.413.582,2.031,2.031,0,0,0,.782-.157ZM5,1.6a.435.435,0,0,1,.279.412V3.748a.781.781,0,0,0,.781.781h9.257a.781.781,0,0,1,0,1.562H6.065a.781.781,0,0,0-.781.781V8.532a.456.456,0,0,1-.773.319L2.046,6.408a1.6,1.6,0,0,1,0-2.274L4.511,1.691a.423.423,0,0,1,.305-.131A.5.5,0,0,1,5,1.6ZM1.5,3.58h0Z"
                                    transform="translate(0 0)"
                                  />
                                  <path
                                    class="recent-trnsctn-logo-d"
                                    d="M210.9,399.528h-2.112a.782.782,0,0,1,0-1.564H210.9a.782.782,0,0,1,0,1.564Z"
                                    transform="translate(-199.877 -382.425)"
                                  />
                                </g>
                              </g>
                            </svg>
                          </span>
                          <p
                            class="text-ap-color-#0C365A text-ap-font-size-19 inline-block open-sans font-semibold md:font-normal"
                          >
                            Recent transactions
                          </p>
                        </div>
                        <div class="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <g
                              class="arrow-up-down-logo-a"
                              transform="translate(0 0)"
                            >
                              <g transform="translate(0 0)">
                                <path
                                  class="arrow-up-down-logo-b"
                                  d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm4.512-8.776L10.777,7.487a.914.914,0,0,0-.125-.158.951.951,0,0,0-1.479.158L5.42,11.24a.933.933,0,1,0,1.32,1.32L9.975,9.326l3.217,3.218a.934.934,0,0,0,1.321-1.32Z"
                                  transform="translate(-0.001)"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="p-6">
                      <div class="flex border-b border-ap-color-#F5F5F5">
                        <div class="inline-block cursor-pointer">
                          <span
                            class="flex justify-center h-14 w-14 rounded-full bg-ap-color-#009DFF1A text-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 16 15.205"
                              class="mt-4"
                            >
                              <g transform="translate(0 -11.008)">
                                <g transform="translate(0.798 15.853)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
                                      transform="translate(-22.016 -146.176)"
                                    />
                                  </g>
                                </g>
                                <g transform="translate(0 11.008)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
                                      transform="translate(0 -11.008)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div class="grid grid-cols-2 gap-2 ml-3 w-full">
                          <div class="">
                            <div
                              class="text-ap-color-#222222 font-semibold text-ap-font-size-19 open-sans"
                            >
                              Hamleys
                            </div>
                            <div
                              class="text-ap-color-#AAAAAA text-ap-font-size-17 open-sans"
                            >
                              20 May 2020
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="flex justify-end items-center w-full">
                              <span
                                class="inline-block text-ap-color-#01D167 font-bold text-ap-font-size-19 open-sans"
                                >+ S$ 150
                              </span>
                              <span class="inline-block cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6.5"
                                  height="12"
                                  viewBox="0 0 6.5 12"
                                  class="ml-3"
                                >
                                  <g transform="translate(-117.33 0)">
                                    <g transform="translate(117.33 0)">
                                      <path
                                        class="arrow-next"
                                        d="M123.684,5.647l-5.5-5.5a.5.5,0,1,0-.707.707L122.623,6l-5.146,5.146a.5.5,0,1,0,.707.707l5.5-5.5A.5.5,0,0,0,123.684,5.647Z"
                                        transform="translate(-117.33 0)"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="col-span-2 mb-4">
                            <div class="flex w-full cursor-pointer">
                              <span
                                class="flex justify-center w-8 h-6 rounded-full bg-ap-color-#325BAF"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 10 7.862"
                                  class="text-center mt-1"
                                >
                                  <g transform="translate(0 -84.598)">
                                    <path
                                      class="business-and-finance"
                                      d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
                                      transform="translate(0 -125.106)"
                                    />
                                    <path
                                      class="business-and-finance"
                                      d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
                                      transform="translate(0 -0.736)"
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span
                                class="inline-block w-full text-ap-color-#325BAF ml-2  font-semibold open-sans text-base"
                                >Refund on debit card</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="px-6 py-2">
                      <div class="flex border-b border-ap-color-#F5F5F5">
                        <div class="inline-block cursor-pointer">
                          <span
                            class="flex justify-center h-14 w-14 rounded-full bg-ap-color-#009DFF1A text-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 16 15.205"
                              class="mt-4"
                            >
                              <g transform="translate(0 -11.008)">
                                <g transform="translate(0.798 15.853)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
                                      transform="translate(-22.016 -146.176)"
                                    />
                                  </g>
                                </g>
                                <g transform="translate(0 11.008)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
                                      transform="translate(0 -11.008)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div class="grid grid-cols-2 gap-2 ml-3 w-full">
                          <div class="">
                            <div
                              class="text-ap-color-#222222 font-semibold text-ap-font-size-19 open-sans"
                            >
                              Hamleys
                            </div>
                            <div
                              class="text-ap-color-#AAAAAA text-ap-font-size-17 open-sans"
                            >
                              20 May 2020
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="flex justify-end items-center w-full">
                              <span
                                class="inline-block text-ap-color-#01D167 font-bold text-ap-font-size-19 open-sans"
                                >+ S$ 150
                              </span>
                              <span class="inline-block cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6.5"
                                  height="12"
                                  viewBox="0 0 6.5 12"
                                  class="ml-3"
                                >
                                  <g transform="translate(-117.33 0)">
                                    <g transform="translate(117.33 0)">
                                      <path
                                        class="arrow-next"
                                        d="M123.684,5.647l-5.5-5.5a.5.5,0,1,0-.707.707L122.623,6l-5.146,5.146a.5.5,0,1,0,.707.707l5.5-5.5A.5.5,0,0,0,123.684,5.647Z"
                                        transform="translate(-117.33 0)"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="col-span-2 mb-4">
                            <div class="flex w-full cursor-pointer">
                              <span
                                class="flex justify-center w-8 h-6 rounded-full bg-ap-color-#325BAF"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 10 7.862"
                                  class="text-center mt-1"
                                >
                                  <g transform="translate(0 -84.598)">
                                    <path
                                      class="business-and-finance"
                                      d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
                                      transform="translate(0 -125.106)"
                                    />
                                    <path
                                      class="business-and-finance"
                                      d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
                                      transform="translate(0 -0.736)"
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span
                                class="inline-block w-full text-ap-color-#325BAF ml-2  font-semibold text-base open-sans"
                                >Refund on debit card</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="px-6 py-2">
                      <div class="flex border-b border-ap-color-#F5F5F5">
                        <div class="inline-block cursor-pointer">
                          <span
                            class="flex justify-center h-14 w-14 rounded-full bg-ap-color-#009DFF1A text-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 16 15.205"
                              class="mt-4"
                            >
                              <g transform="translate(0 -11.008)">
                                <g transform="translate(0.798 15.853)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
                                      transform="translate(-22.016 -146.176)"
                                    />
                                  </g>
                                </g>
                                <g transform="translate(0 11.008)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
                                      transform="translate(0 -11.008)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div class="grid grid-cols-2 gap-2 ml-3 w-full">
                          <div class="">
                            <div
                              class="text-ap-color-#222222 font-semibold text-ap-font-size-19 open-sans"
                            >
                              Hamleys
                            </div>
                            <div
                              class="text-ap-color-#AAAAAA text-ap-font-size-17 open-sans"
                            >
                              20 May 2020
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="flex justify-end items-center w-full">
                              <span
                                class="inline-block text-ap-color-#01D167 font-bold text-ap-font-size-19 open-sans"
                                >+ S$ 150
                              </span>
                              <span class="inline-block cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6.5"
                                  height="12"
                                  viewBox="0 0 6.5 12"
                                  class="ml-3"
                                >
                                  <g transform="translate(-117.33 0)">
                                    <g transform="translate(117.33 0)">
                                      <path
                                        class="arrow-next"
                                        d="M123.684,5.647l-5.5-5.5a.5.5,0,1,0-.707.707L122.623,6l-5.146,5.146a.5.5,0,1,0,.707.707l5.5-5.5A.5.5,0,0,0,123.684,5.647Z"
                                        transform="translate(-117.33 0)"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="col-span-2 mb-4">
                            <div class="flex w-full cursor-pointer">
                              <span
                                class="flex justify-center w-8 h-6 rounded-full bg-ap-color-#325BAF"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 10 7.862"
                                  class="text-center mt-1"
                                >
                                  <g transform="translate(0 -84.598)">
                                    <path
                                      class="business-and-finance"
                                      d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
                                      transform="translate(0 -125.106)"
                                    />
                                    <path
                                      class="business-and-finance"
                                      d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
                                      transform="translate(0 -0.736)"
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span
                                class="inline-block w-full text-ap-color-#325BAF ml-2  font-semibold text-base open-sans"
                                >Refund on debit card</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="px-6 py-2">
                      <div class="flex border-b border-ap-color-#F5F5F5">
                        <div class="inline-block cursor-pointer">
                          <span
                            class="flex justify-center h-14 w-14 rounded-full bg-ap-color-#009DFF1A text-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 16 15.205"
                              class="mt-4"
                            >
                              <g transform="translate(0 -11.008)">
                                <g transform="translate(0.798 15.853)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M22.016,146.176v9.766a.6.6,0,0,0,.592.594h13.2a.6.6,0,0,0,.592-.594v-9.766Zm10.188,3.75a.6.6,0,0,1-.592.594H26.8a.6.6,0,0,1-.592-.594V148.72a.6.6,0,0,1,.592-.594h4.807a.6.6,0,0,1,.592.594Z"
                                      transform="translate(-22.016 -146.176)"
                                    />
                                  </g>
                                </g>
                                <g transform="translate(0 11.008)">
                                  <g transform="translate(0 0)">
                                    <path
                                      class="file-storage-a"
                                      d="M15.39,11.008H.592A.6.6,0,0,0,0,11.6v3.509H16v-3.49A.617.617,0,0,0,15.39,11.008Z"
                                      transform="translate(0 -11.008)"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div class="grid grid-cols-2 gap-2 ml-3 w-full">
                          <div class="">
                            <div
                              class="text-ap-color-#222222 font-semibold text-ap-font-size-19 open-sans"
                            >
                              Hamleys
                            </div>
                            <div
                              class="text-ap-color-#AAAAAA text-ap-font-size-17 open-sans"
                            >
                              20 May 2020
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="flex justify-end items-center w-full">
                              <span
                                class="inline-block text-ap-color-#01D167 font-bold text-ap-font-size-19 open-sans"
                                >+ S$ 150
                              </span>
                              <span class="inline-block cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6.5"
                                  height="12"
                                  viewBox="0 0 6.5 12"
                                  class="ml-3"
                                >
                                  <g transform="translate(-117.33 0)">
                                    <g transform="translate(117.33 0)">
                                      <path
                                        class="arrow-next"
                                        d="M123.684,5.647l-5.5-5.5a.5.5,0,1,0-.707.707L122.623,6l-5.146,5.146a.5.5,0,1,0,.707.707l5.5-5.5A.5.5,0,0,0,123.684,5.647Z"
                                        transform="translate(-117.33 0)"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="col-span-2 mb-4">
                            <div class="flex w-full cursor-pointer">
                              <span
                                class="flex justify-center w-8 h-6 rounded-full bg-ap-color-#325BAF"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 10 7.862"
                                  class="text-center mt-1"
                                >
                                  <g transform="translate(0 -84.598)">
                                    <path
                                      class="business-and-finance"
                                      d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
                                      transform="translate(0 -125.106)"
                                    />
                                    <path
                                      class="business-and-finance"
                                      d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
                                      transform="translate(0 -0.736)"
                                    />
                                  </g>
                                </svg>
                              </span>
                              <span
                                class="inline-block w-full text-ap-color-#325BAF ml-2  font-semibold text-base open-sans"
                                >Refund on debit card</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="text-center bg-ap-color-#EDFFF5 py-4">
                      <button
                        class="text-ap-color-#01D167 text-ap-font-size-17 font-semibold open-sans w-full open-sans"
                      >
                        View all card transactions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "default",
  middleware: 'authenticated',
}
</script>
